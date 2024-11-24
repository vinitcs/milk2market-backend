import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const adminSchema = Schema(
  {
    adminName: {
      type: String,
      required: [true, "Please enter user name"],
      unique: [true, "Admin name already exist!!!"],
      lowercase: true,
      trim: true,
    },
    adminEmail: {
      type: String,
      required: [true, "Please enter admin email"],
      unique: [true, "Admin email already exist!!!"],
      lowercase: true,
      trim: true,
    },
    adminPassword: {
      type: String,
      required: [true, "Please enter admin password"],
      trim: true,
    },
  },
  {
    timestamp: true,
  }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("adminPassword")) return next();
  this.adminPassword = await bcrypt.hash(this.adminPassword, 10);
  next();
});

adminSchema.methods.isAdminPasswordCorrect = async function (adminPassword) {
  return await bcrypt.compare(adminPassword, this.adminPassword);
};

adminSchema.methods.generateAdminAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      adminName: this.adminName,
      adminEmail: this.adminEmail,
    },
    process.env.ADMIN_ACCESS_TOKEN_SECRECT,
    {
      expiresIn: process.env.ADMIN_ACCESS_TOKEN_EXPIRY,
    }
  );
};

export const Admin = model("Admin", adminSchema);

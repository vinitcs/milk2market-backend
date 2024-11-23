import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Please enter user name"],
      lowercase: true,
      trim: true,
      index: true,
    },
    userEmail: {
      type: String,
      required: [true, "Please enter user email"],
      unique: [true, "Email already exist!!!"],
      lowercase: true,
      trim: true,
    },
    userPhone: {
      type: String,
      required: [true, "Please enter phone"],
      unique: [true, "Phone already exist!!!"],
      trim: true,
    },
    userPassword: {
      type: String,
      required: [true, "Please enter user password"],
      trim: true,
    },
    userAddress: {
      address: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      pinCode: {
        type: Number,
      },
    },
    // refreshToken: {
    //   type: String,
    // },
    resetUserPasswordToken: {
      type: String,
    },

    resetUserPasswordExpire: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("userPassword")) return next();

  this.userPassword = await bcrypt.hash(this.userPassword, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.userPassword);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      userName: this.userName,
      userEmail: this.userEmail,
    },
    process.env.USER_ACCESS_TOKEN_SECRECT,
    {
      expiresIn: process.env.USER_ACCESS_TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetUserPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetUserPasswordExpire = Date.now() + 15 * 60 * 1000; //Expired after 15mins
  return resetToken;
};

export const User = model("User", userSchema);

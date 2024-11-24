import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN;

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Optional: include credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

//It is the process of converting a JSON string to a JSON object for data manipulation
app.use(express.json({ limit: "16kb" }));
// limit use to set how much request will come

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// optional extended:true for now => deals nested objects

app.use(express.static("public"))
// use to keep assests, favicon and so on

app.use(cookieParser());
// used to perform crud operations on cookie data



// import routes 

import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);



export { app };

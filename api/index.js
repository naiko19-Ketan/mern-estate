import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB;

mongoose
	.connect(uri)
	.then(() => {
		console.log("DB is connected");
	})
	.catch((err) => {
		console.log("DB connection error", err);
	});

const app = express();

app.listen(3000, () => {
	console.log("Server on port 3000");
});

app.use("/api/user", userRouter);

const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./model/User");

dotEnv.config();
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const PORT = 4000;
app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, number, address } = req.body;

    await User.create({ username, email, number, address });

    res.status(200).json({ message: "Request acknowledged successfully" });
  } catch (error) {
    console.error("Error processing the request:", error);

    // If there's an error, send an HTTP 500 Internal Server Error response with an error message
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("server is running");
});

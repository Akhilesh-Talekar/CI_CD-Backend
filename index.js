const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// mongoose.connect().then(() => {
//   console.log("Connected to MongoDB");
// })

app.use(
  cors({
    origin: [
      "http://ec2-35-154-219-226.ap-south-1.compute.amazonaws.com",
      "http://localhost:5173",
    ], // Add all frontend URLs explicitly
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
  })
);

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World this deploys automatically!");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "This is some data from the backend!" });
});

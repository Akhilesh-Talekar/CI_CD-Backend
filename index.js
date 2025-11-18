const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(
  cors({
    origin: ["http://localhost:5173"], // Add all frontend URLs explicitly
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

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.get("/", (req, res) => {
  res.send("Hello World this deploys automatically!");
});

app.get("/api/data", (req, res) => {
  res.json({ message: "This is some data from the backend!" });
});

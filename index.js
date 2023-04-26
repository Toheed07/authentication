const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const authRoutes = require("./routes/auth");
const postRoute = require("./routes/post")

// Routes Middleware

app.use("/api/user", authRoutes);
app.use("/api/posts", postRoute);


mongoose.connect(
  "mongodb://localhost/rest-auth-DB",
  console.log("DB connected"),
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

app.listen(3000, () => console.log("Server is live"));

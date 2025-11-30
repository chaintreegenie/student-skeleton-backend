const express = require("express");
const app = express();

const userRoutes = require("./src/routes/userRoutes");
const errorHandler = require("./src/middlewares/errorHandler");

app.use(express.json());
app.use("/user", userRoutes);
app.use(errorHandler);

module.exports = app;
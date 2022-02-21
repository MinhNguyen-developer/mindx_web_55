/** @format */

const express = require("express");
const router = require("./routers/index");
const { connectToDb } = require("./database");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use("/assets", express.static("assets"));
connectToDb();
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log("App is running at " + port);
});

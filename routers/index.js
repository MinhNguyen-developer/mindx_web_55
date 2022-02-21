/** @format */

const express = require("express");
const authRouter = require("./auth");
const userRouter = require("./user");
const upload = require("./upload");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/upload", upload);

module.exports = router;

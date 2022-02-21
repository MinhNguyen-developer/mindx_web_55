/** @format */
const { db } = require("./index");
const { ObjectId } = require("mongodb");
const findByUsername = async (username) => {
  const user = await db.users.findOne({ username: username });
  return user;
};

const findById = async (_id) => {
  const user = await db.users.findOne({ _id: ObjectId(_id) });
  return user;
};

const insertUser = async (user) => {
  await db.users.insertOne(user);
  return user;
};

const findAllUser = async () => {
  return await db.users.find({}).toArray();
};
module.exports = { findByUsername, findById, insertUser, findAllUser };

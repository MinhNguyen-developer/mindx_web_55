/** @format */
const { findAllUser } = require("../database/user");
const getUsers = async () => {
  const users = await findAllUser();
  return users;
};

module.exports = { getUsers };

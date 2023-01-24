const { Users } = require("../db");

const createUser = async (user, hashedPassword) => {
  const userCreated = await Users.create({
    user,
    hashedPassword,
  });
  return userCreated;
};

module.exports = createUser;

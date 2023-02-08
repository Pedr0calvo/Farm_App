const { Users } = require("../db");
const bcryptjs = require("bcryptjs");

const logUser = async (user, nohashedPassword) => {
  const userLogin = await Users.findOne({
    where: { user },
  });
  if (userLogin) {
    bcryptjs
      .compare(nohashedPassword, hashPass)
      .then(() => console.log(nohashedPassword, hashPass, comparePwd))
      .catch(() => console.log(nohashedPassword, hashPass, comparePwd));
    return { msg: "Authorized" };
    // if (comparePwd) {
    //   Users.update({ isActive: true }, { where: { user } });
    //   return { msg: "Authorized" };
    // }
  } else {
    return { msg: "Unauthorized" };
  }
};

module.exports = logUser;

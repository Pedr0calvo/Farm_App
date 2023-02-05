const { Users } = require("../db");
const bcrypt = require("bcrypt");

const logUser = async (user, nohashedPassword) => {
  console.log(user, nohashedPassword);
  const userLogin = await Users.findOne({
    where: { user },
  });
  if (userLogin) {
    let comparePwd = await bcrypt.compare(
      nohashedPassword,
      userLogin.hashedPassword.toString()
    );
    if (comparePwd) {
      Users.update({ isActive: true }, { where: { user } });
      return { msg: "Authorized" };
    }
  } else {
    return { msg: "Unauthorized" };
  }
};

module.exports = logUser;

const { Farms, Users } = require("../db");

const createFarms = async (data) => {
  try {
    const {
      owner,
      place,
      crops,
    } = data.farm;
    const farmCreate = await Farms.create({
      owner,
      place,
      crops,
    });
    const findUser = await Users.findOne({ where: { user: data.userMod } });
    farmCreate.setUser(findUser);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createFarms;

const { Farms, Users } = require("../db");

const createFarms = async (data) => {
  try {
    const { owner, place, crops } = data.farm;
    let user = data.userMod.toLowerCase();
    console.log(user);
    const farmCreate = await Farms.create({
      owner,
      place,
      crops,
    });
    const findUser = await Users.findOne({ where: { user } });
    farmCreate.setUser(findUser);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createFarms;

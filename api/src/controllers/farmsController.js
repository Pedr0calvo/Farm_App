const { Farms } = require("../db");

const getFarmsDb = async () => {
  const getFarms = await Farms.findAll();
  return getFarms;
};

module.exports = getFarmsDb;

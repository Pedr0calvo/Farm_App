const { Aplications } = require("../db");

const getAplications = async () => {
  const getAplications = await Aplications.findAll();
  return getAplications;
};

module.exports = getAplications;

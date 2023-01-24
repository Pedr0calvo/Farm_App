const { Farms, Yield } = require("../db");

const createYield = async (yield, harvest_quality, comentario, modalfarm) => {
  const yieldCreate = await Yield.create({
    yield,
    harvest_quality,
    comentario,
  });
  const findFarm = await Farms.findByPk(modalfarm);
  yieldCreate.setFarm(findFarm);
};

module.exports = createYield;

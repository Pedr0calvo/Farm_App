const { Farms, Monitoring } = require("../db");

const createMonitoring = async (type, note, image, modalfarm) => {
  try {
    const monitoringCreate = await Monitoring.create({
      tipo: type,
      comentario: note,
      image: image,
    });
    const findFarm = await Farms.findByPk(modalfarm);
    monitoringCreate.setFarm(findFarm);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createMonitoring;

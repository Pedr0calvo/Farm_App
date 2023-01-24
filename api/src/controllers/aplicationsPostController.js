const { Farms, Aplications } = require("../db");

const createAplication = async (
  productos,
  dosis,
  cantidad,
  comentario,
  modalfarm
) => {
  console.log(productos, dosis, cantidad, comentario, modalfarm);
  const aplicationCreate = await Aplications.create({
    productos,
    dosis,
    cantidad,
    comentario,
  });
  const findFarm = await Farms.findByPk(modalfarm);
  aplicationCreate.setFarm(findFarm);
};

module.exports = createAplication;

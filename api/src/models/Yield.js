const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("yield", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    yield: {
      type: DataTypes.STRING,
    },
    harvest_quality: {
      type: DataTypes.STRING,
    },
    comentario: {
      type: DataTypes.STRING,
    },
  });
};

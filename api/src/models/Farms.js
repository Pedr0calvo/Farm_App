const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("farms", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    owner: {
      type: DataTypes.STRING,
    },
    place: {
      type: DataTypes.STRING,
    },
    crops: {
      type: DataTypes.STRING,
    },
  });
};

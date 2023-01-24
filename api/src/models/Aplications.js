const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("aplications", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    productos: {
      type: DataTypes.STRING,
    },
    dosis: {
      type: DataTypes.STRING,
    },
    cantidad: {
      type: DataTypes.STRING,
    },
    comentario: {
      type: DataTypes.STRING,
    },
  });
};

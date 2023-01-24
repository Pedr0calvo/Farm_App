const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/,
      },
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};

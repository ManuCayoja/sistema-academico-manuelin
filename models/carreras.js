"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define(
    "carrera",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
      tableName: "carreras",
    }
  );

  carrera.getCarreras = async (params) => {
    const query = ``; // Aquí debes definir la consulta para obtener las carreras
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  carrera.associate = function (models) {
    // Aquí puedes definir las asociaciones de las carreras con otros modelos si es necesario
  };

  return carrera;
};

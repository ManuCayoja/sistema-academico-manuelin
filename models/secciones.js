"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const secciones = sequelize.define(
    "secciones",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fk_materia: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: "materias",
          key: "id",
        }
      },
    },
    {
      timestamps: false,
      tableName: "secciones",
    }
  );

  secciones.getsecciones = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  secciones.associate = function (models) {
    // secciones.hasMany(models.secciones, {
    //   foreignKey: "fk_seccione",
    //   as: "secciones",
    // });
  };

  return secciones;
};

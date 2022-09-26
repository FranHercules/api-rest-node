import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Reserva = sequelize.define(
  "Reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombreCacha: {
      type: DataTypes.STRING,
    },
    fecha: {
      type: DataTypes.STRING
      //defaultValue: false,
    },
    hora: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
  }
);

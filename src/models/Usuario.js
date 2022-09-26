import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Reserva } from "./Reserva.js";

export const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    edad: {
      type: DataTypes.INTEGER,
    },
    correo: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

Usuario.hasMany(Reserva, {
  foreinkey: "usuarioid",
  sourceKey: "id",
});

Reserva.belongsTo(Usuario, { foreinkey: "usuarioid", targetId: "id" });

//import { Project } from "../models/Usuario.js";
import { Usuario } from "../models/Usuario.js";
import { Reserva } from "../models/Reserva.js";

export async function getUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      atributes: ["id", "nombre", "edad", "correo"],
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUsuario(req, res) {
  const { nombre, edad, correo} = req.body;
  try {
    let newUsuario = await Usuario.create(
      {
        nombre,
        edad,
        correo,
        //deliveryDate: new Date(deliveryDate).getTime(),
      },
      {
        fields: ["nombre", "edad", "correo"],
      }
    );
    return res.json(newUsuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getUsuario(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findOne({
      where: {
        id,
      },
    });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, edad, correo } = req.body;

    const usuario = await Usuario.findByPk(id);
    usuario.nombre = nombre;
    usuario.edad = edad;
    usuario.correo = correo;
    await usuario.save();

    res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    await Reserva.destroy({
      where: {
        usuarioId: id,
      },
    });
    await Usuario.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUsuarioReservas(req, res) {
  const { id } = req.params;
  try {
    const reservas = await Reserva.findAll({
      attributes: ["id", "usuarioId", "nombreCacha", "fecha", "hora"],
      where: { usuarioId: id },
    });
    res.json(reservas);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

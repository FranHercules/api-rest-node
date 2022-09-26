import { Reserva } from "../models/Reserva.js";

export async function createReserva(req, res) {
  try {
    const { nombreCacha, fecha, hora, usuarioId } = req.body;
    const newReserva = await Reserva.create({
      usuarioId,
      nombreCacha,
      fecha,
      hora
    });
    res.json(newReserva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getReservas(req, res) {
  try {
    const reservas = await Reserva.findAll({
      attributes: ["id", "UsuarioId", "nombreCacha", "fecha", "hora"],
      order: [["id", "DESC"]],
    });
    res.json(reservas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateReservas(req, res) {
  const { id } = req.params;
  // const { projectid, name, done } = req.body;
  try {
    // const updatedTask = await Task.update(
    //   { name, done, projectid },
    //   { where: { id } }
    // );

    const reserva = await Reserva.findOne({
      attributes: ["nombre", "usuarioId", "fecha", "hora", "id"],
      where: { id },
    });

    reserva.set(req.body);

    await reserva.save();

    res.json(reserva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteReserva(req, res) {
  const { id } = req.params;
  try {
    await Reserva.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getReserva(req, res) {
  const { id } = req.params;
  try {
    const reserva = await Task.findOne({
      where: { id },
      attributes: ["id", "usuarioId", "nombreCacha", "fecha", "hora"]
    });
    res.json(reserva);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

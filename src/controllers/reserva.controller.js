const reservacontrol = {};
const reserva = require('../models/reservas');

reservacontrol.getreserva = async (req, res) => {
  const id = req.params.id;
  try {
      const reservaDB = await reserva.findOne({id});
      res.json(reservaDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
reservacontrol.getreservas = async (req, res) => {
  try {
      const reservaDB = await reserva.find();
      res.json(reservaDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};

reservacontrol.postreservas = async (req, res) => {
  const body = req.body;
  try {
      const reservaDB = await reserva.create(body);
      res.status(200).json(reservaDB);
  } catch (error) {
      return res.status(500).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
reservacontrol.deletereservas = async (req, res) => {
  try {
      const reservaDB = await reserva.findOneAndDelete(req.params.id);
      if (!reservaDB) {
          return res.status(400).json({
              mensaje: 'No se encontró el id indicado',
              error
          })
      }
      res.json(reservaDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
reservacontrol.updatereservas = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
      const reservaDB = await reserva.findOneAndUpdate(
          id,
          body,
          { new: true });
      res.json(reservaDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};



module.exports = reservacontrol
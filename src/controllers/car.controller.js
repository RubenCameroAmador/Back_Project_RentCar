const carcontrol = {};
const car = require('../models/cars');

carcontrol.getcar = async (req, res) => {
  const id = req.params.id;
  try {
      const carDB = await car.findOne({id});
      res.json(carDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
carcontrol.getcars = async (req, res) => {
  try {
      const carDB = await car.find();
      res.json(carDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};

carcontrol.postcars = async (req, res) => {
  const body = req.body;
  try {
      const carDB = await car.create(body);
      res.status(200).json(carDB);
  } catch (error) {
      return res.status(500).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
carcontrol.deletecars = async (req, res) => {
  try {
      const carDB = await car.findOneAndDelete(req.params.id);
      if (!carDB) {
          return res.status(400).json({
              mensaje: 'No se encontró el id indicado',
              error
          })
      }
      res.json(carDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
carcontrol.updatecars = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
      const carDB = await car.findOneAndUpdate(
          id,
          body,
          { new: true });
      res.json(carDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};



module.exports = carcontrol
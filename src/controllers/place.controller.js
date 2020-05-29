const placecontrol = {};
const place = require('../models/places');

placecontrol.getplace = async (req, res) => {
  const id = req.params.id;
  try {
      const placeDB = await place.findOne({id});
      res.json(placeDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
placecontrol.getplaces = async (req, res) => {
  try {
      const placeDB = await place.find();
      res.json(placeDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};

placecontrol.postplaces = async (req, res) => {
  const body = req.body;
  try {
      const placeDB = await place.create(body);
      res.status(200).json(placeDB);
  } catch (error) {
      return res.status(500).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
placecontrol.deleteplaces = async (req, res) => {
  try {
      const placeDB = await place.findOneAndDelete(req.params.id);
      if (!placeDB) {
          return res.status(400).json({
              mensaje: 'No se encontró el id indicado',
              error
          })
      }
      res.json(placeDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
placecontrol.updateplaces = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
      const placeDB = await place.findOneAndUpdate(
          id,
          body,
          { new: true });
      res.json(placeDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};



module.exports = placecontrol
const billcontrol = {};
const bill = require('../models/bills');

billcontrol.getbill = async (req, res) => {
  const id = req.params.id;
  try {
      const billDB = await bill.findOne({id});
      res.json(billDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
billcontrol.getbills = async (req, res) => {
  try {
      const billDB = await bill.find();
      res.json(billDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};

billcontrol.postbills = async (req, res) => {
  const body = req.body;
  try {
      const billDB = await bill.create(body);
      res.status(200).json(billDB);
  } catch (error) {
      return res.status(500).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
billcontrol.deletebills = async (req, res) => {
  try {
      const billDB = await bill.findOneAndDelete(req.params.id);
      if (!billDB) {
          return res.status(400).json({
              mensaje: 'No se encontró el id indicado',
              error
          })
      }
      res.json(billDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
billcontrol.updatebills = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
      const billDB = await bill.findOneAndUpdate(
          id,
          body,
          { new: true });
      res.json(billDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};



module.exports = billcontrol
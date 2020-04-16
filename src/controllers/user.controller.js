const usercontrol = {};
const user = require('../models/users');

usercontrol.getuser = async (req, res) => {
  const id = req.params.id;
  try {
      const userDB = await user.findOne({id});
      res.json(userDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
usercontrol.getusers = async (req, res) => {
  try {
      const userDB = await user.find();
      res.json(userDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};

usercontrol.postusers = async (req, res) => {
  const body = req.body;
  try {
      const userDB = await user.create(body);
      res.status(200).json(userDB);
  } catch (error) {
      return res.status(500).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
usercontrol.deleteusers = async (req, res) => {
  try {
      const userDB = await user.findOneAndDelete(req.params.id);
      if (!userDB) {
          return res.status(400).json({
              mensaje: 'No se encontró el id indicado',
              error
          })
      }
      res.json(userDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};
usercontrol.updateusers = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
      const userDB = await user.findOneAndUpdate(
          id,
          body,
          { new: true });
      res.json(userDB);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
};



module.exports = usercontrol
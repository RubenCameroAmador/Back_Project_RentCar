const { Schema, model } = require('mongoose')

const usersSchema = new Schema({
  nombre: String,
  apellido: String,
  id: String,
  correo: String,
  contraseña: String,
});

// Convertir a modelo
module.exports = model('user', usersSchema);
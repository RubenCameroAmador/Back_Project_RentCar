const { Schema, model } = require('mongoose')

const carsSchema = new Schema({
  idcar: String,
  marca: String,
  modelo: String,
  cilindraje: String,
  color: String,
  placa: String,
  puertas: String,
});

// Convertir a modelo
module.exports = model('car', carsSchema);
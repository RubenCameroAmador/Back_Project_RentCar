const { Schema, model } = require('mongoose')

const placesSchema = new Schema({
  idplace: String,
  idcarro: String,
  pais: String,
  departamento: String,
  ciudad: String,
  barrio: String,
  direccion: String,
  nocarros: String,
  nombregerente: String,
});

// Convertir a modelo
module.exports = model('place', placesSchema);
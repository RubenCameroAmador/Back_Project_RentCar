const { Schema, model } = require('mongoose')

const reservasSchema = new Schema({
  idreserva: String,
  iduser: String,
  idcarro: String,
  fechainicio: String,
  fechafin: String,
});

// Convertir a modelo
module.exports = model('reserva', reservasSchema);
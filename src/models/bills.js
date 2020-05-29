const { Schema, model } = require('mongoose')

const billsSchema = new Schema({
  idbill: String,
  idusuario: String,
  idcarro: String,
  fechaEntrega: String,
  monto: String,
});

// Convertir a modelo
module.exports = model('bill', billsSchema);
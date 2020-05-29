const express = require('express');
const router = express.Router();

const { getreservas, postreservas, deletereservas, updatereservas, getreserva } = require('../controllers/reserva.controller')

router.route('/') /* localhost:4000/reserva */
  .get(getreservas)
  .post(postreservas);

router.route('/:id')
  .get(getreserva)
  .delete(deletereservas)
  .put(updatereservas);

module.exports = router;
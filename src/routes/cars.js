const express = require('express');
const router = express.Router();

const { getcars, postcars, deletecars, updatecars, getcar } = require('../controllers/car.controller')

router.route('/') /* localhost:4000/car */
  .get(getcars)
  .post(postcars);

router.route('/:id')
  .get(getcar)
  .delete(deletecars)
  .put(updatecars);

module.exports = router;
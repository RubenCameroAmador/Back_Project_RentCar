const express = require('express');
const router = express.Router();

const { getplaces, postplaces, deleteplaces, updateplaces, getplace } = require('../controllers/place.controller')

router.route('/') /* localhost:4000/place */
  .get(getplaces)
  .post(postplaces);

router.route('/:id')
  .get(getplace)
  .delete(deleteplaces)
  .put(updateplaces);

module.exports = router;
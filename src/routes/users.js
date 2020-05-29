const express = require('express');
const router = express.Router();

const { getusers, postusers, deleteusers, updateusers, getuser } = require('../controllers/user.controller')

router.route('/') /* localhost:4000/user */
  .get(getusers)
  .post(postusers);

router.route('/:id')
  .get(getuser)
  .delete(deleteusers)
  .put(updateusers);

module.exports = router;
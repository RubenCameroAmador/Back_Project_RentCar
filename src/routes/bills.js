const express = require('express');
const router = express.Router();

const { getbills, postbills, deletebills, updatebills, getbill } = require('../controllers/bill.controller')

router.route('/') /* localhost:4000/bill */
  .get(getbills)
  .post(postbills);

router.route('/:id')
  .get(getbill)
  .delete(deletebills)
  .put(updatebills);

module.exports = router;
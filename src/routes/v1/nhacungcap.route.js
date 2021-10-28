const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const nhacungcapValidation = require('../../validations/nhacungcap.validation');
const nhacungcapController = require('../../controllers/nhacungcap.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(nhacungcapValidation.createNhacungcap), nhacungcapController.createNhacungcap)
  .get(validate(nhacungcapValidation.getNhacungcaps), nhacungcapController.getNhacungcaps);

router
  .route('/:nhacungcapId')
  .get(validate(nhacungcapValidation.getNhacungcap), nhacungcapController.getNhacungcap)
  .patch(validate(nhacungcapValidation.updateNhacungcap), nhacungcapController.updateNhacungcap)
  .delete(validate(nhacungcapValidation.deleteNhacungcap), nhacungcapController.deleteNhacungcap);

module.exports = router;



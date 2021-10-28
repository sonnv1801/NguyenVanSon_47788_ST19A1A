const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const dongxeValidation = require('../../validations/dongxe.validation');
const dongxeController = require('../../controllers/dongxe.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(dongxeValidation.createDongxe), dongxeController.createDongxe)
  .get(validate(dongxeValidation.getDongxes), dongxeController.getDongxes);

router
  .route('/:dongxeId')
  .get(validate(dongxeValidation.getDongxe), dongxeController.getDongxe)
  .patch(validate(dongxeValidation.updateDongxe), dongxeController.updateDongxe)
  .delete(validate(dongxeValidation.deleteDongxe), dongxeController.deleteDongxe);

module.exports = router;


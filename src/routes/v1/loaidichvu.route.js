const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const loaidichvuValidation = require('../../validations/loaidichvu.validation');
const loaidichvuController = require('../../controllers/loaidichvu.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(loaidichvuValidation.createLoaidichvu), loaidichvuController.createLoaidichvu)
  .get(validate(loaidichvuValidation.getLoaidichvus), loaidichvuController.getLoaidichvus);

router
  .route('/:loaidichvuId')
  .get(validate(loaidichvuValidation.getLoaidichvu), loaidichvuController.getLoaidichvu)
  .patch(validate(loaidichvuValidation.updateLoaidichvu), loaidichvuController.updateLoaidichvu)
  .delete(validate(loaidichvuValidation.deleteLoaidichvu), loaidichvuController.deleteLoaidichvu);

module.exports = router;


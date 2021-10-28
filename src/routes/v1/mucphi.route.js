const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const mucphiValidation = require('../../validations/mucphi.validation');
const mucphiController = require('../../controllers/mucphi.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(mucphiValidation.createMucphi), mucphiController.createMucphi)
  .get(validate(mucphiValidation.getMucphis), mucphiController.getMucphis);

router
  .route('/:mucphiId')
  .get(validate(mucphiValidation.getMucphi), mucphiController.getMucphi)
  .patch(validate(mucphiValidation.updateMucphi), mucphiController.updateMucphi)
  .delete(validate(mucphiValidation.deleteMucphi), mucphiController.deleteMucphi);

module.exports = router;


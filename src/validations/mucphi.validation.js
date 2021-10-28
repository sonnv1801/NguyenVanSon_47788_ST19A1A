const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createMucphi = {
  body: Joi.object().keys({
    MaMP: Joi.string().required(),
    DonGia: Joi.number().integer().required(),
    MoTa: Joi.string(),
  }),
};

const getMucphis = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getMucphi = {
  params: Joi.object().keys({
    mucphiId: Joi.string().custom(objectId),
  }),
};

const updateMucphi = {
  params: Joi.object().keys({
    mucphiId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      MaMP: Joi.string(),
      DonGia: Joi.number(),
      MoTa: Joi.string(),
    })
    .min(1),
};

const deleteMucphi = {
  params: Joi.object().keys({
    mucphiId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createMucphi,
  getMucphis,
  getMucphi,
  updateMucphi,
  deleteMucphi,
};

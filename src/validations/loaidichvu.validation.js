const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createLoaidichvu = {
  body: Joi.object().keys({
    MaLoaiDV: Joi.string().required(),
    TenLoaiDV: Joi.string().required(),
  }),
};

const getLoaidichvus = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLoaidichvu = {
  params: Joi.object().keys({
    loaidichvuId: Joi.string().custom(objectId),
  }),
};

const updateLoaidichvu = {
  params: Joi.object().keys({
    loaidichvuId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      MaLoaiDV: Joi.string(),
      TenLoaiDV: Joi.string(),
    })
    .min(1),
};

const deleteLoaidichvu = {
  params: Joi.object().keys({
    loaidichvuId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLoaidichvu,
  getLoaidichvus,
  getLoaidichvu,
  updateLoaidichvu,
  deleteLoaidichvu,
};

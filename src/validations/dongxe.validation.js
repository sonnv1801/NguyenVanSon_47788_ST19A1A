const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createDongxe = {
  body: Joi.object().keys({
    DongXe: Joi.string().required(),
    HangXe: Joi.string().required(),
    SoChoNgoi: Joi.number().integer().required(),
  }),
};

const getDongxes = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getDongxe = {
  params: Joi.object().keys({
    dongxeId: Joi.string().custom(objectId),
  }),
};

const updateDongxe = {
  params: Joi.object().keys({
    dongxeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      DongXe: Joi.string(),
      HangXe: Joi.string(),
      SoChoNgoi: Joi.number(),
    })
    .min(1),
};

const deleteDongxe = {
  params: Joi.object().keys({
    dongxeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createDongxe,
  getDongxes,
  getDongxe,
  updateDongxe,
  deleteDongxe,
};

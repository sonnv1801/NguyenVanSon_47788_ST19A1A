const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createNhacungcap = {
  body: Joi.object().keys({
    MaNhaCC: Joi.string().required(),
    TenNhaCC: Joi.string().required(),
    DiaChi: Joi.string().required(),
    SoDT: Joi.number().integer().required(),
    MaSoThue: Joi.number().integer().required(),
  }),
};

const getNhacungcaps = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getNhacungcap = {
  params: Joi.object().keys({
    nhacungcapId: Joi.string().custom(objectId),
  }),
};

const updateNhacungcap = {
  params: Joi.object().keys({
    nhacungcapId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      MaNhaCC: Joi.string(),
      TenNhaCC: Joi.string(),
      DiaChi: Joi.string(),
      SoDT: Joi.number(),
      MaSoThue: Joi.number(),
    })
    .min(1),
};

const deleteNhacungcap = {
  params: Joi.object().keys({
    nhacungcapId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createNhacungcap,
  getNhacungcap,
  getNhacungcaps,
  updateNhacungcap,
  deleteNhacungcap,
};

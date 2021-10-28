const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const dongxeSchema = mongoose.Schema(
  {
    DongXe: {
      type: String,
      required: true,
      trim: true,
    },
    HangXe: {
      type: String,
      required: true,
      trim: true,
    },
    SoChoNgoi: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
dongxeSchema.plugin(toJSON);
dongxeSchema.plugin(paginate);

/**
 * @typedef Dongxe
 */
const Dongxe = mongoose.model('Dongxe', dongxeSchema);

module.exports = Dongxe;

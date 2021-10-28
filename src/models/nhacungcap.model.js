const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const nhacungcapSchema = mongoose.Schema(
  {
    MaNhaCC: {
      type: String,
      required: true,
      trim: true,
    },
    TenNhaCC: {
      type: String,
      required: true,
      trim: true,
    },
    DiaChi: {
      type: String,
      required: true,
      trim: true,
    },
    SoDT: {
      type: Number,
      required: true,
      trim: true,
    },
    MaSoThue: {
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
nhacungcapSchema.plugin(toJSON);
nhacungcapSchema.plugin(paginate);



/**
 * @typedef Nhacungcap
 */
const Nhacungcap = mongoose.model('Nhacungcap', nhacungcapSchema);

module.exports = Nhacungcap;

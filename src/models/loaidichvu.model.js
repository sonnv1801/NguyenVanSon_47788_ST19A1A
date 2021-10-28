const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const loaidichvuSchema = mongoose.Schema(
  {
    MaLoaiDV: {
      type: String,
      required: true,
      trim: true,
    },
    TenLoaiDV: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
loaidichvuSchema.plugin(toJSON);
loaidichvuSchema.plugin(paginate);

/**
 * @typedef Loaidichvu
 */
const Loaidichvu = mongoose.model('Loaidichvu', loaidichvuSchema);

module.exports = Loaidichvu;

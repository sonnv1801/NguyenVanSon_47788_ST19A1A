const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const mucphiSchema = mongoose.Schema(
  {
    MaMP: {
      type: String,
      required: true,
      trim: true,
    },
    DonGia: {
      type: Number,
      required: true,
      trim: true,
    },
    MoTa: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
mucphiSchema.plugin(toJSON);
mucphiSchema.plugin(paginate);

/**
 * @typedef Mucphi
 */
const Mucphi = mongoose.model('Mucphi', mucphiSchema);

module.exports = Mucphi;

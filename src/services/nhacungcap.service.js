const httpStatus = require('http-status');
const { Nhacungcap } = require('../models');
const ApiError = require('../utils/ApiError');


const createNhacungcap = async (data) => {
  const result = await Nhacungcap.create(data)
  return result;
};

const queryNhacungcaps = async (filter, options) => {
  const results = await Nhacungcap.paginate(filter, options);
  return results;
};


const getNhacungcapById = async (id) => {
  return Nhacungcap.findById(id);
};

const updateNhacungcapById = async (nhacungcapId, updateBody) => {
  const results = await getNhacungcapById(nhacungcapId);
  Object.assign(results, updateBody);
  await results.save();
  return results;
};

const deleteNhacungcapById = async (userId) => {
  const results = await getNhacungcapById(userId);
  if (!results) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Nha cung cap not found');
  }
  await results.remove();
  return results;
};

module.exports = {
  createNhacungcap,
  queryNhacungcaps,
  getNhacungcapById,
  updateNhacungcapById,
  deleteNhacungcapById,
};

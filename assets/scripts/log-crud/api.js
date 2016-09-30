'use strict';

const app = require('../app.js');

// const getFormFields = require('../../../lib/get-form-fields');

const createLog = function(data) {
  return $.ajax({
    url: app.host + '/logs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

const updateLog = function(data) {
  return $.ajax({
    url: app.host + '/logs/2',
    method: 'PATCH',
    //headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
    data: data,
  });
};

const getLogs = function() {
  return $.ajax({
    url: app.host + '/logs',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
  });
};

const getLogById = function(data) {
  return $.ajax({
    url: app.host + '/logs/' + data.getLogById,
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
  });
};

const deleteLog = function() {
  return $.ajax({
    url: app.host + '/logs/' + app.log.id,
    method: 'DELETE',
  //   headers: {
  //     Authorization: 'Token token=' + app.user.token,
  //   },
  });
};

module.exports = {
  createLog,
  updateLog,
  deleteLog,
  getLogs,
  getLogById,
};

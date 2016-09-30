'use strict';

const app = require('../app.js');

// const getFormFields = require('../../../lib/get-form-fields');

const createLog = function(data) {
  return $.ajax({
    url: app.host + '/logs',
    method: 'POST',
    data: data,
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
  });
};

const onUpdateLog = function(data) {
  return $.ajax({
    url: app.host + '/logs/' + app.log.id,
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
  onUpdateLog,
  deleteLog,
  getLogs,
  getLogById,
};

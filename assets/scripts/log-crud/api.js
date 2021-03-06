'use strict';

const app = require('../app.js');

const createLog = function(data) {
  return $.ajax({
    url: app.host + '/logs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const updateLog = function(data) {
  return $.ajax({
    url: app.host + '/logs/' + app.log.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const selectLog = function(data) {
  return $.ajax({
    url: app.host + '/logs/' + data.selectLog,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getLog = function(data) {
  return $.ajax({
    url: app.host + '/logs/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getLogs = function() {
  return $.ajax({
    url: app.host + '/logs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getLogsHistory = function() {
  return $.ajax({
    url: app.host + '/logs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteLogById = function(data) {
  return $.ajax({
    url: app.host + '/logs/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  createLog,
  updateLog,
  deleteLogById,
  getLogs,
  getLogsHistory,
  selectLog,
  getLog,
};

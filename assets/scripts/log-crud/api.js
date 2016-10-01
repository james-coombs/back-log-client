'use strict';

const app = require('../app.js');

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
    url: app.host + '/logs/' + app.log.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const setLogToPassed = function() {
  return $.ajax({
    url: app.host + '/logs/' + app.logs,
    method: 'PATCH',
    data: {
      "log": {
      "passed": "True",
   }
 },
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
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

const getLogById = function(data) {
  return $.ajax({
    url: app.host + '/logs/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const deleteLogById = function(data) {
  return $.ajax({
    url: app.host + '/logs/' + data.deleteLogById,
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
  setLogToPassed,
  getLogById,
};

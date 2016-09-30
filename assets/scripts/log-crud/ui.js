'use strict';

const app = require('../app.js');

const onCreateLogSuccess = function(data) {
  if (data) {
    $('.info').text(data.logs);
  }
};

const updateLogSuccess = function(data) {
  if (data) {
    $('.info').text(data.log);
  }
};

// const signInSuccess = function(data) {
//   app.user = data.user;
//   $('.info').text(data.user.id);
// };

const getLogsSuccess = function (data) {
  app.log = data.logs;
  $('.info').text(data.logs[0].title);
  console.log(data);
};

const getLogByIdSuccess = function (data) {
  app.log = data.log;
  $('.info').text(data.log.title);
};

const deleteLogSuccess = function() {
  $('.info').text('Log deleted');
};

const failure = function() {
  $('.info').text('Log deleted');
};

module.exports = {
  onCreateLogSuccess,
  updateLogSuccess,
  deleteLogSuccess,
  failure,
  getLogsSuccess,
  getLogByIdSuccess,
};

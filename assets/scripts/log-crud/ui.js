'use strict';

const app = require('../app.js');

const showLogs = require('../templates/logs-listing.handlebars');

//const showLog = require('../templates/log-display.handlebars');

const onCreateLogSuccess = function(data) {
    $('.user-display').text('log created' + data.logs);
  };

const updateLogSuccess = function(data) {
  if (data) {
    $('.user-display').text("Your Log was updated. Re-select it or get all your Logs to see the change.");
  }
};

const getLogsSuccess = function (data) {
  app.log = data.logs;
  $('.content').html(showLogs(data));
  console.log(data);
};

const getLogByIdSuccess = function (data) {
  app.log = data.log;
  $('.user-display').html("Title:" + " " + data.log.title + ", " + "Platform:" + " " +
  data.log.platform + ", " + "Players:" + " " + data.log.players + ", " +
  "Stage:" + " " + data.log.stage + ", " + "Notes:" + " " + data.log.notes + ".");
};

const deleteLogSuccess = function() {
  $('.user-display').text('Your log was deleted.');
};

const createLogfailure = function() {
  $('.user-display').text('There was a problem recording your Log. Please try again.');
};


const updateLogfailure = function() {
  $('.user-display').text('There was a problem creating your Log. Please try again.');
};

const deleteLogByIdfailure = function() {
  $('.user-display').text('THere was a problem creating your Log. Please try again.');
};

module.exports = {
  onCreateLogSuccess,
  updateLogSuccess,
  deleteLogSuccess,
  createLogfailure,
  getLogsSuccess,
  getLogByIdSuccess,
  updateLogfailure,
};

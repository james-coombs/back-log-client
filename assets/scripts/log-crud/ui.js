'use strict';

const app = require('../app.js');

const showLogs = require('../templates/logs-listing.handlebars');

const createLogSuccess = function(data) {
  $('.user-display').text('log created' + data.logs);
};

const createLogfailure = function() {
  $('.user-display').text('There was a problem recording your Log. Please try again.');
};

const updateLogSuccess = function() {
  $('.user-display').text("Your Log was updated. Re-select it or get all your Logs to see the change.");
};

const updateLogfailure = function() {
  $('.user-display').text('There was a problem updating your Log. Please check the Logs you own and try again.');
};

const deleteLogByIdSuccess = function() {
  $('.user-display').text('Your log was deleted.');
};

const deleteLogByIdfailure = function() {
  $('.user-display').text('There was a problem deleting your Log. Please check the Logs you own and try again.');
};

const getLogByIdSuccess = function(data) {
  app.log = data.log;
  $('.user-display').html("Title:" + " " + data.log.title + ", " + "Platform:" + " " +
    data.log.platform + ", " + "Players:" + " " + data.log.players + ", " +
    "Stage:" + " " + data.log.stage + ", " + "Notes:" + " " + data.log.notes + ".");
};

const getLogByIdFailure = function() {
  $('.user-display').text('There was a problem retrieving your Log. Please check the Logs you own and try again.');
};

const getLogsSuccess = function(data) {
  app.log = data.logs;
  $('.content').html(showLogs(data));
  console.log(data);
};

const getLogsFailure = function() {
  $('.user-display').text('There was a problem retrieving your Logs. Please Sign In and try again.');
};

module.exports = {
  createLogSuccess,
  updateLogSuccess,
  deleteLogByIdSuccess,
  createLogfailure,
  getLogsSuccess,
  getLogByIdSuccess,
  updateLogfailure,
  deleteLogByIdfailure,
  getLogByIdFailure,
  getLogsFailure,
};

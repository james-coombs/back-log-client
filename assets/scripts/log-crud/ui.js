'use strict';

const app = require('../app.js');

const getFormFields = require('../../../lib/get-form-fields');

const showLogs = require('../templates/logs-listing.handlebars');

const showLogsHistory = require('../templates/logs-history.handlebars');

const displayLog = require('../templates/log-display.handlebars');

const updateLog = require('../templates/log-update.handlebars');

const isDataEmpty = function(data) {
  console.log(data)
  if (data.hasOwnProperty('log') || data.logs.length === 0) {
  $('.user-display').text('404: Your data wasn\'t found.');
  } else {
    return data;
  }
}

const untitledLog = function() {
  $('.user-display').text('All games have titles...');
};

const createLogSuccess = function() {
  $('.user-display').text('Your new Log was created.');
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
  $('.log-content').show();
  $('.log-heading').text("Log " + data.log.id + ":");
  $('.log-id').text(data.log.id);
  $('.log-title').text(data.log.title);
  $('.log-platform').text(data.log.platform);
  $('.log-players').text(data.log.players);
  $('.log-stage').text(data.log.stage);
  $('.log-notes').text(data.log.notes);
  $('.user-display').text("You can now update the selected Log.");
  $('.update-selected-log-button').show();
};

const getLogByIdFailure = function(data) {
  $('.user-display').text('There was a problem retrieving your Log. Please check the Logs you own and try again.');
};

const getLogsSuccess = function(data) {
  app.log = data.logs;
  isDataEmpty(data);
  $('.hbs-content').html(showLogs(data));
};

const getLogsHistorySuccess = function(data) {
  app.log = data.logs;
  isDataEmpty(data);
  $('.hbs-content').html(showLogsHistory(data));
};

const getLogSuccess = function(data) {
    isDataEmpty(data);
  app.log = data.log;

  let log = data.log;
  const hbsObject = {};
  const logArr = [];
  logArr.push(log);
  hbsObject.log = logArr;
  $('.hbs-content').html(displayLog(hbsObject));
};

const renderUpdateTemplate = function(data) {
  app.log = data.log;
  let log = data.log;
  const hbsObject = {};
  const logArr = [];
  logArr.push(log);
  hbsObject.log = logArr;
  $('.hbs-content').html(updateLog(hbsObject));
  $('#updateLogForm').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    return $.ajax({
        url: app.host + '/logs/' + app.log.id,
        method: 'PATCH',
        headers: {
          Authorization: 'Token token=' + app.user.token,
        },
        data: data,
      });
    })
  }

const getLogsFailure = function() {
  $('.user-display').text('There was a problem retrieving your Logs. Please Sign In and try again.');
};

module.exports = {
  createLogSuccess,
  updateLogSuccess,
  deleteLogByIdSuccess,
  createLogfailure,
  getLogsSuccess,
  getLogsHistorySuccess,
  getLogByIdSuccess,
  updateLogfailure,
  deleteLogByIdfailure,
  getLogByIdFailure,
  getLogsFailure,
  getLogSuccess,
  renderUpdateTemplate,
  untitledLog,
};

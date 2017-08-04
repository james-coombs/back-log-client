'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');

const ui = require('./ui');

const onCreateLog = function(event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.createLog(data)
    .done(ui.createLogSuccess)
    .fail(ui.createLogfailure);
};

const onUpdateLog = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateLog(data)
    .done(ui.updateLogSuccess)
    .fail(ui.updateLogfailure);
};

const onDeleteLogById = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  $('.info').text('Deleted Log');
  api.deleteLogById(data)
    .done(ui.deleteLogByIdSuccess)
    .fail(ui.deleteLogByIdfailure);
};

const onDeleteLog = function() {
    let data = this.id;
    $('.info').text('Deleted Log');
    api.deleteLogById(data)
      .done(ui.deleteLogByIdSuccess)
      .fail(ui.deleteLogByIdfailure);
};

const onShowLog = function() {
    let data = this.id;
    $('.info').text('Here\'s your Log:');
    api.getLog(data)
      .done(ui.getLogSuccess)
      .fail(ui.getLogByIdFailure);
};

const onSelectLog = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.selectLog(data)
    .done(ui.getLogByIdSuccess)
    .fail(ui.getLogByIdFailure);
};

const onGetLogs = function() {
  event.preventDefault();
  api.getLogs()
    .done(ui.getLogsSuccess)
    .fail(ui.getLogsFailure);
};

const onGetLogsHistory = function() {
  api.getLogs()
    .done(ui.getLogsHistorySuccess)
    .fail(ui.getLogsFailure);
};

const logAddHandlers = function() {
  $('#createLog').on('submit', onCreateLog);
  $('#updateLog').on('submit', onUpdateLog);
  $('#deleteLogById').on('submit', onDeleteLogById);
  $('.hbs-content').on('click', '[data-control=deleteLog]', onDeleteLog);
  $('.hbs-content').on('click', '[data-control=showLog]', onShowLog);
  $('#getLogsButton').on('click', onGetLogs);
  $('#getLogsHistoryButton').on('click', onGetLogsHistory);
  $('#selectLog').on('submit', onSelectLog);
};

module.exports = {
  logAddHandlers,
  onCreateLog,
  onUpdateLog,
  onDeleteLogById,
  onDeleteLog,
  onGetLogs,
  onSelectLog,
  onShowLog,
};

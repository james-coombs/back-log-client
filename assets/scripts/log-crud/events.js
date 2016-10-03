'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');

const ui = require('./ui');

const onCreateLog = function(event) {
let data = getFormFields(event.target);
 console.log(data);
  event.preventDefault();
  api.createLog(data)
    .done(ui.onCreateLogSuccess)
    .fail(ui.failure);
};

const onUpdateLog = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
    console.log(data);
  api.updateLog(data)
    .done(ui.updateLogSuccess)
    .fail(ui.failure);
};

const onDeleteLogById = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  $('.info').text('Deleted Log');
  api.deleteLogById(data)
    .done(ui.deleteLogByIdSuccess)
    .fail(ui.failure);
};

const onSelectLog = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.selectLog(data)
    .done(ui.getLogByIdSuccess)
    .fail(ui.failure);
};

const onGetLogs = function () {
  event.preventDefault();
  api.getLogs()
  .done(ui.getLogsSuccess)
  .fail(ui.failure);
};

const logAddHandlers = function () {
  $('#createLog').on('submit', onCreateLog);
  $('#updateLog').on('submit', onUpdateLog);
  $('#deleteLogById').on('submit', onDeleteLogById);
  $('#getLogsButton').on('click', onGetLogs);
  $('#selectLog').on('submit', onSelectLog);
};

module.exports = {
  logAddHandlers,
  onCreateLog,
  onUpdateLog,
  onDeleteLogById,
  onGetLogs,
  onSelectLog,
};

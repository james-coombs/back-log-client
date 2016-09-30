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
  api.updateLog(data)
    .done(ui.updateLogSuccess)
    .fail(ui.failure);
};

const onDeleteLog = function() {
  event.preventDefault();
  $('.info').text('Deleted Log');
  api.deleteLog()
    .done(ui.deleteLogSuccess)
    .fail(ui.failure);
};

const onGetLogById = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  // console.log(data);
  //$('.game-board').hide();
  api.getLogById(data)
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
  $('#getLogById').on('submit', onGetLogById);
  $('.DeleteLogButton').on('click', onDeleteLog);
  $('.getLogsButton').on('click', onGetLogs);
};

module.exports = {
  logAddHandlers,
  onCreateLog,
  onUpdateLog,
  onDeleteLog,
  onGetLogs,
  onGetLogById,
};

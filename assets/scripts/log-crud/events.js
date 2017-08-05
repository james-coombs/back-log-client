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
  console.log('In onUpdateLog');
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateLog(data)
    .done(ui.updateLogSuccess)
    .fail(ui.updateLogfailure);
};

const callUpdateTemplate = function() {
  let data = this.id;
  api.getLog(data)
    .done(ui.renderUpdateTemplate)
    .fail(ui.getLogByIdFailure);
}

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

// const onDeleteLogById = function(event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   $('.info').text('Deleted Log');
//   api.deleteLogById(data)
//     .done(ui.deleteLogByIdSuccess)
//     .fail(ui.deleteLogByIdfailure);
// };

// const onSelectLog = function(event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.selectLog(data)
//     .done(ui.getLogByIdSuccess)
//     .fail(ui.getLogByIdFailure);
// };

const logAddHandlers = function() {
  $('#createLog').on('submit', onCreateLog);
  // $('#updateLogForm').on('submit', function(){console.log('Submitted');}); //onUpdateLog
  $('#getLogsButton').on('click', onGetLogs);
  $('#getLogsHistoryButton').on('click', onGetLogsHistory);
  $('.hbs-content').on('click', '[data-control=deleteLog]', onDeleteLog);
  $('.hbs-content').on('click', '[data-control=showLog]', onShowLog);
  $('.hbs-content').on('click', '[data-control=updateLog]', callUpdateTemplate);
  // $('#selectLog').on('submit', onSelectLog);
  // $('#deleteLogById').on('submit', onDeleteLogById);
};

module.exports = {
  logAddHandlers,
  onCreateLog,
  onUpdateLog,
  onDeleteLog,
  onGetLogs,
  onShowLog,
  callUpdateTemplate,
  // onSelectLog,
  // onDeleteLogById,
};

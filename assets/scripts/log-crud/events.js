'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');

const ui = require('./ui');

const logHasData = function() {
  if (!$('.log-title-input').val()) {
    $('.submit-log').hide();
    ui.untitledLog();
  } else {
    $('.submit-log').show();
  }
}

const onCreateLog = function(event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  logHasData(data);
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

const logAddHandlers = function() {
  $('.log-title-input').keyup(logHasData);
  $('#createLog').on('submit', onCreateLog);
  $('#getLogsButton').on('click', onGetLogs);
  $('#getLogsHistoryButton').on('click', onGetLogsHistory);
  $('.hbs-content').on('click', '[data-control=deleteLog]', onDeleteLog);
  $('.hbs-content').on('click', '[data-control=showLog]', onShowLog);
  $('.hbs-content').on('click', '[data-control=updateLog]', callUpdateTemplate);

};

module.exports = {
  logAddHandlers,
  onCreateLog,
  onUpdateLog,
  onDeleteLog,
  onGetLogs,
  onShowLog,
  callUpdateTemplate,
};

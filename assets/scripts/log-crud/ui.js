'use strict';

const app = require('../app.js');

const showLogs = require('../templates/logs-listing.handlebars');

//const showLog = require('../templates/log-display.handlebars');

const onCreateLogSuccess = function(data) {
    $('.info').text('log created' + data.logs);
  };

const updateLogSuccess = function(data) {
  if (data) {
    $('.info').text(data.log);
  }
};

const getLogsSuccess = function (data) {
  app.log = data.logs;
  $('.info').text(data.logs[0].title);
  $('.content').html(showLogs(data));
  console.log(data);
};

const getLogByIdSuccess = function (data) {
  app.log = data.log;
  $('.info').html("Title:" + " " + data.log.title + ", " + "Platform:" + " " +
  data.log.platform + ", " + "Players:" + " " + data.log.players + ", " +
  "Stage:" + " " + data.log.stage + ", " + "Notes:" + " " +data.log.notes);
  // $('.content').html(showLogs(log));
};

const deleteLogSuccess = function() {
  $('.info').text('Log deleted');
};

const failure = function() {
  $('.info').text('Log failure');
};

module.exports = {
  onCreateLogSuccess,
  updateLogSuccess,
  deleteLogSuccess,
  failure,
  getLogsSuccess,
  getLogByIdSuccess,
};

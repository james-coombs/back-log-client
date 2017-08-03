'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const userAuth = require('./user-auth/events');
const logCrud = require('./log-crud/events');
const kCode = require('./k-code/konami');
const appUi = require('./app-ui/well-control');
const deleteLog = require('./log-crud/delete-log');

$(() => {
  userAuth.userAddHandlers();
  logCrud.logAddHandlers();
  kCode.kCodeHandler();
  appUi.wellControlHandler();
});

$(document).load(function () {
  $('.delete-log').on('click', function() {console.log('this');});
});


const deleteLogHandler = function() {
  console.log(this);
}

'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');

const ui = require('./ui');

const onCreateUser = function(event) {
  event.preventDefault();
  api.createUser(event.target)
    .done(ui.onCreateUserSuccess)
    .fail(ui.createUserOnError);
};

const onSignInUser = function(event) {
  event.preventDefault();
  api.signInUser(event.target)
    .done(ui.signInSuccess)
    .fail(ui.createUserOnError);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOutUser = function() {
  event.preventDefault();
  $('.info').text('Signed out');
  api.signOutUser()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const userAddHandlers = function () {
  $('#createUser').on('submit', onCreateUser);
  $('#signInUser').on('submit', onSignInUser);
  $('#change-password').on('submit', onChangePassword);
  $('.sign-out-button').on('click', onSignOutUser);
};


module.exports = {
  userAddHandlers,
  onCreateUser,
  onSignInUser,
  onChangePassword,
  onSignOutUser,
};

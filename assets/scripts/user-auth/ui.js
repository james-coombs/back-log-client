'use strict';

const app = require('../app.js');

const onCreateUserSuccess = function(data) {
  if (data) {
    $('.user-display').text("Hello " + data.user.email + ". " + "Your user Id is " + data.user.id + ".");
  }
};

const createUserOnError = function() {
  $('.user-display').text('There was a problem with your Sign Up, please try again.');
};

const signInSuccess = function(data) {
  app.user = data.user;
  $('.user-display').text("Hello " + data.user.email + ", " + "welcome to Back\\Log.");
  $('.log-crud').toggle();
  $('.for-loged-in-user').toggle();
  $('.hbs-content').toggle();
  $('.init-user-btns').toggle();
  $('#collapseSignIn').hide();
  $('.submit-log').hide();
  $('#alternateSignIn').removeClass('in');
};

const signInFailure = function() {
  $('.user-display').text('There was a problem with your Sign In, please try again.');
};

const changePasswordSuccess = function() {
  $('.user-display').text('Your password was changed.');
};

const changePasswordFailure = function() {
  $('.user-display').text('Your password was not changed. Sign in and try again.');
};

const signOutUserSuccess = function() {
  $('.user-display').text('You are signed out.');
  $('.log-crud').toggle();
  $('.for-loged-in-user').toggle();
  $('.hbs-content').toggle();
  $('.log-content').toggle();
  $('.log-content').text("");
  $('.hbs-content').text("");
  $('.update-selected-log-button').toggle();
  $('.init-user-btns').toggle();
  $('#signInUser')[0].reset();
};

const signOutUserError = function() {
  $('.user-display').text('You could not be signed out.');
};

module.exports = {
  onCreateUserSuccess,
  createUserOnError,
  changePasswordSuccess,
  signOutUserSuccess,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  signOutUserError,
};

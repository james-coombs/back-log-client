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
};

const signInUserError = function() {
  $('.user-display').text('There was a problem with your Sign In, please try again.');
};

const changePasswordSuccess = function() {
  $('.user-display').text('Your password was changed.');
};

const signOutUserSuccess = function() {
  $('.user-display').text('You are signed out.');
};

module.exports = {
  onCreateUserSuccess,
  createUserOnError,
  changePasswordSuccess,
  signOutUserSuccess,
  signInSuccess,
  signInUserError,
};

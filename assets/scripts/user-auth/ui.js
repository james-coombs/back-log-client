'use strict';

const app = require('../app.js');

const onCreateUserSuccess = function(data) {
  if (data) {
    $('.info').text(data.user.id);
  }
};

const signInSuccess = function(data) {
  app.user = data.user;
  $('.info').text(data.user.id);
};

const createUserOnError = function() {
  $('.info').text('Error');
};

const changePasswordSuccess = function() {
  $('.info').text('Password changed');
};

const signOutUserSuccess = function() {
  $('.info').text('Signed out');
};

module.exports = {
  onCreateUserSuccess,
  createUserOnError,
  changePasswordSuccess,
  signOutUserSuccess,
  signInSuccess
};

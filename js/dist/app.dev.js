"use strict";

//Register Password Validation
var input = document.querySelector('#InputPassword');
var error = document.querySelector('.TextError');
var timeout = null;

var showError = function showError(message) {
  error.style.color = 'Red';
  error.style.display = 'block';
  error.innerHTML = message;
};

var showPass = function showPass(message) {
  error.style.color = '#119822';
  error.innerHTML = message;
};

var validatePassword = function validatePassword(password) {
  var lowerCaseRagex = new RegExp('^(?=.*[a-z])');
  var upperCaseRagex = new RegExp('^(?=.*[A-Z])');
  var specialCharacterRagex = new RegExp('^(?=.*[!@#$%^&*])');
  var numericRagex = new RegExp('^(?=.*[0-9])');

  if (!password == 0) {
    if (password.length < 8) {
      showError('Your password must be at least 8 characters long.');
    } else if (!lowerCaseRagex.test(password)) {
      showError('Your password must include at least one lowercase character.');
    } else if (!upperCaseRagex.test(password)) {
      showError('Your password must include at least one uppercase character.');
    } else if (!specialCharacterRagex.test(password)) {
      showError('Your password must include at least one special character.');
    } else if (!numericRagex.test(password)) {
      showError('Your password must include at least one number.');
    } else {
      showPass('Strong Password!');
    }
  } else {
    showError('');
    showPass('');
  }
};

input.addEventListener('keyup', function (e) {
  var password = e.target.value;
  validatePassword(password);
});
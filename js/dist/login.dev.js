"use strict";

//Button Toggle
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
} //Register Password Visibility


var pass_field = document.querySelector('.visibility');
var show_btn = document.querySelector('.tone');
show_btn.addEventListener("click", function () {
  if (pass_field.type === "password") {
    pass_field.type = "text";
    show_btn.classList.add("hide");
  } else {
    pass_field.type = "password";
    show_btn.classList.remove("hide");
  }
}); //Login Password Visibility

function myFunction() {
  var x = document.getElementById("myInput");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
} // Web Loader


setTimeout(function () {
  document.querySelector('.loader').style.display = "none";
}, 10500); // DISPLAY MSSG

function modalMssg() {
  document.querySelector(".mssg").style.opacity = "1";
  setTimeout(function () {
    modal.style.display = "none";
    document.querySelector(".mssg").style.opacity = "0";
  }, 5000);
} // MODAL FORGOT PASSWORD


var modal = document.querySelector('#myModal');
var modalBtn = document.getElementById('modalBtn');
var closeIcon = document.getElementById("close");

modalBtn.onclick = function () {
  modal.style.display = "block";
};

closeIcon.onclick = function () {
  modal.style.display = "none";
  document.querySelector(".mssg").style.opacity = "0";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector(".mssg").style.opacity = "0";
  }
}; // DISABLE SUBMIT FOR DEMO


$(function () {
  $('.button').on('click', function (event) {
    $(this).stop();
    event.preventDefault();
    return false;
  });
});
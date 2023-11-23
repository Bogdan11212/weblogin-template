// Created by bogdan11212


function login() {

}

function log() {
let a = document.getElementById("logform");
let b = document.getElementById("signform");
let c = document.getElementById("resetform");

a.style.display="block";
b.style.display="none";
c.style.display="none";

}


function sign() {
let a = document.getElementById("logform");
let b = document.getElementById("signform");
let c = document.getElementById("resetform");

a.style.display="none";
b.style.display="block";
c.style.display="none";

}


function reset() {
let a = document.getElementById("logform");
let b = document.getElementById("signform");
let c = document.getElementById("resetform");

a.style.display="none";
b.style.display="none";
c.style.display="block";

}    

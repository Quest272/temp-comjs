(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var math = require('./math.js');

var content = document.getElementsByTagName('div')[0];
content.innerText = math.sum(100, 2); 
},{"./math.js":2}],2:[function(require,module,exports){
const utils = require('./utils');

function sum(num1, num2) {
    return (num1 + num2) * utils.rand();
}

module.exports = {
    sum: sum
};
},{"./utils":3}],3:[function(require,module,exports){
function rand() {
    return Math.random();
}

module.exports = {
    rand: rand
}
},{}]},{},[1]);

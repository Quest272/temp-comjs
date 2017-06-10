const utils = require('./utils');

function sum(num1, num2) {
    return (num1 + num2) * utils.rand();
}

module.exports = {
    sum: sum
};
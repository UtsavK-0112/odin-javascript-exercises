const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
    return array.reduce((accumulator, value) => accumulator + value, 0);
};

const multiply = function (array) {
    return array.reduce((accumulator, value) => value * accumulator, 1);
};

const power = function (x, exponent) {
    output = 1;
    for (let i = 0; i < exponent; i++) {
        output *= x;
    }

    return output;
};

const factorial = function (x) {
    let output = 1;
    for (let i = 1; i <= x; i++) {
        output *= i;
    }
    return output;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};

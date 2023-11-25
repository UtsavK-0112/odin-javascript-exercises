const reverseString = function (input) {
    output = "";
    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;

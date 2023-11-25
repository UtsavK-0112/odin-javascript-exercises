const repeatString = function (text, repititons) {
    if (repititons < 0) {
        return "ERROR";
    }

    let output = "";
    for (let i = 0; i < repititons; i++) {
        output += text;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;

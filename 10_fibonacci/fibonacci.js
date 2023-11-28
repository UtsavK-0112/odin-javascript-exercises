const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    }
    let sequence = [1, 1];

    for (let i = 2; i < n; i++) {
        next_num =
            sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next_num);
    }

    return sequence[sequence.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;

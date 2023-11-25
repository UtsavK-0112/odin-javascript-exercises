const removeFromArray = function (array, ...unwanted_items) {
    return array.filter((value) => !unwanted_items.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;

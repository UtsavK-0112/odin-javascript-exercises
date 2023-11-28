const palindromes = function (text) {
    const filtered_text = text
        .split("")
        .filter((value) =>
            "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890".includes(
                value
            )
        )
        .join("")
        .toLowerCase();

    let reversed_text = "";

    for (let i = filtered_text.length - 1; i >= 0; i--) {
        reversed_text += filtered_text[i];
    }

    for (let i = 0; i < reversed_text.length; i++) {
        if (reversed_text[i] != filtered_text[i]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

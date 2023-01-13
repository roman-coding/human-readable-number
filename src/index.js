module.exports = function toReadable(number) {
    const ones = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    if (number === 0) return ones[number];

    if (number < 20) {
        return ones[number];
    } else if (number < 100) {
        return number % 10 === 0
            ? tens[Math.floor(number / 10)]
            : `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`;
    }

    if (number >= 100) {
        let res = `${ones[Math.floor(number / 100)]} hundred`;

        let remainder = number % 100;
        if (remainder === 0) return res;

        if (remainder < 20) {
            res += ` ${ones[remainder]}`;
        } else {
            res +=
                number % 10 === 0
                    ? ` ${tens[Math.floor(remainder / 10)]}`
                    : ` ${tens[Math.floor(remainder / 10)]} ${
                          ones[remainder % 10]
                      }`;
        }
        return res;
    }
};

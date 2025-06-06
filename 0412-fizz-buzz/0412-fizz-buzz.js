/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(getFizzBuzzValue(i));
    }

    return result;
};

function getFizzBuzzValue(number) {
    if (number % 15 === 0) return "FizzBuzz";
    if (number % 5 === 0) return "Buzz";
    if (number % 3 === 0) return "Fizz";
    return String(number);
}
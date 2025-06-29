/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let result = "";
    const binary = num.toString(2);

    for (let digit of binary) {
        result += digit === "0" ? "1" : "0";
    }

    return parseInt(result, 2);
};
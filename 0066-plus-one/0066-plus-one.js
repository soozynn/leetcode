/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const sumWithDigits = BigInt(digits.join("")) + 1n;
    return sumWithDigits.toString().split("").map(Number);
};

/** NOTE: 시간복잡도 베스트 솔루션
    var plusOne = function(digits) {
        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        digits.unshift(1);
        return digits;
    };
 */
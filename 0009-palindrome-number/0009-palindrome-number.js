/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const rightX = String(x);
    let leftX = rightX.split("").reverse().join("");

    if (rightX === leftX) return true;
    return false;
};
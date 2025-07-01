/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const string = s.split("-").join("").toUpperCase();
    let result = [];
    let count = 0;

    for (let i = string.length - 1; i >= 0; i--) {
        result.unshift(string[i]);
        count++;

        if (count === k && i !== 0) {
            result.unshift("-");
            count = 0;
        }

    }

    return result.join("");
};
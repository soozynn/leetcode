/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const stringObjects = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (stringObjects[char]) {
            stringObjects[char].count += 1;
        } else {
            stringObjects[char] = { count: 1, index: i };
        }
    }

    for (const string in stringObjects) {
        if (stringObjects[string].count === 1) {
            return stringObjects[string].index;
        }
    }

    return -1;
};
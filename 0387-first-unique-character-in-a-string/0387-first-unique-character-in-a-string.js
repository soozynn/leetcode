/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const stringObjects = {};

    for (let i = 0; i < s.length; i++) {
        stringObjects[s[i]] = (stringObjects[s[i]] || 0) + 1;
    }
    

    for (const string in stringObjects) {
        if (stringObjects[string] === 1) {
            return s.indexOf(string);
        }
    }

    return -1;
};
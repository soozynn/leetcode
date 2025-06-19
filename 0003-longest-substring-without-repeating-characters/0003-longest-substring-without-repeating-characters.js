/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    let startIndex = 0;
    let endIndex = 0;
    const set = new Set();

    if (s.length === 1) return 1;

    while (startIndex < s.length && endIndex < s.length) {
        if (!set.has(s[endIndex])) {
            set.add(s[endIndex]);
            result = set.size > result ? set.size : result;
            endIndex += 1;
        } else {
            set.clear();
            startIndex += 1;
            endIndex = startIndex;
        }
    }

    return result;
};
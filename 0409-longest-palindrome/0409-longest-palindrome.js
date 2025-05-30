/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return 1;

    const map = {};
    let longestPalindromeLength = 0;

    for (char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    let hasOddChar = false;

    for (char in map) {
        if (!hasOddChar && map[char] % 2 > 0) {
            map[char] -= 1;
            longestPalindromeLength += 1;
            hasOddChar = true;
        }

        longestPalindromeLength += Math.floor(map[char] / 2) * 2;
        map[char] -= Math.floor(map[char] / 2) * 2;
    }

    return longestPalindromeLength;
};
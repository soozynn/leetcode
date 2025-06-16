/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let result = 0;
    let gPointer = 0;
    let sPointer = 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    while (sPointer < s.length) {
        if (s[sPointer] >= g[gPointer]) {
            result += 1;
            sPointer += 1;
            gPointer += 1;
        } else {
            sPointer += 1;
        }
    }

    return result;
};
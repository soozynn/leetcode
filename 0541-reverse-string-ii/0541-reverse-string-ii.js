/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const slicedStringList = [];
    let result = "";

    for (let i = 0; i < s.length; i += 2 * k) {
        const chunkString = s.slice(i, i + 2 * k);
        slicedStringList.push(chunkString);
    }

    for (let chunkString of slicedStringList) {
        if (chunkString.length >= k) {
            let firstPart = chunkString.slice(0, k).split('').reverse().join('');
            let restPart = chunkString.slice(k);
            result += firstPart + restPart;
        } else {
            result += chunkString.split('').reverse().join('');
        }
    }


    return result;
};
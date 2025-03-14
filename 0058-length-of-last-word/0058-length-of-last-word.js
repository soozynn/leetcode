/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s.trim();
    const stringList = s.split(" ").filter((string) => string);
    return stringList[stringList.length - 1].length;
};
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const candyTypeSet = new Set(candyType);

    if (candyTypeSet.size > candyType.length / 2) return Math.floor(candyType.length / 2);
    return candyTypeSet.size;
};
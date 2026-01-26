/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const candyTypeSet = new Set(candyType);
    const candyTypeHalfLength = candyType.length / 2;

    if (candyTypeSet.size > candyTypeHalfLength) {
        return Math.floor(candyTypeHalfLength)
    };

    return candyTypeSet.size;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const map = new Set(nums);
    const sortedNums = Array.from(map).sort((a, b) => b - a);

    if (sortedNums.length < 3) {
        return sortedNums[0];
    }

    return sortedNums[2];
}
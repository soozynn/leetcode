/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = [];

    for (let i = 0; i < index.length; i++) {
        const deleteValue = target[index[i]] === undefined ? 1 : 0;
        target.splice(index[i], deleteValue, nums[i]);
    }
    
    return target;
};
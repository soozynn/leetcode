/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majorityMap = {};

    nums.forEach((num) => {
        majorityMap[num] = (majorityMap[num] || 0) + 1;
    });

    let maxCount = 0;
    let majorityNumber = null; 

    for (const number in majorityMap) {
        if (majorityMap[number] > maxCount) {
            maxCount = majorityMap[number];
            majorityNumber = number;
        }
    }

    return Number(majorityNumber);
};
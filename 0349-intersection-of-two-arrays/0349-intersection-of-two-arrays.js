/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const resultList = [];
    const theLongestNums = nums1.length >= nums2.length ? nums1 : nums2;
    const theShortestNums = nums1.length < nums2.length ? nums1 : nums2;

    for (let i = 0; i < theShortestNums.length; i++) {
        // 이미 들어가 있을 경우는 back
        if (theLongestNums.includes(theShortestNums[i]) && !resultList.includes(theShortestNums[i])) {
            resultList.push(theShortestNums[i]);
        }
    }

    return resultList;
};
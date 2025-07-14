/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        const sameElementIndex = nums2.indexOf(nums1[i]);
        const nextGreaterElementIndex = nums2.slice(sameElementIndex + 1).findIndex((number) => nums1[i] < number);

        if (nextGreaterElementIndex !== -1) {
            result.push(nums2[sameElementIndex + 1 + nextGreaterElementIndex]);
        } else {
            result.push(-1);
        }
    }

    return result;
};
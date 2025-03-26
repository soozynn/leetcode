/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const resultList = nums1.slice(0, m);

    if (n === 0) {
        return resultList;
    }

    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer2 < n) {
        if ((nums2[pointer2] >= resultList[pointer1]) && (resultList[pointer1 + 1] >= nums2[pointer2])) {
            resultList.splice(pointer1 + 1, 0, nums2[pointer2]);
            pointer2++;
        } else {
            pointer1++;
        }
    }

    return resultList;
};
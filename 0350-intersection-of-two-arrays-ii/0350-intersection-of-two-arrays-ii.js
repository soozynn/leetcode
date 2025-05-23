/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map();
    const result = [];

    for (let num of nums1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        const count = map.get(num);

        if (count > 0) {
            result.push(num);
            map.set(num, count - 1);
        }
    }

    return result;
}
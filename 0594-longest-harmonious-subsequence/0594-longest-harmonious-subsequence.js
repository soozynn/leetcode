/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map();
    let result = 0;

    nums.forEach((num) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
            return;
        }

        map.set(num, 1);
    });

    if (map.size <= 1) {
        return result;
    }

    for (const [key, value] of map) {
        if (map.has(key + 1)) {
            result = result < map.get(key) + map.get(key + 1) ? map.get(key) + map.get(key + 1) : result;
        }

        if (map.has(key - 1)) {
            result = result < map.get(key) + map.get(key - 1) ? map.get(key) + map.get(key - 1) : result;
        }
    }

    return result;
};
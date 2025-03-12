/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }

    return nums.length;
};

/**
Two Pointer 타 해결방법

var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // val이 아닌 경우 앞쪽에 배치
            k++;
        }
    }
    return k; // val이 아닌 요소의 개수 반환
};
 */
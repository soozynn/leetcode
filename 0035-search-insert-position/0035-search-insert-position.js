/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    /** 비효율적인 내 첫 코드

    let index = 0;

    while (index < nums.length) {
        const sameNumber = nums.indexOf(target);

        if (sameNumber !== -1) {
            index = sameNumber;
            break;
        }

        if (nums[index] < target && nums[index + 1] > target) {
            index = index + 1;
            break;
        } else {
            index++;
        }
    }

    return index;
    
    
    */

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // target이 존재하면 해당 index 반환
        } else if (nums[mid] < target) {
            left = mid + 1; // target이 더 크면 오른쪽 탐색
        } else {
            right = mid - 1; // target이 더 작으면 왼쪽 탐색
        }
    }

    return left; // target이 없으면 들어가야 할 index 반환
};
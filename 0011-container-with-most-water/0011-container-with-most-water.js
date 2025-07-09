/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heightList) {
    let max = 0;
    let left = 0;
    let right = heightList.length - 1;

    while (left < right) {
        max = max > Math.min(heightList[left], heightList[right]) * Math.abs(left - right) ? max : Math.min(heightList[left], heightList[right]) * Math.abs(left - right);

        if (heightList[left] > heightList[right]) {
            right -= 1;
        } else {
            left += 1;
        }
    }

    return max;
};
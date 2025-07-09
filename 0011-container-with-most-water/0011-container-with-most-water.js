var maxArea = function(heightList) {
    let max = 0;
    let left = 0;
    let right = heightList.length - 1;

    while (left < right) {
        const height = Math.min(heightList[left], heightList[right]);
        const width = right - left;
        const area = height * width;

        max = Math.max(max, area);

        if (heightList[left] < heightList[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};

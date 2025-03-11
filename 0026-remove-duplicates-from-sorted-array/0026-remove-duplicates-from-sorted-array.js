/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /** 문제 조건 사항
        배열 크기는 바뀌지 않지만, k 이후의 값은 중요하지 않음
        ✅ O(n) 시간 복잡도로 해결해야 함
    */
    if (nums.length === 0) return 0;

    let i = 0; // 고유한 값이 들어갈 위치

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { // 중복이 아니라면
            i++; // 새로운 위치로 이동
            nums[i] = nums[j]; // 중복이 아닌 값을 저장
        }
    }

    return i + 1; // 고유한 요소의 개수
};

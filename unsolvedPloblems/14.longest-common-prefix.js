/** 문제 
    14. Longest Common Prefix
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

    Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters if it is non-empty.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = "";

    result = strs.reduce((accumulator, currentValue, currentIndex) => {
        // 두개의 인수를 받는 함수를 넣을거고,
        // 단, 처음부터 동일한 것이 존재하지 않는다면 early return;
        const slicedLeftStringList = currentValue.split("");
        const slicedRightStringList = strs[currentIndex + 1].split("");
        let sameCharactor = "";

        // 두 배열을 비교하는데 각 배열에서 일치하는 값이 있는지 확인하고 있으면 그 문자열을 입력해
        // 비교 후에, 기존 acc와 동일하지 않는 것이 있으면 또 빼..

        accumulator + sameCharactor;
    });
};
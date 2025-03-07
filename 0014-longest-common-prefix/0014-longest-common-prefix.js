/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    let prefix = strs[0]; // 첫 번째 문자열을 기준으로 설정

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // 접두사를 하나씩 줄여가며 확인
            if (!prefix) return "";
        }
    }

    return prefix;
};
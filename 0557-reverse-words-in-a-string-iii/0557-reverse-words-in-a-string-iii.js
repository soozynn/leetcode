/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s
        .split(" ")                // 1. 단어 단위로 나누고
        .map(word =>               // 2. 각 단어에 대해
        word
            .split("")             // 3. 문자로 나눈 뒤
            .reverse()             // 4. 뒤집고
            .join("")              // 5. 다시 합치기
        )
        .join(" ");  
};
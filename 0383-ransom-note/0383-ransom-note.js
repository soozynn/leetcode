/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineCount = {};

    // magazine 문자열의 각 문자를 카운트
    for (const char of magazine) {
        magazineCount[char] = (magazineCount[char] || 0) + 1;
    }

    // ransomNote의 각 문자가 magazine에 있는지 확인하고, 사용된 문자 카운트 감소
    for (const char of ransomNote) {
        if (!magazineCount[char]) {
            return false;
        }

        magazineCount[char]--;
    }

    return true;
};
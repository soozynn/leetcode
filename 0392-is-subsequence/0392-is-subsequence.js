/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
/**
    s의 각 문자를 t에서 왼쪽부터 하나씩 찾는다.
    찾으면, 그 다음부터는 그 위치 이후부터 다음 문자를 찾는다.
    끝까지 다 찾으면 true, 하나라도 못 찾으면 false.
*/  
    let indexS = 0;
    let indexT = 0;
    let copyT = t;

    while (indexS !== s.length) {
        indexT = copyT.indexOf(s[indexS]);

        if (indexT !== -1) {
            copyT = copyT.substring(indexT + 1);
            indexS++;
        } else {
            return false;
        }
    }

    return true;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const patnerStingObj = {
        "{": "}",
        "[": "]",
        "(": ")",
    };
    const stringList = s.split("");
    let i = 0;

    while(i < stringList.length) {
        if (Object.hasOwn(patnerStingObj, stringList[i])) {
            if (stringList.includes(patnerStingObj[i])) {
                stringList.splice(i, 0, 0);
                stringList.splice(stringList.indexOf(patnerStingObj[i]), 0, 0);
            } else {
                i++;
            }
        } else {
            i++;
        }
    }

    const resultList = stringList.filter((string) => string !== 0);
    if (resultList.length) return false;
    return true;
};
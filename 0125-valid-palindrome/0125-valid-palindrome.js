/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 1) return true;

    const arrayStrings = s.split("");

    const isAlphaNumeric = (char) => {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) ||  // 0-9
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122)    // a-z
        );
    };

    const filteredStrings = arrayStrings.filter(char => isAlphaNumeric(char)).map(char => char.toLowerCase());
    
    for (let i = 0; i < filteredStrings.length; i++) {
        console.log(filteredStrings[i], filteredStrings[filteredStrings.length - i - 1])
        if (filteredStrings[i] !== filteredStrings[filteredStrings.length - i - 1]) return false;
    }

    return true;
};
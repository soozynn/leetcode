/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = {};

    for (let i = 0; i < t.length; i++) {
        let letter = t[i];

        if (map[letter]) {
            map[letter] += 1;
        } else {
            map[letter] = 1;
        }
    }

    for (let k = 0; k < s.length; k++) {
        let letter = s[k];

        if (map[letter] >= 1) {
            map[letter] -= 1;
        }
    }

    for (let letter in map) {
        if (map[letter]) {
            return letter;
        }
    }
};
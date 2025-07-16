/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rows = [
        new Set('qwertyuiop'),
        new Set('asdfghjkl'),
        new Set('zxcvbnm')
    ];

    return words.filter(word => {
        const lower = word.toLowerCase();
        return rows.some(row => [...lower].every(char => row.has(char)));
    });
};

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    let guessNumber = n;
    let mid = n;

    while(guessNumber !== 0) {
        mid = Math.floor((left + right) / 2);
        guessNumber = guess(mid);
    
        if (guessNumber === -1) {
            right = mid - 1;
        }

        if (guessNumber === 1) {
            left = mid + 1;
        }
    }

    return mid;
};
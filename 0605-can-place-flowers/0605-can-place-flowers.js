/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let pointer = 0;
    let newFlowerNumber = n;

    while (pointer < flowerbed.length) {

        if (flowerbed[pointer] === 1) {
            pointer += 2;
            continue;
        }

        const left =
            pointer === 0 ||
            flowerbed[pointer - 1] === 0;

        const right =
            pointer === flowerbed.length - 1 ||
            flowerbed[pointer + 1] === 0;

        if (left && right) {

            flowerbed[pointer] = 1;

            newFlowerNumber--;

            pointer += 2;

        } else {
            pointer += 1;
        }
    }

    return newFlowerNumber <= 0;
};
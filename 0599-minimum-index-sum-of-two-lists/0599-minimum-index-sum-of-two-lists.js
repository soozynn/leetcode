/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();
    const result = [];
    let min = Infinity;

    list1.forEach((element, index) => {
        if (!map.has(element)) {
            map.set(element, index)
        }
    });

    list2.forEach((element, index) => {
        if (map.has(element)) {
            const sum = map.get(element) + index;

            if (sum < min) {
                min = sum;
                result.length = 0;
                result.push(element);
            } else if (sum === min) {
                result.push(element);
            }
        }
    });

    return result;
};
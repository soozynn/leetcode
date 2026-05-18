/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();

    list1.forEach((element, index) => {
        map.set(element, index);
    });

    const result = [];
    let min = Infinity;

    list2.forEach((element, index) => {
        if (!map.has(element)) {
            return;
        }

        const sum = map.get(element) + index;

        if (sum < min) {
            min = sum;
            result.length = 0;
            result.push(element);

            return;
        }
        
        if (sum === min) {
            result.push(element);
        }
    });

    return result;
};
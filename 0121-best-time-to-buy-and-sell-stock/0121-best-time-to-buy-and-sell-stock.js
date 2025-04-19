/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // ⭐️ 처음 풀이 - 전체 모든 쌍을 비교하고 있는 시간복잡도 이슈까지, 최악의 경우 O(n²)
    // let pointer = 0;
    // let index = pointer + 1;
    // let result = 0;

    // while(pointer < prices.length - 1) {
    //     if (index === prices.length) {
    //         pointer++;
    //         index = pointer + 1;
    //         continue;
    //     }

    //     if (prices[pointer] >= prices[index]) {
    //         index++;
    //         continue;
    //     }

    //     const stock = prices[index] - prices[pointer];

    //     if (stock > result) {
    //         result = stock;
    //         index++;
    //         continue;
    //     }

    //     index++;
    // }

    // return result;

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
            continue;
        }

        const profit = prices[i] - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
};
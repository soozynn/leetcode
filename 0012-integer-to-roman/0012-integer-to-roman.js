/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const pairs = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let res = "";
  for (const [value, symbol] of pairs) {
    // 현재 value를 몇 번이나 뺄 수 있는지
    while (num >= value) {
      res += symbol;
      num -= value;
    }
  }
  return res;
};
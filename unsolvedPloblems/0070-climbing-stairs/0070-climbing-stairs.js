/** 문제
70. Climbing Stairs

Hint
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


Constraints:

1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let steps = 0;
    let i = 1;

    if (n === 1) return 1;

    function temp(number) {
        // 1부터 시작해서 나누는 방법
    }

    while(i < n) {
        // i를 뺸 나머지에서 계속 재귀를 돌린다?
        temp(n - i);
    }

    return steps;
};
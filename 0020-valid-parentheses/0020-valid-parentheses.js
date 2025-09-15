/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    const stack = [];

    for (const ch of s) {
        const top = stack[stack.length - 1];

        // 닫는 괄호인 경우
        if (pairs[ch]) {
            if (top !== pairs[ch]) {
                return false;
            }

            stack.pop();
            continue;
        }

        // 여는 괄호인 경우
        stack.push(ch);
    }

    return stack.length === 0;
};
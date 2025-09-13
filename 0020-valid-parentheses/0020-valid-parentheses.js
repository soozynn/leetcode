/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    const stack = [];
    const splitedString = s.split("");

    for (const bracket of splitedString) {
        if (!Object.hasOwn(brackets, bracket)) {
            stack.push(bracket);
        } else {
            if (brackets[bracket] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) return true;
    return false;
};
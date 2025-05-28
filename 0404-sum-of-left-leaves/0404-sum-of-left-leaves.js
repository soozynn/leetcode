/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let total = 0;

    if (!root) return 0;

    total += sumOfLeftLeaves(root.left);
    total += sumOfLeftLeaves(root.right);

    if (root.left && !root.left.left && !root.left.right) {
        // 왼쪽 자식이 있고, 그 자식은 리프다 → 왼쪽 리프
        total += root.left.val;
    }

    return total;
};
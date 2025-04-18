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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let sum = 0;

    const sumOfNode = (node, target) => {
        if (!node) return false;

        let copyTarget = target;
        copyTarget += node.val;
        
        const isLeafNode = !node.left && !node.right;

        if (isLeafNode && copyTarget === targetSum) return true;
        if (isLeafNode && copyTarget < targetSum) return false;

        return sumOfNode(node.left, copyTarget) || sumOfNode(node.right, copyTarget);
    };

    return sumOfNode(root, sum);
};
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    /** preorder traversal(전위 순회)는 루트 노드를 먼저 방문한 후, 왼쪽 서브트리를 재귀적으로 전위 순회하고, 오른쪽 서브트리를 재귀적으로 전위 순회하는 방식 */

    if (!root) return [];
    if (!root.left && !root.right) return [root.val];

    const result = [];

    const checkPreorderTraversalNodes = (node) => {
        if (!node) return;

        result.push(node.val);
        checkPreorderTraversalNodes(node.left);
        checkPreorderTraversalNodes(node.right);
    };

    result.push(root.val);
    checkPreorderTraversalNodes(root.left);
    checkPreorderTraversalNodes(root.right);

    return result;
};
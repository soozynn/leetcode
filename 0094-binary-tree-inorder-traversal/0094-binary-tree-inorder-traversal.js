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
var inorderTraversal = function(root) {
    /** 이진 트리, 트리 탐색 방법 DFS & BFS의 개념 */
    // 해당 문제는 중위 순회
    const result = [];
    if (root === null) {
        return result;
    }

    if (root.left === null && root.right === null) {
        result.push(root.val);
        return result;
    }


    const traverse = (node) => {
        if (node === null) return;

        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    };

    traverse(root);
    return result;
};
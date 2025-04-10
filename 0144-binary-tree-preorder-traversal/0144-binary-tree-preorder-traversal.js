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

    /** 중복 제거 리팩토링 코드 */
    const result = [];

    const dfs = (node) => {
        if (!node) return;

        result.push(node.val);        // 현재 노드
        dfs(node.left);               // 왼쪽 재귀
        dfs(node.right);              // 오른쪽 재귀
    };

    dfs(root);
    return result;

    // NOTE: 이전 풀이
    // if (!root) return [];
    // if (!root.left && !root.right) return [root.val];

    // const result = [];

    // const checkPreorderTraversalNodes = (node) => {
    //     if (!node) return;

    //     result.push(node.val);
    //     checkPreorderTraversalNodes(node.left);
    //     checkPreorderTraversalNodes(node.right);
    // };

    // result.push(root.val);
    // checkPreorderTraversalNodes(root.left);
    // checkPreorderTraversalNodes(root.right);

    // return result;
};
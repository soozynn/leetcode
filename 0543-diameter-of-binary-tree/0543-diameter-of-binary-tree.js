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
var diameterOfBinaryTree = function(root) {
   let maxDiameter = 0;

    const dfs = (node) => {
        if (!node) return 0;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        // 현재 노드를 지나는 경로 길이 계산
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

        // 현재 노드의 높이 반환
        return 1 + Math.max(leftHeight, rightHeight);
    }

    dfs(root);
    return maxDiameter;
};
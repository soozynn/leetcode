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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // 두 트리가 완전히 같은지 확인
    const isSameTree = (a, b) => {
        // 둘 다 null이면 동일
        if (!a && !b) return true;
        // 하나만 null이면 다름
        if (!a || !b) return false;
        // 값이 다르면 다름
        if (a.val !== b.val) return false;

        // 왼쪽 + 오른쪽 모두 같아야 함
        return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
    };

    // root가 null이면 더 볼 필요 없음
    if (!root) return false;

    // 현재 노드를 루트로 봤을 때 subRoot와 같은지
    if (isSameTree(root, subRoot)) return true;

    // 아니면 왼쪽이나 오른쪽에서 다시 찾기
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let depth = 1;
    if (!root) return 0;
    if (root.children.length === 0) return depth;

    for (children of root.children) {
        console.log(children, depth)
        let biggerDepth = depth;
        depth = maxDepth(children) + 1 || 0;
        depth = Math.max(depth, biggerDepth)
    }

    return depth;
};
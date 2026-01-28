/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];

    const result = [];
    const traversalNodes = (node) => {
        if (!node) return;

        if (node.children && node.children.length > 0) {
            for (const child of node.children) {
                traversalNodes(child);
                result.push(child.val);
            }
        }
    };

    traversalNodes(root);
    result.push(root.val);
    return result;
};
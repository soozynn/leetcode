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
    const result = [];

    const traversalNodes = (node) => {
        if (!node) return;

        for (const child of node.children) {
            traversalNodes(child);
        }


        result.push(node.val);
    };

    traversalNodes(root);
    return result;
};
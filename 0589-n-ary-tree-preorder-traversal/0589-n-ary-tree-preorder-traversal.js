/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    /**
    {
        val: 1,
        children: [
            { val: 3, children: [Array] },
            { val: 2, children: [] },
            { val: 4, children: [] }
        ]
    }
     */

    const result = [];

    const traversalNodes = (node) => {
        if (!node) return;

        result.push(node.val);

        if (node.children.length > 0) {
            for (const child of node.children) {
                traversalNodes(child);
            }
        }
    };

    traversalNodes(root);
    return result;
};
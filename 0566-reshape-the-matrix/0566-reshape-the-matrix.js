/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const flattedMatList = mat.flat();
    const result = [];

    if (flattedMatList.length !== r * c) return mat;

    for (let i = 0; i < r; i++) {
        result.push(flattedMatList.slice(i * c, i * c + c));
    }

    return result;
};
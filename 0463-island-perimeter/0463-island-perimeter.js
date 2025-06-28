/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let squareCount = 0;
    let adjacentSquares = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                squareCount += 1;

                if (i > 0 && grid[i - 1][j] === 1) {
                    adjacentSquares += 1;
                }

                if (j > 0 && grid[i][j - 1] === 1) {
                    adjacentSquares += 1;
                }
            }
        }
    }

    return (squareCount * 4) - (adjacentSquares * 2);

};
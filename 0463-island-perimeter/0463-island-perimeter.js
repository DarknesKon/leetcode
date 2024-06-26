/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid = []) => {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          if (!grid[i - 1] || grid[i - 1][j] !== 1) {
            count += 1
          }
          if (grid[i][j + 1] !== 1) {
            count += 1
          }
          if (!grid[i + 1] || grid[i + 1][j] !== 1) {
            count += 1
          }
          if (grid[i][j - 1] !== 1) {
            count += 1
          }
        }
      }
    }
    return count
  }
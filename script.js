function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function isValid(row,col) {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  }

  // BFS to find shortest path
  const queue = [[start]];
  const visited = new Set();
  visited.add(`${start[0], start[1]}`);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    // If we reached the destination
    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    // Explore all possible moves
    for (const move of moves) {
      const newRow = current[0] + move[0];
      const newCol = current[1] + move[1]
      if (isValid(newRow,newCol) && !visited.has(`${newRow},${newCol}`)) {
        visited.add(`${newRow},${newCol}`);
        const newPath = [...path, [newRow, newCol]];
        queue.push(newPath);
      }
    }
  }
}

function Output(start, end) {
  const path = knightMoves(start, end);

  if (!path) {
    console.log("No path found!");
    return;
  }

  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  return path;
}

console.log(Output([0,0],[2,5]))


module.exports = {knightMoves}
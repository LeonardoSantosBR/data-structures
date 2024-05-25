const array = [
  //test 1 - OK
  //   [1, 1, 1, 0, 0, 0],
  //   [0, 1, 0, 0, 0, 0],
  //   [1, 1, 1, 0, 0, 0],
  //   [0, 0, 2, 4, 4, 0],
  //   [0, 0, 0, 2, 0, 0],
  //   [0, 0, 1, 2, 4, 0],

  //test 2 - PROGRESS
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

let sum = 0;
for (let row = 0; row < 4; row++) {
  for (let col = 0; col < 4; col++) {
    let topRow = array[row][col] + array[row][col + 1] + array[row][col + 2];
    let middleRow = array[row + 1][col + 1];
    let bottomRow =
      array[row + 2][col] + array[row + 2][col + 1] + array[row + 2][col + 2];

    if (topRow + middleRow + bottomRow > sum) {
      sum = topRow + middleRow + bottomRow;
    }
  }
}

console.log(sum);

//hackerRank solution 2D Array - DS

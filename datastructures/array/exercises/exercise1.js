let array = [1, 4, 3, 2];

function reversedArray(array) {
  let newArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }

  return newArray;
}

console.log(reversedArray(array));

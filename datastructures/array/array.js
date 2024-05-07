//array de uma dimensão
const array = [1, 2, 3, 4, 5, 7, 8, 9, 10];

//array bidimensional
let items = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const sumArray = array.reduce((acc, cur) => {
  return (acc += cur);
}, 0);

const sumItems = items.reduce((acc, cur) => {
  return acc + cur.reduce((sum, number) => sum + number, 0);
}, 0);

console.log(sumMap);
console.log(items);

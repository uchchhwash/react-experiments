var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(function(x) {
  return x * x;
});
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter(function(num) {
  return num > 10;
});
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const operationReduce = numbers.reduce(function(accumulator, currentNumber) {
  return (accumulator += currentNumber);
});
console.log(operationReduce);

//Find - find the first item that matches from an array.
const findNumber = numbers.find(function(num) {
  return num === 48;
});
console.log(findNumber);

//FindIndex - find the index of the first item that matches.
const IndexNumber = numbers.findIndex(function(num) {
  return num === 48;
});
console.log(IndexNumber);

//Arrow Function
const temp = numbers.map(x => {
  return x * x;
});
console.log(temp);

//Map -Create a new array by doing something with each item in an array.
const testCase1 = numbers.map(x => x * 2);
console.log(testCase1);
////Filter - Create a new array by keeping the items that return true.
const testCase2 = numbers.filter(num => num < 10);
console.log(testCase2);

//Reduce - Accumulate a value by doing something to each item in an array.
const testCase3 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(testCase3);

////Find - find the first item that matches from an array.
const testCase4 = numbers.find(num => num > 10);
console.log(testCase4);

////FindIndex - find the index of the first item that matches.
const testCase5 = numbers.findIndex(num => num > 10);
console.log(testCase5);

function add(n1: number, n2: number) { // : type of the return
  return n1 + n2;
}

function printResult(num: number) { // a void function
  console.log('Result: ' + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // Function type - returns a number and take 2 number arguments

combineValues = add;

console.log(combineValues(8, 8))

// let someValue: undefined;
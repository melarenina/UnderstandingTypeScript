function add(n1: number, n2: number) { // : type of the return
  return n1 + n2;
}

function printResult(num: number) { // a void function
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // Function type - returns a number and take 2 number arguments

combineValues = add;

console.log(combineValues(8, 8))

addAndHandle(10, 20, (result) => { 
  console.log(result);
});

// let someValue: undefined;
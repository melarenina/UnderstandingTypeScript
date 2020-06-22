function add(n1: number, n2: number) { // : type of the return
  return n1 + n2;
}

function printResult(num: number) { // a void function
  console.log('Result: ' + num);
}

printResult(add(5, 12));

// let someValue: undefined;
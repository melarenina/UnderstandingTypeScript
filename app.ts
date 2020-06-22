function add(n1: number, n2: number, phrase: string, showResult: boolean) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }

    // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    //   throw new Error('Incorret input!');
    // }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'The Result Is: ';

const result = add(number1, number2, resultPhrase, printResult);
console.log(result);

function add(n1, n2, phrase, showResult) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
    // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    //   throw new Error('Incorret input!');
    // }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'The Result Is: ';
var result = add(number1, number2, resultPhrase, printResult);
console.log(result);

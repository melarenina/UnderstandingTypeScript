// let userInput: any; // - With unknown, it checks the value inside it so it could be assigned to another variable. 
                      //With any, you can just do whatever you want

let userInput: unknown; 
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}


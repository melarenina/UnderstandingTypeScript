// let userInput: any; // - With unknown, it checks the value inside it so it could be assigned to another variable. 
//With any, you can just do whatever you want
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    // Since the error cancels, breaks our script, it never returns any value, even undefined
    throw { message: message, errorCode: code };
}
generateError('An error ocurred!', 500);

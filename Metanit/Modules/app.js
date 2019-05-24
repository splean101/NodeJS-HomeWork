//let greeting = require('./modules');
let user = require('./modules');

//console.log(greeting);
console.log(user);

const os = require("os");
let userName = os.userInfo().username;

console.log(`Date of request: ${user.greeting.date}`);
console.log(user.greeting.getMessage(userName));

//let vitek = new user.User('Vitalii', 33);
//vitek.sayHi();
//vitek.displayInfo();
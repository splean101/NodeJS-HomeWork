let [, , firstNumber = 0, operation = '+', secondNumber = 0] = process.argv;
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number' || isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('Error: Parameter is not Number')
} else if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
    console.log('Error: Unknown operation')
} else {
    let res;

    switch (operation) {
        case '+':
            res = firstNumber + secondNumber;
            break;
        case '-':
            res = firstNumber - secondNumber;
            break;
        case '*':
            res = firstNumber * secondNumber;
            break;
        case '/':
            res = firstNumber / secondNumber;
    };
    console.log(res);
}





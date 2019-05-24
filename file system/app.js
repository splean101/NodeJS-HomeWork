const fs = require('fs');
//node app.js greeting.txt text1.txt text2.txt text3.txt text4.txt

let [, , pathRes, ...rest] = process.argv;

if (rest) {
    let restTxt = [];
    for (let key of rest) {
        restTxt.push(fs.readFileSync(key, 'utf8'));
    };
    for (let key of restTxt) {
        fs.appendFileSync(pathRes, key + '\n', 'utf8');
    };
};
console.log(fs.readFileSync(pathRes, 'utf8'));



/*let [, , pathRes, ...rest] = process.argv;

if (rest) {
    let restTxt = [];
    for (let key of rest) {
        restTxt.push(fs.readFile(key, 'utf8', (data, error) => {
            if (error) throw error;
            return data;
        }));
    };
    for (let key of restTxt) {
        fs.appendFile(pathRes, key + '\n', 'utf8', (error) => {
            if (error) throw error;
        });
    };
};
console.log(fs.readFileSync(pathRes, 'utf8'));*/
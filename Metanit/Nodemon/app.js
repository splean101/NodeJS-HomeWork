const http = require('http');

let message = 'Hello User from nodemon!';
http.createServer((request, response)=>{
    console.log(message);
    response.end(message);
}).listen(3000, '127.0.0.1', ()=>console.log('The server has began listening requests'));
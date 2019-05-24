const express = require ('express');

const app = express();

app.get('/', (request, response)=> response.end('Hello from express!'));
app.listen(3000);
console.log('server is working');


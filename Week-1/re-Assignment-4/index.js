const express = require('express');
const app = express();
const port = 3000;


app.get('/', (request, response) => {
    response.send('Hello, My Server!');
});

app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}/`);
});
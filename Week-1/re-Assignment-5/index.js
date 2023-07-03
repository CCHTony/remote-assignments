const express = require('express');
const app = express();
const port = 3000;


app.get('/', (request, response) => {
    response.send('Hello, My Server!');
});

app.get('/getData', (request, response) => {
    number = request.query.number;
    console.log(number);
    if(!number){
        response.send('Lack of Parameter');
    }
    else if(isNaN(number)){
        response.send('Wrong Parameter');
    }
    else{
        var ans = 0;
        for(var i  = 1; i <= Number(number); i++){
            ans += i;
        }
        response.send(`Answer is ${ans} !`);
    }
});



app.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}/`);
});
const http = require('http');
const port = 3000;
const ip = "127.0.0.1";

const server = http.createServer((request, response) => {
    const method = request.method;
    let url = request.url;
    console.log(method, url);
    if(method === 'GET'){
        const requestUrl = new URL(url, `http://${ip}:${port}`);
        const number = requestUrl.searchParams.get('number');
        url = requestUrl.pathname;

        if(url === '/'){
            response.end("Hello, My Server!");
        }
        else if(url === '/getData'){
            console.log(number);
            if(number === null){
                response.end('Lack of Parameter');
            }
            else if(isNaN(number)){
                response.end('Wrong Parameter');
            }
            else{
                var ans = 0;
                for(var i  = 1; i <= Number(number); i++){
                    ans += i;
                }
                response.end(`Answer is ${ans} !`);
                }
        }
        else{
            response.end("404 not found");
        }
    }
});

server.listen(port, ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
}); 

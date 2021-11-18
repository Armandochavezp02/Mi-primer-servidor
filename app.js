const http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hola mundito.");
    response.end();
}).listen(80);


const http = require('http');
const fs = require('fs');

http.createServer((request, response)=>{
    const file = "./WWW/file.txt";
    fs.readFile(file, (err, data)=>{
        if(err){
            response.writeHead(500, {"Content-Type":"text/plain"});
            response.write("Bad gateway");
            response.end();
        }else{
            response.writeHead(200, {"Content-Type":"text/plain"});
            response.write(data);
            response.end();
        }
        
    });

    
}).listen(80);


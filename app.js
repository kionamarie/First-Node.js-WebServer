const http = require('http');   // uploads http library into our variable
const fs = require('fs');       // uploads fs library into our variable
const port = 3000;          // tells our code what port to listen in to

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html', function(error, data){
        if (error){
            res.writeHead(404)
            res.write('File not found')
        } else {
            res.write(data)
        }
        res.end()
})
});

server.listen(port, function(error){
    if(error){
        console.log('Error starting server', error);
    } else {
        console.log('Server is listening on port', port);
    }
})


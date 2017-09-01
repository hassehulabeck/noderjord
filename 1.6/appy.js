var http = require('http');
var fs = require('fs');
var datan = '';
var arr = [];

fs.readFile('./text.fil', function(err, data){
    if (err) 
        console.log(err);    
    console.log(data);
    arr.push(data.toString());
});


http.createServer((req, res) => {
        arr.forEach(function(word) {
            res.write(word);
        });
        res.end();
}).listen(3000);
console.log("Server is definitely active at 3000");

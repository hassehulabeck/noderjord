const https = require('https');

https.get('https://yhjust16.herokuapp.com/lorem', (res) => {
    res.on('data', (d) => {
        process.stdout.write(d);    // Klarar mer än console.log.        
    });
}).on('error', (e) => {
   console.error(e); 
});

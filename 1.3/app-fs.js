var fs = require('fs');

fs.open("./text.fil", "a", function(err, fd){
    console.log(err);
    fs.writeFile(fd, "\nHeja Bajen.");
    fs.close(fd);
});

fs.writeFile("./text.fil", "\nHej", function(err) {
    console.log(err);
});

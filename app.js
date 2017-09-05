let express = require('express');
let app = express();

var users = require('./users.json');

var findUser = function(userName, callback) {
  if (!users[userName])
    return callback(new Error(
      'No user matching '
       + userName
      )
    );
  return callback(null, users[userName]);
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Få värden genom params.
app.get('/user/:userName', function(req, res){
    var userName = req.params.userName;
    findUser(userName, function(error, user)   {
        if (error) 
            return res.end("Fel: " + error);
        return res.json(user);
    });
});

app.listen(3000, () => {
    console.log("Övning 3.4 lyssnar på 3000.");
});
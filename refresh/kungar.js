var kungar = ['Gustav Vasa', 'Gustav III', 'Karl XII', 'Kung Sune'];

kungar.forEach(function(item) {
  console.log(item);
});

/*
kungar.splice(1,2);
console.log("");

kungar.forEach(function(item) {
  console.log(item);
});
*/

var kings = kungar.map(function(kung) {
    return "The " + kung;
})

kings.forEach(function(item) {
  console.log(item);
});


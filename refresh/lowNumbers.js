var numbers = [1,2,4,32,12,424,3525,213];

var lowNumbers = numbers.filter(function(num){
    return num < 10;
});

lowNumbers.forEach(function(item) {
  console.log(item);
});

var x = numbers.find(function(nuffra) {
    return nuffra%3==0;
})

console.log("X:" + x);
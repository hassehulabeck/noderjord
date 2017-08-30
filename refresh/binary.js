var arr = [];

for (var i = 0; i <= 40; i++) {
    arr.push(Math.pow(2,i));
}

arr.forEach(function(item) {
    let lastDigits = item.toString();
    if (item > 9)
        console.log(lastDigits.slice(-2));
});
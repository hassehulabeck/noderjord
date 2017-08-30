for (var i = 0; i < 10; i++) {

    (function(index) {
        setTimeout(function(){
            console.log(index);
        }, 2000);
        
    })(i)
    console.log(i);
}
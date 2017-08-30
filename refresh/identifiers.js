var x = 1;
let y = 3;
const z = 4;

box = function() {
    let y = 2;
    
    // I ett nytt block inom "Y:s" block kan man definiera ett nytt y utan att störa det "övre".
    if (y > 0) {
        let y = 20;
        console.log("Y: " + y);
    }
    
    console.log("Y: " + y);

};

/*
try {
    z = 5;
}
catch(e) {
    console.log("Ooops. " + e.message + " " + z);
}
*/

console.log(x);
box();
console.log(y);
console.log(z);


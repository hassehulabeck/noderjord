// V75.js

// Objekt Horse som skapas mha en constructor-funktion. 
Horse = function (name, age){
    this.age = age;
    this.name = name;
}
// Någonstans ska vi förvara hästarna
var stable = [];

var namndelar = ["Mr", "Boko", "Ego", "Boy", "Field", "MT", "Que", "Lazarus", "Gold", "Whiskey", "Uvfereds", "Lotto", "Svarta", "Madness", "Jolly", "Kenny", "Tony", "Flygare", "Buster", "Bella", "Don", "Pegasus", "Alabaster", "Hawaii", "Alabama", "Joy", "of","First", "Rune", "Holy", "Dolly", "Queso", "Loco", "Ignazio", "Horsey", "Blood", "Sugar", "Ginger", "Spice", "Floral", "Atari", "Cobolt", "Mullbänkens", "Regent", "Wellington", "Hamburger", "de", "Ultra", "Intra", "Farmens", "Gunilla", "The", "Plura"];

// Objekt för lopp
var Lopp = {
    distans: 2140,
    horses: []
}

function getHorseName() {
    let bitar = Math.ceil(Math.random() * 10);
    bitar = (bitar < 3 ? 1 :(bitar < 8 ? 2 : 3)); 
    let name = "";
    for (let i=0; i < bitar; i++) {
        name += namndelar[Math.floor(Math.random() * namndelar.length)] + " ";
    }
    // Ta bort ev överflödiga mellanslag. Gör gemener av allt förutom inledande tecknet.
    name.toLowerCase();
    name.charAt(0).toUpperCase() + name.slice(1);    
    name = name.trim();
    return name;
}

// Skapa 300 hästar
while (stable.length < 16) {
    var horse = new Horse(getHorseName(), (Math.ceil(Math.random() * 10) +2));

    // Kolla om det redan finns en häst som heter så.
    if (stable.findIndex(i => i.name === horse.name) == -1) {
        stable.push(horse);        
    }   
};

// Sortera stallet på namn
stable.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
});


stable.forEach(function(horse){
    console.log(horse.name + ", " + horse.age); 
});                      


// Hur många hästar i loppet? Minst 6, som mest 15
var numberOfHorses = Math.floor(Math.random() * 9 + 6);

// Skapa ett lopp
var lopp1 = Object.create(Lopp);
lopp1.loppNummer = 1;
lopp1.distans = 1640;
while (lopp1.horses.length < numberOfHorses) {
    let slumpHorse = Math.floor(Math.random() * stable.length);
    var selectedHorse = stable.splice(slumpHorse, 1);
    // Splice returnerar en array med borttagna objekt, därför 0-index nedan.
    lopp1.horses.push(selectedHorse[0]);
}



console.log("\nLopp" + lopp1.loppNummer + "\nDistans: " + lopp1.distans);
lopp1.horses.forEach(function(horse, index){
    console.log((index + 1) + " " + horse.name + ", " + horse.age); 
});                      

console.log("\nResterande hästar");
stable.forEach(function(horse){
    console.log(horse.name + ", " + horse.age); 
});                      

// Placera tillbaka hästarna i stallet efter loppet.
while (lopp1.horses.length > 0) {
    var selectedHorse = lopp1.horses.pop();
    // Splice returnerar en array med borttagna objekt, därför 0-index nedan.
    stable.push(selectedHorse);
}

console.log("\nAlla hästar");
stable.forEach(function(horse){
    console.log(horse.name + ", " + horse.age); 
});                      

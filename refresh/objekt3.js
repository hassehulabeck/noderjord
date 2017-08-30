// Object constructor - Observera VERSAL initialbokstav i funktionsnamnet.
function SuperPerson(name, age){
    this.name = name;
    this.age = age;
}

var olle = new SuperPerson("Olle S", 42);
console.log("Olle =======");
console.log(olle);

// Lägg till ny egenskap
olle.userLevel = 1;
console.log("Olle med ny egenskap =======");
console.log(olle);

/* Lägg till nya egenskaper i objektets prototyp.
* Först lägger vi till en ny egenskap i prototypen och jämför våra SuperPersoner.
*/
SuperPerson.prototype.hairColor = "Black";

// Nu skapar vi ett nytt objekt av typen SuperPerson för att jämföra.
var kajsa = new SuperPerson("Kajsa", 21);
console.log("Kajsa  =======");
console.log(kajsa);

// Vad har hänt? INGENTING?
console.log("Olle  =======");
console.log(olle);
console.log("Kajsa  =======");
console.log(kajsa);

// ...eller vad händer om vi tittar specifikt på den egenskapen?
console.log("Olles hårfärg  =======");
console.log(olle.hairColor);
console.log("Kajsas hårfärg  =======");
console.log(kajsa.hairColor);



kajsa.hairColor = "Yellow";
console.log("Kajsa  =======");
console.log(kajsa);

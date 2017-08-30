// Objekt initializer
var Person = {
    name: null,
    age: null
};

var owe = Person;
console.log("Owe =======");
console.log(owe);

owe.name = "Owe N";
owe.age = 34;
console.log("Owe med egenskaper =======");
console.log(owe);

// Uh-oh, men vad händer när vi försöker skapa ett nytt objekt så här?
var siv = Person;
console.log("Siv =======");
console.log(siv);

siv.name = "Siv R";
siv.age = 87;
console.log("Siv med egenskaper =======");
console.log(siv);


// Jo, det går jättebra att skapa siv, men owe tar lite stryk av det.
console.log("Owe =======");
console.log(owe);


// Vad händer om vi skapar en tredje person utifrån ett tomt objekt?
var ulf = {};
ulf.name = "Ulf G";
ulf.age = 50;
console.log("Ulf =======");
console.log(ulf);
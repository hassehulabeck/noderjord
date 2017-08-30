// peeple.js

var firstNames = ["Håkan", "Ove", "Rune", "Gunilla", "Siv", "Anna"];
var lastNames = ["Olsson", "Hjelm", "Frid", "de Soto", "O'Neill", "Müller"];
var cities = ["Ale", "Bromma", "Cardiff", "Djibouti", "Eskilstuna", "Firenze"];

// Constructor-funktion startar med stor bokstav.
Person = function(firstName, lastName, age, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
}

Person.prototype.speak = function() {
    if (this.age < 30)
        return "Jag känner mig ung.";
    else
        return "Min livserfarenhet är stor.";
}

var personer = [];

while (personer.length < 10) {
    var person = new Person(
        firstNames[Math.floor(Math.random() * firstNames.length)],
        lastNames[Math.floor(Math.random() * lastNames.length)],
        Math.floor(Math.random() * 100),
        cities[Math.floor(Math.random() * cities.length)]
    );
    personer.push(person);
}

personer.forEach(function(personObj) {
    console.log(personObj.firstName + " " + personObj.lastName + ", " + personObj.age);
    console.log(personObj.speak() + "\n");
})
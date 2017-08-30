function SuperPerson(fname, lname, age){
    this.firstName = fname;
    this.lastName = lname;    
    this.age = age;
    this.isSeniorCitizen = false;
    this.checkSeniority = function() {
        if (this.age > 65) 
            this.isSeniorCitizen = true;
    }
}

var berit = new SuperPerson("Berit", "Alm", 37);
console.log("Berit =======");
console.log(berit);

SuperPerson.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

console.log(berit.getFullName());
// Kolla om hon är senior.
berit.checkSeniority();

if (berit.isSeniorCitizen)
    console.log("Berit är pensionär");
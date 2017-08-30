// Objekt med array och "sub-objekt"
var jasonObj = {
    name: 'Hans',
    userLevel: 1,
    color: 'red',
    dvdCollection: ['Heat', 'Det sjunde inseglet', 'Spartacus'],
    car: {
        brand: 'Daihatsu',
        year: 2012,
        fuel: 'petrol'
    }
}
// Omvandla det till en sträng som vi kan skicka.
var jasonStr = JSON.stringify(jasonObj);

// Sträng som kanske blivit skickad till oss,
var objektStr = '{"name": "Hans", "userLevel": 1, "color": "red", "dvdCollection": ["Heat", "Det sjunde inseglet", "Spartacus"], "car": {"brand": "Daihatsu","year": 2012,"fuel": "petrol"}}';

// Omvandla strängen till ett snyggt JSON-objekt.
var objektJSON = JSON.parse(objektStr);

console.log(jasonStr);
console.log(objektJSON);
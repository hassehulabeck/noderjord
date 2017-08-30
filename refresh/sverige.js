var sverige = {
    "Götaland": {
        "Skåne": [
            "Malmö", 
            "Trelleborg", 
            "Osby"
        ],
        "Halland": [
            "Varberg",
            "Halmstad"
        ],
        "Småland": [
            "Kalmar",
            "Värnamo",
            "Alvesta",
            "Vetlanda",
            "Jönköping"
        ]
    },
    "Svealand": {
        "Uppland": [
            "Tierp"
        ],
        "Västmanland": [
            "Sala",
            "Västerås"
        ]
    }
};

var txt = "";
for (var landsdel in sverige) {
    for (var landskap in landsdel) {
        landskap.map(ort, function() {
            txt += "\n" + ort;
        })
    };
    txt += landsdel;
};
console.log(txt);
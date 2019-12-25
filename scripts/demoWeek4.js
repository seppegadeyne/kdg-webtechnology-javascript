//document.querySelector("#verstuur").addEventListener("click", validateForm, false);
let checkFields = document.querySelectorAll(".check");
for (checkField of checkFields) {
    checkField.addEventListener("change", validateForm, false);
}

function validateForm(event) {
    let fields = document.querySelectorAll(".check");
    for (field of fields) {
        if (field.value === "") {
            document.querySelector(".error-" + field.name).innerText = field.name + " niet ingevuld!";
        } else {
            document.querySelector(".error-" + field.name).innerText = "";
        }

        if (field.name === "postcode") {
            let regEx = /^[1-9]\d{3}$/;
            if (!regEx.test(field.value)) {
                document.querySelector(".error-postcode").innerText = "ongeldige postcode";
            }
        }

        if (field.name === "geboortejaar") {
            let regExp = /^[1][9]\d{2}|[2]\d{3}$/;
            let date = new Date();
            if (!regExp.test(field.value) || field.value > date.getFullYear()) {
                document.querySelector(".error-geboortejaar").innerText = "ongeldig geboortejaar";
            }
        }
    }
}

function getParam() {
    let queryString = decodeURIComponent(location.search.substring(1));
    let params = queryString.split("&");
    let paramNew = [];
    for (param of params) {
        paramNew.push(param.replace(/\+/g, "").split("="));
    }
    console.log(paramNew);
}

getParam();

let sayHello = (name, age) => {
    let msg = `Hallo ${name}, je bent ${age} jaar.`;
    return msg;
}
console.log(sayHello("Joris", 28));

let tweedeArtikel = `
    <h1>Dit is een titel</h1>
    <p>En hier is een paragraaf met tekst.</p>
`;

document.querySelector(".tweedeArtikel").innerHTML = tweedeArtikel;

function logPersoon({naam = "onbekend", email = "onbekend", leeftijd = -1} = {}) {
    console.log("Naam: ", naam);
    console.log("E-mail: ", email);
    console.log("Leeftijd: ", leeftijd);
}

let persoon = {
    naam: "Peter Kassenaar",
    email: "info@kassenaar.be"
};

logPersoon(persoon);
window.addEventListener('load', init, false);

function init() {
    document.getElementById("gebjaar").addEventListener("blur", valideer, false);
}

function valideerGeboorteJaar(jaar) {
    let huidigJaar = new Date().getFullYear();
    return (jaar > 1900 && jaar <= huidigJaar);
}

function valideer(event) {
    let jaar = event.target.value;
    let resultaat = document.getElementById("resultaat");
    let jaarresult;
    if (valideerGeboorteJaar(jaar)) {
        resultaat.style.color = "green";
        jaarresult = "Juist";
    } else {
        resultaat.style.color = "red";
        jaarresult = "Foutief";
    }
    resultaat.innerHTML = jaarresult;
}
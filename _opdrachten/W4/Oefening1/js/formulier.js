addEventListener("load", init, false);

function init() {
    let form = document.getElementById("login");
    form.addEventListener("submit", loginSubmit, false);
}

function loginSubmit(event) {
    let ok = true;
    let naam = document.getElementById("naam");
    let password = document.getElementById("password");
    let naamfout = document.getElementById("naamfout");
    let passwordfout = document.getElementById("passwordfout");

    naamfout.innerHTML = "";
    passwordfout.innerHTML = "";

    if (!naam.value) { // of naamveld.value.length === 0
        naamfout.innerHTML = "Naam niet ingevuld!";
        ok = false;
    }
    if (!password.value) {
        passwordfout.innerHTML = "Password niet ingevuld!";
        ok = false;
    }
    if (!ok) {
        event.preventDefault();
    }
}

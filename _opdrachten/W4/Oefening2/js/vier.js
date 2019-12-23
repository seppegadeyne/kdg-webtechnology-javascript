window.addEventListener('load', init, false);

function init() {
    document.querySelector("#test").addEventListener("click", validate, false);
}

function validate(event) {
    let cijfers = document.getElementById("cijfers");
    let bericht = document.getElementById("bericht");
    if (vierCijfers(cijfers)) {
        bericht.innerHTML = "Invoer OK";
    } else {
        bericht.innerHTML = "Invoer fout";
        event.preventDefault();
    }
}

// Zorg ervoor dat het getal niet met een 0 start
function vierCijfers(cijfers) {
    let input = cijfers.value;     // a1234
    return input >= 1000 && input <= 9999;
}

// Alternatief met regex
/*
function viercijfers(cijfers) {
    let regEx = /^[1-9]\d{3}$/;
    return regEx.test(inhoud);
}
*/

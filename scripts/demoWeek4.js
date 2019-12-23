document.querySelector("#verstuur").addEventListener("click", validateForm, false);
let checkFields = document.querySelectorAll(".check");
for (checkField of checkFields) {
    checkField.addEventListener("change", validateForm, false);
}

function validateForm(event) {
    event.preventDefault();

    let fields = document.querySelectorAll(".check");
    for (field of fields) {
        if (field.value == "") {
            document.querySelector(".error-" + field.name).innerText = field.name + " niet ingevuld!";
        } else {
            document.querySelector(".error-" + field.name).innerText = "";
        }
    }
}
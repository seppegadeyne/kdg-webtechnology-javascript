addEventListener('load', init, false);

function init() {
    document.getElementById("tel").addEventListener("blur", valideerTelefoon, false);
    document.getElementById("iban").addEventListener("blur", valideerRekeningNummer, false);
    document.getElementById("plaat").addEventListener("blur", valideerNummerPlaat, false);
    document.getElementById("email").addEventListener("blur", valideerEmail, false);
}

function isGeldigTelefoonnummer(nummer) {
    // const regexp = /^0[2349]\/\d{3}\.\d{2}\.\d{2}$|^0[1-9]\d{1,2}\/\d{2}\.\d{2}\.\d{2}$/;
    // const regexp = /^0[2349]\/\d{3}(\.\d{2}){2}|0[1-9]\d{1,2}\/\d{2}(\.\d{2}){2}$/;
    const regexp = /^0([2349]\/\d{3}|[1-9]\d{1,2}\/\d{2})(\.\d{2}){2}$/;
    return regexp.test(nummer);
}

function isGeldigRekeningNummer(rekening) {
    //const regexp = /^BE\d{2}-\d{4}-\d{4}-\d{4}$|^BE\d{14}$/;
    // const regexp = /^(BE\d{2})(\d{12}|-\d{4}-\d{4}-\d{4})$/;
    const regexp = /^(BE\d{2})(\d{12}|(-\d{4}){3})$/
    return regexp.test(rekening);
}

function isGeldigeNummerplaat(plaat) {
    const regexp = /^(1-)?[A-Z]{3}-\d{3}$|^\d{3}-[A-Z]{3}$/;
    return regexp.test(plaat);
}

function isGeldigEmailAdres(email) {
    const regexp = /^[a-z]+\.[a-z]+@(student.)?kdg.be$/
    return regexp.test(email);
}

function valideerNummerPlaat() {
    let plaat = document.getElementById("plaat").value;
    let fout = document.getElementById("plaatFout");
    fout.innerHTML = "";
    if (!isGeldigeNummerplaat(plaat))
        fout.innerHTML = "formaat: 1-ABC-123 of 123-ABC of ABC-123";
}

function valideerTelefoon() {
    let telefoon = document.getElementById("tel").value.trim();
    let fout = document.getElementById("telFout");
    fout.innerHTML = "";
    if (!isGeldigTelefoonnummer(telefoon))
        fout.innerHTML = "formaat: 0x/xxx.xx.xx of 0xx/xx.xx.xx of 0xxx/xx.xx.xx";
}

function valideerRekeningNummer() {
    let iban = document.getElementById("iban").value.trim();
    let fout = document.getElementById("ibanFout");
    fout.innerHTML = "";
    if (!isGeldigRekeningNummer(iban))
        fout.innerHTML = "formaat: BExx xxxx xxxx xxxx of BExxxxxxxxxxxxxx";
}

function valideerEmail() {
    let email = document.getElementById("email").value;
    let fout = document.getElementById("emailFout");
    fout.innerHTML = "";
    if (!isGeldigEmailAdres(email))
        fout.innerHTML = "formaat: xxx@student.kdg.be of xxx@kdg.be";
}

//-----------------------------------------------------------------------------------------------------

/*  http://www.regular-expressions.info/ */
/* anchor with ^ and $ */


// 014/25.57.47  09/586.14.15  0479/54.84.17
// Grote zones: 02, 03, 04, 09

/*
 function isGeldigTelefoonnummer(nummer) {
 //const regexp = /^0\d{2,3}[-\/]\d{2}[-\.]\d{2}[-\.]\d{2}|0\d[-\/]\d{3}[-\.]\d{2}[-\.]\d{2}$/;
 const regexp = /^0[2349]\/\d{3}\.\d{2}\.\d{2}$|^0[1-9]\d{1,2}\/\d{2}\.\d{2}\.\d{2}$/;
 return regexp.test(nummer);
 }
 */
// All IBAN regex: [a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}
// constiant: [A-Z]{2}\d{2}[A-Z0-9]{1,30} */

// BE16-7475-1477-6478 of zonder '-' tussen
/*
 function isGeldigRekeningNummer(rekening) {
 const regexp = /^BE\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
 return regexp.test(rekening);
 }
 */

// http://nl.wikipedia.org/wiki/Belgisch_kenteken
// "ABC-123" of "123-ABC" of "1-ABC-123"
/*
 function isGeldigeNummerplaat(plaat) {
 const regexp = /^(1-)?[A-Z]{3}-\d{3}$|^\d{3}-[A-Z]{3}$/;
 return regexp.test(plaat);
 }
 */

// KDG e-mail adres
/*
 function isGeldigEmailAdres(email) {
 const regexp = /^[\w.]+@(student.)?kdg.be$/;
 return regexp.test(email);
 }
 */
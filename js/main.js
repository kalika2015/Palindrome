var submit = document.getElementById("btn");

function palindrome(mot) {
    mot = mot.toLowerCase().replace(/[^a-z0123456789]+/g,"");
    var reverse = mot.split("").reverse().join("");
    if (mot == reverse) {
        return true
    }
    return false
}

submit.addEventListener("click", function() {
    var txt = document.getElementById("txt").value;
    var resultat = palindrome(txt);
    if(resultat === true) {
        document.getElementById("notification").innerHTML = txt+" est un palindrome";
        document.getElementById("notification").className = "success";
    } else {
        document.getElementById("notification").innerHTML = txt+" n'est pas un palindrome";
        document.getElementById("notification").className = "danger";
    }
});
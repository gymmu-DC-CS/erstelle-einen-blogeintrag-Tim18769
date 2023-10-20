// Funktion, die prüft ob der Nutzername und das Passwort korrekt ist, falls ja wird der Text freigeschalten
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "e282253" && password === "Password123") {  // <-- Nutzername und Passwort
        document.getElementById("loginBox").style.display = "none";
        document.querySelector(".textManchesterUnited").style.filter = "none"; // <-- zum Aufheben des Blurs nachdem man sich eingeloggt hat
        document.querySelector(".textManchesterUnited").style.userSelect = "auto";
        document.querySelector(".textManchesterUnited").style.pointerEvents = "auto";
    } else {
        alert("Falscher Nutzername oder Passwort. Bitte versuchen Sie es erneut.");
    }
}
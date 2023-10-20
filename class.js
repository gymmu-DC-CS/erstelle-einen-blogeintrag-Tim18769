function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Test" && password === "Hallo") {
        document.getElementById("loginBox").style.display = "none";
        document.querySelector(".textManchesterUnited").style.filter = "none";
    } else {
        alert("Falscher Nutzername oder Passwort. Bitte versuchen Sie es erneut.");
    }
}

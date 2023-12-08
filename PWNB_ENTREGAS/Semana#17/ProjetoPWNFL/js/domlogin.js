function redirectPage() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.alert("Login Concluido!");
    window.location.href = "index.html";
}

function clicklogin() {
    if (username != null) {
        window.location.href = "index.html";
        localStorage.clear();
        document.getElementById('logout').innerHTML = "Log-out";
    } else {
        window.location.href = "login.html";
        document.getElementById('logout').innerHTML = "Log-out";
    }
}


var username = localStorage.getItem("username");
window.onload = function () {
    var welcomeMessage = document.getElementById("welcome-message");
    if (username) {
        welcomeMessage.textContent = "Bem-vindo " + username;
    } else {
        welcomeMessage.textContent = "Login";
    }
};


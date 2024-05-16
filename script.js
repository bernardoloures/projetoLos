function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "abcde" && password === "1234") {
        document.getElementById("loading-icon").style.display = "inline";

        setTimeout(function() {
            window.location.href = "telaprincipal.html";
        }, 3000);
        
        errorMessage.style.display = "none";
        document.getElementById("username").classList.remove("error");
        document.getElementById("password").classList.remove("error");
    } else {
        errorMessage.style.display = "block";
        document.getElementById("username").classList.add("error");
        document.getElementById("password").classList.add("error");
        
        document.getElementById("password").value = "";
    }
}

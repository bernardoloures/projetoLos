function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simulação de validação (substitua por sua lógica de autenticação real)
    if (username === "abcde" && password === "1234") {
        // Exibir ícone de carregamento
        document.getElementById("loading-icon").style.display = "inline";

        setTimeout(function() {
            window.location.href = "index.html"; // Redirecionar para a página principal após 3 segundos
        }
        
        // Limpar mensagem de erro e remover classe de erro dos campos
        errorMessage.style.display = "none";
        document.getElementById("username").classList.remove("error");
        document.getElementById("password").classList.remove("error");
    } else {
        // Exibir mensagem de erro e adicionar classe de erro aos campos
        errorMessage.style.display = "block";
        document.getElementById("username").classList.add("error");
        document.getElementById("password").classList.add("error");
        
        // Limpar campo de senha
        document.getElementById("password").value = "";
    }
}

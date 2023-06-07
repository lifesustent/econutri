// FORM -------------------------------------------------------

function validateLogin() {
    const login = document.getElementById('login').value
    const senha = document.getElementById('senha').value

    if (login == "" || senha == "") {
        alert("Por favor, preencha todos os campos");
    }else if(login === "Admin" || senha === 123456) {
        alert("Muito obrigado! Iremos te redirecionar para o site!");
        window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
    } else {
        login = ''
        senha = ''
        alert("Preencha os campos novamente! Seu usuário ou sua senha está incorreta!");
    }

    return false;
}

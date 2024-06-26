// Declaração de variáveis que selecionam os inputs

const form = document.getElementById('forms');
const userSelect = document.getElementById('user');
const passwordSelect = document.getElementById('password');


// Declaração de variáveis de apoio para a verificação.

var user;
var password;
var contador = 0;

// Declaração do array de senhas válidas.

const senhasValidas = ["123456", "senha123", "abcde", "admin", "pda2024"];

//Evento que é acionado quando alguma informação é submetida no formulário.

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputUser = userSelect.value; // Inserindo valor do input de user.
    user = inputUser;

    const inputPass = passwordSelect.value; // Inserindo valor do input da senha.
    password = inputPass;

    // Verificando se user e password foram preenchidos.

    if (user == "") {
        alert("Digite seu usuário");
    } else if(password == ""){
        alert("Digite sua senha");
    } else{
        verify(); // Declaração de função que verificará se a senha está certa.
    }
    
});

// Função que verifica se a senha está certa, caso sim ele direciona o usuário para a página de sucesso, caso não ele solta um alerta informando que aquelas informações estão incorretas e adiciona 1
// no contador. Se o contador chegar a 3 ele direciona o usuário para a página de falha.

function verify () {
    if (senhasValidas.includes(password)) {
            window.location.href="acess/acess.html";
    } else {
        alert("Informações Inválidas");
        contador++;
    }

    if (contador == 3) {
        window.location.href="error/error.html";
    }
}





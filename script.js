// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});
function mudar(){
    const frase1 = document.getElementById("mensagem1")
    frase1.textContent = "Yuri Alberto";
    const frase2 = document.getElementById("mensagem2")
    frase2.textContent = "Muito maior que:";
    const frase3 = document.getElementById("mensagem3")
    frase3.textContent = "Memphis Depay";
}
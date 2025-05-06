const btns = document.getElementById("btnSobre");
const btnp = document.getElementById("btnProjetos");
const main = document.getElementById("painel");
const mensagem = document.getElementById("mensagem");
btns.addEventListener("click" , function(event) {
mensagem.innerHTML = '<span>Bem Vindo! Meu Nome é João Vitor Estevam</span>'; 
    main.innerHTML = '<p class = "sobre">Sou um desenvolvedor estudante e atualmente estou apenas fazendo projetos pessoais e buscando oportunidades, visando me aprimorar como programador, a linguagem de programação que foco em dominar é o Java</p>';

})
btnp.addEventListener("click", function(event){
    mensagem.innerHTML = '<span>Bem Vindo! Meu Nome é João Vitor Estevam</span>'; 
    main.innerHTML = '<div class="projetos"><div class = "projeto"><img class="img" src="./Captura de tela 2025-04-25 163129.png" alt=""><p>Meu primeiro projeto, é um aplicativo desktop, que permite o gerenciamento(adicionar, excluir e alterar em um banco de dados)de serviços de um lavarapido e a busca por um ou vários serviços específicos utilizei as tecnologias Java|MySQL|IDE Netbeans</p></div></div>';
})
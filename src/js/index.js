// OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

const botoesCarrossel = document.querySelectorAll('.botao');

const imagensCarrossel = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        botao.classList.add('selecionado');

        esconderImagemAtiva();

        imagensCarrossel[indice].classList.add('ativa');

    })
});
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}


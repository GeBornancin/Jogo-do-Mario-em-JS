// Selecionando os elementos do jogo
const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const fimDejogo = document.querySelector('.fim-de-jogo');
const botaoReiniciar = document.querySelector('.reiniciar');
const gameOver = document.querySelector('.game-over');

// Inicializando a pontuação
let pontuacao = 0;

// Adicionando evento de teclado para fazer o Mario pular
document.addEventListener('keydown', fazerMarioPular);

let noPulo = false;

// Função para fazer o Mario pular
function fazerMarioPular() {
    if (noPulo) return;

    noPulo = true;

    mario.classList.add('pular');
    setTimeout(function () {
        mario.classList.remove('pular');

        noPulo = false;
    }, 500);
}

// Atualizando a pontuação
const pontuacaoAtual = document.querySelector('.pontuacao');
function atualizarPontuacao() {
    pontuacaoAtual.innerHTML = pontuacao + "m";
    pontuacao++;
}

// Atualizando a pontuação a cada 200ms
let intervalo = setInterval(atualizarPontuacao, 200);

// Elemento para exibir a pontuação final
let pontuacaoFinal = document.getElementById('pontuacao-final');

// Verificando colisões
function verificarColisoes() {
    const posicaoCano = cano.offsetLeft;
    const posicaoMario = parseFloat(getComputedStyle(mario).bottom);
    const posicaoNuvem = parseFloat(getComputedStyle(nuvem).bottom);

    // Verificando se houve colisão entre o Mario e o cano
    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60) {
        console.log("Voce morreu, sua pontuação foi de: ", pontuacao);

        // Parando o jogo
        pararJogo();

        // Removendo animações e ajustando posições dos elementos
        cano.style.animation = 'none';
        nuvem.style.left = `${posicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;
        mario.src = 'assets/imgs/fim-de-jogo.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';

        nuvem.style.animation = 'nuvem 20s infinite linear';
        nuvem.style.left = `${posicaoNuvem}px`;

        // Exibindo tela de fim de jogo
        fimDejogo.style.visibility = 'visible';
    }
}

// Verificando colisões a cada 10ms
let loopJogo = setInterval(verificarColisoes, 10);

// Função para parar o jogo
function pararJogo() {
    clearInterval(loopJogo);
    clearInterval(intervalo);
    console.log("Jogo parado");
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    window.location.reload();
}

// Adicionando evento de clique no botão de reiniciar
botaoReiniciar.addEventListener('click', reiniciarJogo);
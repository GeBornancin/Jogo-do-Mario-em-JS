const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const fimDejogo = document.querySelector('.fim-de-jogo');
const botaoReiniciar = document.querySelector('.reiniciar');

let pontuacao = 0;

document .addEventListener('keydown', fazerMarioPular);

function fazerMarioPular(){
    mario.classList.add('pular');
    setTimeout(function(){
        mario.classList.remove('pular');

        pontuacao++;

        atualizarPontuacao();
    }, 500);
}

function atualizarPontuacao(){

    console.log(pontuacao);
}

function verificarColisoes(){
    
    const posicaoCano = cano.offsetLeft;

    const posicaoMaria = parseFloat(getComputedStyle(mario).bottom);

    const posicaoNuvem = parseFloat(getComputedStyle(nuvem).bottom);

    if(posicaoCano <= 100 && posicaoCano > 0 && posicaoMaria < 60){
        console.log("Voce morreu, sua pontuação foi de: ", pontuacao);
        pontuacao = 0;
        pararJogo();

        cano.style.animation = 'none';
        nuvem.style.left = `${posicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;
        mario.src = 'assets/imgs/fim-de-jogo.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';

        nuvem.style.animation = 'nuvem 20s infinite linear';
    }
}
let menorValor = 0;
let maiorValor = 100;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
const elMenorValor = document.querySelector('#menorValor');
const elMaiorValor = document.querySelector('#maiorValor');
elMenorValor.innerHTML = menorValor;
elMaiorValor.innerHTML = maiorValor;
const campoMaiorMenor = document.querySelector('#campoMaiorMenor');

const selecionarDificuldade = document.querySelector('#select');
selecionarDificuldade.addEventListener('change', () => {
    if (selecionarDificuldade.value === 'facil') {
        menorValor = 0;
        maiorValor = 10;
    } else if (selecionarDificuldade.value === 'medio') {
        menorValor = 0;
        maiorValor = 100;
    } else if (selecionarDificuldade.value === 'dificil') {
        menorValor = 0;
        maiorValor = 1000;
    }
    elMenorValor.innerHTML = menorValor;
    elMaiorValor.innerHTML = maiorValor;
    numeroSecreto = gerarNumeroAleatorio();  // Re-sorteia o número secreto com o novo intervalo
    console.log('Nova dificuldade selecionada:', selecionarDificuldade.value);
});

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorValor + 1));
}
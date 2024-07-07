let menorValor = 0
let maiorValor = 100
let numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

const elMenorValor = document.querySelector('#menorValor')
const elMaiorValor = document.querySelector('#maiorValor')
const campoMaiorMenor = document.querySelector('#campoMaiorMenor')
const selecionarDificuldade = document.querySelector('#select')

elMenorValor.innerHTML = menorValor
elMaiorValor.innerHTML = maiorValor

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorValor + 1))
}

selecionarDificuldade.addEventListener('change', () => {
    if (selecionarDificuldade.value === 'facil') {
        maiorValor = 10
    } else if (selecionarDificuldade.value === 'medio') {
        maiorValor = 100
    } else if (selecionarDificuldade.value === 'dificil') {
        maiorValor = 1000
    }
    elMenorValor.innerHTML = menorValor
    elMaiorValor.innerHTML = maiorValor
    numeroSecreto = gerarNumeroAleatorio()  // Re-sorteia o número secreto com o novo intervalo
    console.log('O novo número secreto é: ' + numeroSecreto)
    console.log('Nova dificuldade selecionada:', selecionarDificuldade.value)
})
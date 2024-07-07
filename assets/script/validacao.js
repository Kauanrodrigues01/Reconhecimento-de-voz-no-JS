// Verifica se o valor do chute é válido e dentro dos limites
function verificaValorDoChute(chute) {
    if (chute == 'game over'){
        document.body.innerHTML = `
            <h3 class="game-over">GAME OVER</h3>
            <h2>Jogo encerrado</h2>
            <button id="jogar-novamente" class="btn-Start-jogarNovamente">Jogar novamente</button>
        `
        condicaoLoopGravacao = false
        return
    }

    const numero = +chute

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    } 
    
    if (verificaSeEMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa ser entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    // debugger
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h3>Você acertou!</h3>
            <h2>O número secreto era ${numeroSecreto}</h2>

            <button id="jogar-novamente" class="btn-Start-jogarNovamente">Jogar novamente</button>
        `
        condicaoLoopGravacao = false
        return
    } else if (numeroSecreto < numero ){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"</i></div>`

    } else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"</i></div>`
    }
}

// Verifica se o número está dentro dos limites permitidos
function verificaSeEMaiorOuMenorQueOPermitido(numero) {
    if (numero > maiorValor || numero < menorValor) {
        console.log('Chute fora do intervalo permitido')
        return true
    } else {
        console.log('Chute dentro do intervalo permitido')
        return false
    }
}

document.body.addEventListener('click', evt =>{
    if (evt.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
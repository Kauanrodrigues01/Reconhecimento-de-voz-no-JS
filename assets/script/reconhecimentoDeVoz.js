const elementoChute = document.getElementById('chute')
const boxChute = document.querySelector('.box')
const bntStart = document.querySelector('#bnt-start')


let condicaoLoopGravacao = true

// Configuração do SpeechRecognition
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'

// Funções
function onSpeak(e) {
    const chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaValorDoChute(chute)
}

function exibeChute(chute) {
    elementoChute.innerHTML = ''
    elementoChute.innerHTML += `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

function loopGravacao(trueOrFalse) {
    if (trueOrFalse) {
        recognition.start()
    } else {
        recognition.abort()
    }
}

recognition.addEventListener('result', onSpeak)

recognition.addEventListener('end', () => {
    loopGravacao(condicaoLoopGravacao)
})

bntStart.addEventListener('click', () => {
    recognition.start()

    const p = document.querySelector('p')

    const div = document.createElement('div')

    const pIniciado = document.createElement('p')
    pIniciado.classList.add('paragrafo-jogo_iniciado')
    pIniciado.textContent = 'Jogo iniciado'

    const pAviso = document.createElement('p')
    pAviso.innerHTML = 'Fale um número dentro do intervalo determinado <br> <br> Fale <span style="font-weight: 600;">"GAME OVER"</span> para o jogo encerrar'

    div.appendChild(pIniciado)
    div.appendChild(pAviso)

    document.body.insertBefore(div, p)
})
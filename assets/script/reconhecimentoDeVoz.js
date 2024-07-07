const elementoChute = document.getElementById('chute')
const boxChute = document.querySelector('.box')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaValorDoChute(chute)
}

function exibeChute(chute) {
    // debugger
    elementoChute.innerHTML = ''
    elementoChute.innerHTML += `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => {
    recognition.start()
})
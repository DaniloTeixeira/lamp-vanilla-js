const lamp = document.querySelector('#lamp')
const toggleButton = document.querySelector('#toggle-button')
const restoreLampButton = document.querySelector('#restore-button')

const localhost = 'http://127.0.0.1:5500'
const onButtonSrc = `${localhost}/images/on-button.jpg`

let isLampBroken = false

setDisplayNoneOnRestoreButton()

function setDisplayNoneOnRestoreButton () {
    restoreLampButton.classList.add('d-none')
}

function removeDisplayNoneOnRestoreButton () {
    restoreLampButton.classList.remove('d-none')
}

function setTurnOnButtonSrc () {
    toggleButton.src = `${localhost}/images/on-button.jpg`
}

function setTurnOffButtonSrc () {
    toggleButton.src = `${localhost}/images/off-button.jpg`
}

function setTurnOnLampSrc () {
    lamp.src = `${localhost}/images/on-lamp.jpg`
}

function setTurnOffLampSrc () {
    lamp.src = `${localhost}/images/off-lamp.png`
}

function setBackgroundBlack () {
    document.body.style.background = '#000'
}

function turnOnLamp () {
    const msg = 'The lamp is broken, replace it so you can turn it on.'

    if (isLampBroken) {
        alert(msg)
        return
    }

    document.body.style.background = '#fff'
    setTurnOnLampSrc()
    setTurnOnButtonSrc()
    setDisplayNoneOnRestoreButton()
}

function turnOffLamp () {
    setTurnOffLampSrc()
    setBackgroundBlack()
    setTurnOffButtonSrc()
}

function toggleButtonSrcImg () {
    const isTurnOnButton = toggleButton.src === onButtonSrc

    isTurnOnButton ? turnOffLamp() : turnOnLamp()
}

lamp.addEventListener(('dblclick'), () => {
    isLampBroken = true
    lamp.src = 'images/broken-lamp.png'

    setBackgroundBlack()
    setTurnOffButtonSrc()
    removeDisplayNoneOnRestoreButton()
})

restoreLampButton.addEventListener(('click'), () => {
    isLampBroken = false

    setTurnOffLampSrc()
    setDisplayNoneOnRestoreButton()
})

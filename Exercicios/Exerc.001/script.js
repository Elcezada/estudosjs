
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutes = data.getMinutes()
    var msgfinal = window.document.getElementById('msgfinal')
    msg.innerHTML = `Agora são ${horas} horas e ${minutes} minutos!`
    if (horas >= 0 && horas < 12) {
        msgfinal.innerHTML = `Tenha um bom dia!`
        img.src = 'fotodedia.jpg'

    } else if (horas >= 12 && horas < 18) {
        img.src = 'fotodetarde.jpg'
        msgfinal.innerHTML = `Tenha uma Boa Tarde!`
        document.body.style.background = '#DAA520'

    } else {
        img.src = 'fotodenoite.jpg'
        msgfinal.innerHTML = `Tenha uma Boa Noite!`
        document.body.style.background = '#708090'
    }

}



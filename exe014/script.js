function carregar(){
    var msg =  window.document.getElementById('msg')
    var img =  window.document.getElementById('img')

    var data =  new Date()
    var hora  = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas...`

    if(hora >= 0 && hora < 12) {
        img.src = 'img/dia.jpg'
        document.body.style.background = '#d8d1c5'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#bf7d75'
    } else {
        img.src = 'img/noite.jpg'
        document.body.style.background = ' #191970 '
    }


}
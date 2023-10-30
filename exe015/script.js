
function verificar(){
    var data =  new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('Ano')
    var res = document.querySelector('div#res')

    if(Number(fano.value) == 0 || Number(fano.value) >  ano){
        window.alert('[erro] verifique os dados e tente novamente!')
    }
    else{
        var fsex =  document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var genero = ''
        var img =  document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){ 
            genero =  'Homem'
            if (idade >=0 && idade <= 10){
                img.setAttribute('src', 'img/nino.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'img/jovem.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/jovem.jpeg')
            } else {
                img.setAttribute('src', 'img/senhor.jpeg')
            }

        }else{
            genero = 'mulher'

            if (idade >=0 && idade <= 10){
                img.setAttribute('src', 'img/nina.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'img/jovem.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/mulher.jpeg')
            } else {
                img.setAttribute('src', 'img/senhora.jpeg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style= 'width: 220px;height: 150px;'
    }
    


}
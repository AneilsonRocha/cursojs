
function contarNumeros(){
    // alert('Contando números...')
    var num =  document.getElementById('inicio')
    var numFim =  document.getElementById('fim')
    var numPasso =  document.getElementById('passo')

    var res = document.getElementById('resultado')

    var inicio = Number(num.value)
    var fim =  Number(numFim.value)
    var passo = Number(numPasso.value)

    if (inicio == 0 || fim == 0 || passo == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'

        if (inicio < fim){
            for (var i = inicio; i <= fim; i += passo){
                res.innerHTML += `${i} \u{1F449} `
                
                
            }
        } else {
            // contagem regressiva
            for (var i = inicio; i >= fim; i -= passo){
                res.innerHTML += `${i} \u{1F3C1} `
                
            }
        }
        res.innerHTML += `\u{1F92F}`
    }

}
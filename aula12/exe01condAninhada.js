var agora =  new Date()
var hora = agora.getHours()

console.log(`Agora sao exataemente ${hora} horas.`)
if (hora < 12 ){
    console.log('Bom diaaaaa')
} else if (hora <= 18) {
    console.log('Boa tardeee')
} else {
    console.log('Boa noiteee!!!')
}

switch(expressao) { // essa expressao so aceita valores como string e int
    case 1:
        break
    case 2:
        break
        
    default:
        break // usar o break é obrigatorio


}
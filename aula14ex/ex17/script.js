function gerarTabuada(){
    // alert("0k")
    var num =  document.getElementById('num')
    var res =  document.getElementById("resultado")

    if(num.value.length == 0){
        alert("Ops! Informe um numero...")
    } else {
        res.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${Number(num.value)} x ${i} = ${Number(num.value) * i}`
            item.value = `res${i}`
            res.appendChild(item)
        }

    }

    

    
        
    

    
}
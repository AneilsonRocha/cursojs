

function parimp(num){
    if(num % 2 ==0){
        return 'par'
    }else {
        return 'impar'
    }
}

var res = parimp(6)
console.log(res)

function soma (n1=1,n2=0) {
    return n1 + n2
}

console.log(soma(7,9))


let v =  function(n) {
    return n*2
}

function fatorial(n){
    let fat= 1
    for(let c = n; c > 1;c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
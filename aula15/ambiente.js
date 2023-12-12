let num  = [2,4,9]

num[1] = 4

num.push(7)
num.length // length nao é um metodo e sim um atributo
num.sort() //metodo interno

// for(let pos =0 ;pos < num.length;  pos++){
//     console.log(num[pos])
// }

for(let pos in num){
    console.log(num[pos])
}

num.indexOf(7) //retorna  o indice 


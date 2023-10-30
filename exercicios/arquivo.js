// array = [1,2,3,4,5,7,7,8,9,10]  
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
//     // criar um codigo que ao criar uma variel recebe o nome da pessoa a media peso e altura e retorna o IMC dela

//     // create a code that when creating a variable receives the name of the person, average weight and height and returns their BMI
    
//     // -----------------Relatorio de Teste-----------------
//     Falha quando gera O código  está iterando sobre cada elemento do array e imprimindo-o no console. 
//     tentei usar o padrao de linguagem em Ingles para facilitar a leitura do codigo,porem acontece o mesmo .depois  fazer o teste
//     em outras entao percebi que esta usando comandos errados,ou seja estava uando sempre o icone da luz para fazer o teste,
//     so entao depois percebi que tenha que estart o comentario usando o comando ctrl + i.
 
// -------------------------------------------------------------

//#####################################################################################################################

// function maior() {
//     let maiorNumero = 0;
//     for (let i = 0; i < 10; i++) {
//         let numero = Math.floor(Math.random() * 100) + 1;
//         if (numero > maiorNumero) {
//             maiorNumero = numero;
//         }
//     }
//     return maiorNumero;
//     console.log(maiorNumero)
    
// }

// console.log(maior())

/**  teste OK
 * A função `maior()` gera 10 números aleatórios entre 1 e 100 e retorna o maior número.
 * @retorna o maior número aleatório gerado entre 10 números.
 */

//#####################################################################################################################


// /** Teste ok
//  * Verifica se um número é par ou ímpar.
//  * @param {number} num - O número a ser verificado.
//  * @returns {string} - Retorna "par" se o número for par e "ímpar" se o número for ímpar.
//  */
// function verificaParImpar(num) {
//     if (num % 2 === 0) {
//         return "par";
//     } else {
//         return "ímpar";
//     }
// }

//#####################################################################################################################

/** teste ok
 * Retorna o menor número de um array de números.
 * @param {number[]} numeros - O array de números.
 * @returns {number} - O menor número do array.
 */
function encontrarMenorNumero(numeros) {
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}

// Exemplo de uso:
const numeros = [10, 5, 3, 8, 2];
const menorNumero = encontrarMenorNumero(numeros);
console.log(menorNumero); // Output: 2

//#####################################################################################################################


const nomeCompleto = "GitHub Copilot";

/** teste ok
 * criar uma variel que recebe seu nome completo

 */

//#####################################################################################################################


/* teste ok tudo certo, retornou apenas os numeros pares de 1 a 100 */
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//#####################################################################################################################


/** teste ok
 * Converte um número em hexadecimal.
 * @param {number} num - O número a ser convertido.
 * @returns {string} - O número convertido em hexadecimal.
 */
function converterParaHexadecimal(num) {
    return num.toString(16);
}

// Exemplo de uso:
const numero = 255;
const hexadecimal = converterParaHexadecimal(numero);
console.log(hexadecimal); // Output: "ff"
console.log(converterParaHexadecimal(10)); // Output: "a"

//#####################################################################################################################

/** Teste ok
 * Muda o fundo do site para a cor especificada.
 * @param {string} cor - A cor desejada em formato hexadecimal.
 */
function mudarFundo(cor) {
    document.body.style.backgroundColor = cor;
}

// #####################################################################################################################


/** Teste ok
 * Muda a cor do botão quando clicado.
 * @param {string} id - O id do botão a ser modificado.
 * @param {string} cor - A cor desejada em formato hexadecimal.
 */
function mudarCorBotao(id, cor) {
    const botao = document.getElementById(id);
    botao.addEventListener("click", function() {
        botao.style.backgroundColor = cor;
    });
}

// #####################################################################################################################



/** Teste ok 
 * Muda a cor do texto quando passa o mouse em cima.
 * @param {string} id - O id do elemento a ser modificado.
 * @param {string} corInicial - A cor inicial do texto.
 * @param {string} corFinal - A cor final do texto.
 */
function mudarCorTexto(id, corInicial, corFinal) {
    const elemento = document.getElementById(id);
    elemento.addEventListener("mouseover", function() {
        elemento.style.color = corFinal;
    });
    elemento.addEventListener("mouseout", function() {
        elemento.style.color = corInicial;
    });
}
// #####################################################################################################################


/** teste ok
 * Autentica um usuário.
 * @param {string} username - O nome de usuário.
 * @param {string} password - A senha do usuário.
 * @returns {boolean} - Retorna true se o usuário foi autenticado com sucesso, caso contrário, retorna false.
 */
function autenticarUsuario(username, password) {
    // Aqui você pode implementar a validação do nome de usuário e senha.
    // Se as informações estiverem corretas, retorne true, caso contrário, retorne false.
    return true;
}

// Exemplo de uso:
const username = "usuario";
const password = "senha";
const autenticado = autenticarUsuario(username, password);
if (autenticado) {
    console.log("Usuário autenticado com sucesso!");
} else {
    console.log("Nome de usuário ou senha incorretos.");
}

// #####################################################################################################################    

/** Teste ok
 * Escreve um alert na tela com a mensagem especificada.
 * @param {string} mensagem - A mensagem a ser exibida no alert.
 */
function exibirAlert(mensagem) {
    alert(mensagem);
}

// #####################################################################################################################


/**  teste ok
 * Muda a cor do texto de um elemento HTML.
 * @param {string} id - O id do elemento a ser modificado.
 * @param {string} cor - A cor desejada em formato hexadecimal.
 */
function mudarCorTexto(id, cor) {
    const elemento = document.getElementById(id);
    elemento.style.color = cor;
}

// #####################################################################################################################
/** teste ok
 * Converte uma string em um array.
 * @param {string} str - A string a ser convertida em array.
 * @returns {array} - O array resultante da conversão.
 */
function converterStringParaArray(str) {
    return str.split("");
}



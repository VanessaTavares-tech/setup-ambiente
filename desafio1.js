// Criar uma função em JavaScript que receba um número inteiro como parâmetro. 
// A função deve retornar "Par" se o número for divisível por 2, ou "Ímpar" caso contrário.

let par = 0
let impar = 0
let numero = [4,5,6,13]

for (let cont = 0; cont < numero.length; cont ++){
    verificarNumero(numero[cont])
}

function verificarNumero(numero){
    if (numero % 2 == 0){
        console.log(numero + ' é par!')
    } else {
        console.log(numero + ' é ímpar!')
    }
}

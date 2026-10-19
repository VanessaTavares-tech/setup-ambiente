//Criar uma função que receba um número de 1 a 10 como parâmetro. 
// Utilizando um laço de repetição, imprima no console a tabuada desse número de 1 a 10 no formato X x Y = Z

let num1 = 0
let num2 = 0
let resultado = 0 

function tabuada(num1){
    for(let cont=1; cont<11; cont++){
        num2=cont
        resultado = num1 * num2
        console.log(num1 + ' X ' + cont + ' = ' + resultado)
    }
}

tabuada(5)


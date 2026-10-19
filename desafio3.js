//Criar uma função que receba um vetor (array) contendo vários números inteiros. 
// A função deve percorrer o vetor e retornar o maior valor encontrado nele]

let numeros = [ 1, 3, 6, 9, 15]

function maiorNum(numeros){
    let maior = numeros[0]

    for (let cont=0; cont < numeros.length; cont ++){
        if (numeros[cont] > maior){
            maior = numeros[cont]
        }
    }
    return maior
}

console.log(maiorNum(numeros))
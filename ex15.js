// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

function getFib(totalTerms) {
    let fib = [0, 1]
    for (let i = 2; i < totalTerms; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    console.log(fib.join(', ') + '.')
}

getFib(10)

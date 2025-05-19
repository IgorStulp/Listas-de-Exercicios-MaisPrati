// Crie um programa que exibe a tabuada de um número fornecido pelo usuário
// (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')()
const {shouldContinue} = require('./askToContinue.js')

function showWelcomeMessage() {
    console.log('---'.repeat(32))
    console.log('Tabuada +PraTi')
    console.log('---'.repeat(32))
}

function getValidNumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && Number.isInteger(number)) {
            return number
        }
        console.log('Digite um número válido.')
    }
}

function getMultiplicand() {
    const multiplicand = getValidNumber('Digite um número para obter sua tabuada: ')
    return multiplicand
}

function printMultiplicationTable(multiplicand) {
    console.log(`\nTabuada do ${multiplicand}:`)

    for (let i = 1; i <= 10; i++) {
        console.log(
            `${multiplicand} x ${i.toString().padStart(2, ' ')} = ${(multiplicand * i).toString().padStart(2, ' ')}`,
        )
    }
}

function main() {
    showWelcomeMessage()
    let continueProgram = true

    while (continueProgram) {
        const multiplicand = getMultiplicand()
        printMultiplicationTable(multiplicand)
        continueProgram = shouldContinue()
    }
}

main()

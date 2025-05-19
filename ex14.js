// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()
const {shouldContinue} = require('./askToContinue.js')

function showWelcomeMessage() {
    console.log('Bem-vindo ao calculador de fatorial!')
    console.log('Digite um número para calcular o seu fatorial.\n')
}

function getValidNumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && Number.isInteger(number) && number > 0) {
            return number
        }
        console.log('Por favor, digite um número inteiro maior que 0.')
    }
}

function getFactorNumber() {
    const fat = getValidNumber('Digite um valor para ter o fatorial: ')
    return fat
}

function calculateFactorization(fat) {
    let total = 1
    let expr = ''
    for (let i = fat; i >= 1; i--) {
        total *= i
        expr += i

        expr += i > 1 ? ' x ' : ''
    }
    console.log(`${fat}! = ${expr} = ${total}\n`)
}

function main() {
    showWelcomeMessage()

    let continueProgram = true

    while (continueProgram) {
        const userFat = getFactorNumber()
        calculateFactorization(userFat)
        continueProgram = shouldContinue()
    }
}

main()

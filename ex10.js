// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()
const {shouldContinue} = require('./askToContinue.js')

function showWelcomeMessage() {
    console.log('Digite um número para ser impresso 10 vezes.')
}

function getValidNumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && Number.isInteger(number)) {
            return number
        }
        console.log('Digite um número inteiro válido.')
    }
}

function getUserChoice() {
    const userChoice = getValidNumber('Digite um número: ')
    return userChoice
}

function printTenTimes(userChoice) {
    for (let i = 0; i < 10; i++) {
        console.log(`${i + 1}: ${userChoice}`)
    }
}

function main() {
    showWelcomeMessage()

    let continueProgram = true

    while (continueProgram) {
        const userChoice = getUserChoice()
        printTenTimes(userChoice)

        continueProgram = shouldContinue()
    }
}

main()

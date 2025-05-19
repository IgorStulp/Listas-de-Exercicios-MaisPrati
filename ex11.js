// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()
const {shouldContinue} = require('./askToContinue.js')

function getValidNumber(message) {
    while (true) {
        const input = prompt(message)
        const number = parseFloat(input)

        if (!isNaN(number)) {
            return number
        }
        console.log('Digite um número válido.')
    }
}

function getUserNumbers() {
    let userNumbers = []
    for (let i = 0; i < 5; i++) {
        const number = getValidNumber(`Digite o ${i + 1}º número: `)
        userNumbers.push(number)
    }
    return userNumbers
}

function sumNumbers(userNumbers) {
    const result = userNumbers.reduce((acc, cur) => acc + cur)
    return result
}

function main() {
    let continueProgram = true

    while (continueProgram) {
        const userNumbers = getUserNumbers()
        const sum = sumNumbers(userNumbers)

        console.log(`Soma dos números: ${userNumbers.join(' + ')} = ${sum}`)

        continueProgram = shouldContinue()
    }
}

main()

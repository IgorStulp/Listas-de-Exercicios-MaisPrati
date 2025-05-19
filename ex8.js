// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()
const {shouldContinue} = require('./askToContinue.js')

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

function getFirstNumber() {
    const firstNumber = getValidNumber('Digite o primeiro valor: ')
    return firstNumber
}

function getSecondNumber(firstNumber) {
    while (true) {
        const secondNumber = getValidNumber('Digite o segundo valor: ')
        if (secondNumber !== firstNumber) {
            return secondNumber
        }
        console.log('O segundo número não pode ser igual ao primeiro. Por favor, digite outro número.')
    }
}

function getSortedNumbers(firstNumber, secondNumber) {
    const sortedNumbers = [firstNumber, secondNumber].sort((a, b) => a - b)
    return {smallerNumber: sortedNumbers[0], biggerNumber: sortedNumbers[1]}
}

function main() {
    let continueProgram = true

    while (continueProgram) {
        const firstNumber = getFirstNumber()
        const secondNumber = getSecondNumber(firstNumber)
        const {smallerNumber, biggerNumber} = getSortedNumbers(firstNumber, secondNumber)

        console.log(`Valores em ordem crescente: ${smallerNumber}, ${biggerNumber}`)

        continueProgram = shouldContinue()
    }
}

main()

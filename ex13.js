// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()
const {shouldContinue} = require('./askToContinue.js')

function showWelcomeMessage() {
    console.log('Bem-vindo!')
    console.log('Digite números decimais para obter a média aritmética, digite 0 para parar.')
}

function getValidNumber(message) {
    while (true) {
        const input = prompt(message).replace(',', '.')
        const number = parseFloat(input)

        if (!isNaN(number)) {
            return number
        }
        console.log('Por favor, digite um número decimal válido.')
    }
}

function getUserInput() {
    let arrNumbers = []
    while (true) {
        const numbers = getValidNumber('Digite um número decimal: ')
        if (numbers === 0) {
            break
        }
        arrNumbers.push(numbers)
    }
    return arrNumbers
}

function calculateAverage(arrNumbers) {
    const avg = arrNumbers.reduce((acc, cur) => acc + cur) / arrNumbers.length
    return avg
}

function main() {
    showWelcomeMessage()

    let continueProgram = true
    while (continueProgram) {
        const userNumbers = getUserInput()

        if (userNumbers.length === 0) {
            console.log('Nenhum número foi inserido. Não é possível calcular a média.')
        } else {
            const avgNumbers = calculateAverage(userNumbers)
            const formattedAvg = avgNumbers.toFixed(2).replace('.', ',')
            console.log(`A média dos números: ${userNumbers.join(', ' + '')} = ${formattedAvg}`)
        }
        continueProgram = shouldContinue()
    }
}

main()

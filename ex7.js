// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

//daqui até o 15

const prompt = require('prompt-sync')()
const {shouldContinue} = require('./askToContinue.js')

function showWelcomeMessage() {
    console.log('---'.repeat(32))
    console.log('Bem-vindo a loja +PraTi, cada maçã custa R$0,30, comprando 12 ou mais, cada maça sai por R$0,25.')
    console.log('---'.repeat(32))
}

function getValidNumber(message) {
    while (true) {
        const input = prompt(message)
        const number = Number(input)

        if (!isNaN(number) && number > 0 && Number.isInteger(number)) {
            return number
        }
        console.log('Por favor, digite um valor válido.')
    }
}

function getAppleQuantity() {
    const appleQuantity = getValidNumber('Quantas maçãs deseja comprar? ')
    return appleQuantity
}

function calculateTotalCost(appleQuantity) {
    const isOnSale = appleQuantity >= 12
    const pricePerApple = isOnSale ? 0.25 : 0.3
    const total = appleQuantity * pricePerApple

    return {total, isOnSale}
}

function printResult(appleQuantity, total, isOnSale) {
    const promoText = isOnSale ? 'COM PROMOÇÃO' : 'SEM PROMOÇÃO'
    return console.log(`Você comprou ${appleQuantity} maçãs, e o valor total ${promoText} foi de R$${total.toFixed(2)}`)
}

function main() {
    showWelcomeMessage()

    let continueProgram = true

    while (continueProgram) {
        const appleQuantity = getAppleQuantity()
        const {total, isOnSale} = calculateTotalCost(appleQuantity)
        printResult(appleQuantity, total, isOnSale)

        continueProgram = shouldContinue()
    }
}

main()

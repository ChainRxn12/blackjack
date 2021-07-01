let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let cardsEl = document.getElementById('cards-el')
let sumEl = document.getElementById('sum-el')


function startGame() {
    cardsEl.textContent += firstCard + " , " + secondCard
    sumEl.textContent += " " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    } else {
        message = "BUST!" 
        isAlive = false
    }
    messageEl.textContent = message
}





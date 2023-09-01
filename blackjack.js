let card = []
let total = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let next_round = document.getElementById("next-round")
let cards = document.getElementById("cards") 
let totals = document.getElementById("total")
let player = {
    name: "kashi",
    chips : 500,
}

// I am creating the player data here.
let playerData = document.getElementById("player-data")
playerData.textContent =player.name + ": $" + player.chips


function getRandomCard(){
    let number = Math.floor( Math.random()*13 ) + 1;
    if (number > 10){
        return 10
    } else if (number === 1){
        return 11
    } else {
        return number 
    } 
}

function startGame (){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    card = [firstCard, secondCard]
    total = firstCard + secondCard 
  
    renderGame()
}

function renderGame(){
    if (total <= 20 ){
        message ="Do you want to draw another card? "
       
    }else if (total === 21 ){
        message ="Yay!, you've got BlackJack!"
        hasBlackJack = true
    }else{
        message ="You're out of the game."
        isAlive = false
    }

    next_round.textContent = message
    cards.textContent = "Cards: "
    for (let i=0; i<card.length; i++){
        cards.textContent += card[i]+" "
    }
    totals.textContent = "Sum: " + total 
   
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        total += newCard
        card.push(newCard)
        renderGame()
    }
    //cards.textContent = "Cards: " + firstCard + " -- " + secondCard + " -- " + card
}

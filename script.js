var Try = 0
var chance = 5
var answer = Math.floor(Math.random() * 30) + 1
var emoji = document.getElementById("emoji")
var info = document.getElementById("info")
var subinfo = document.getElementById("sub-info")
var chanceinfo = document.getElementById("chance-info")
var guessbtn = document.getElementById("guess-btn")
var guess = document.getElementById("guess-form")
            

function GUESS(){
    var user_guess = guess.value
    if (user_guess == answer || chance > 1 || Try < 4) {
        if (user_guess < 1 || user_guess > 30){
            chance--
            Try++
            emoji.textContent = "🥴"
            info.textContent = "Oh no!"
            subinfo.textContent = "Please enter number from 1 to 30!"
            chanceinfo.textContent = "You just lost 1 chance"
        }
        else if (user_guess < answer && user_guess >= 1 && user_guess <= 30) {
            chance--
            Try++
            emoji.textContent = "👎"
            info.textContent = "Wrong Answer!"
            subinfo.textContent = "You guessed too low"
            chanceinfo.textContent = "you have " + chance + " chances to guess"
        }
        else if (user_guess > answer && user_guess >= 0 && user_guess <= 30) {
            chance--
            Try++
            emoji.textContent = "👎"
            info.textContent = "Wrong Answer!"
            subinfo.textContent = "You guessed too high"
            chanceinfo.textContent = "you have " + chance + " chances to guess"
        }
        else if (user_guess == answer) {
            chance--
            Try++
            guess.style.display = "none"
            guessbtn.style.display = "none"
            emoji.textContent = "🥳"
            info.textContent = "Congratulations!"
            subinfo.textContent = "You did it in " + Try + " try"
            chanceinfo.textContent = "Click reset button to play again"
        }
    }
    else {
        guess.style.display = "none"
        guessbtn.style.display = "none"
        emoji.textContent = "☹"
        info.textContent = "Sorry"
        subinfo.textContent = "The number is " + answer
        chanceinfo.textContent = "Better luck next time"
    }
}

function Restart() {
    Try = 0
    chance = 5
    answer = Math.floor(Math.random() * 30) + 1
    guess.style.display = "block"
    guessbtn.style.display = "block"
    document.getElementById("emoji").textContent = "🦄"
    document.getElementById("info").textContent = "Hello!"
    document.getElementById("sub-info").textContent = "Guess number from 1 to 30"
    document.getElementById("chance-info").textContent = "you have " + chance + " chances to guess"
}
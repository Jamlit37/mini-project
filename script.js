// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// * As a user, I expect the computer to choose R, P, or S in return.

//* As a user, I want the option to play again whether I win or lose.
var playagain = confirm ("Would you like to play again?")
if (playagain===true){
}else { alert ("See you soon!");
};    

//* As a user, I want to see my total wins, ties, and losses after each round.


// this is the user prompt part and randomPick function
let customerInput = prompt(`Please enter "Rock", "Paper" or "Scissors
"`)
let array = ['Rock', 'Paper', 'Scissors']

let i = Math.floor(Math.random() * array.length)

let randomPick = array[i]
console.log(array[i])

var playagain = confirm ("Would you like to play again?")
if (playagain===true){
}else { alert ("See you soon!");
};    

//* As a user, I want to see my total wins, ties, and losses after each round.


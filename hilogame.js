function hilogame () {
// var randomNumber = Math.floor(Math.random()*100) + 1;
var yourName = prompt("Welcome!! what is your name?");
alert("Welcome " + yourName + " lets play!!!");
// var randomNumber = 50;
var randomNumber = Math.floor(Math.random()*100) + 1;
var userGuess = prompt ("Guess for a number between 1 and 100");
while (userGuess.toUpperCase() != userGuess) {userGuess = prompt ("Your guess has to be a number");};
// var userGuess = prompt ("Guess for a number between 1 and 100");
var counter = 6;

  do {
  counter--
  if (userGuess > randomNumber) {userGuess = prompt("Your guess is too high\n" + counter + " tries remain");};
  if (userGuess < randomNumber) {userGuess = prompt("Your guess is too low\n" + counter + " tries remain");};
  if (parseInt(userGuess) === randomNumber) {alert("You win " + yourName);};
  } while (userGuess != randomNumber && counter > 0);
  if (parseInt(userGuess) != randomNumber && counter === 0) {
    alert("You ran out of tries!! You suck " + yourName);
  };
};

hilogame ();

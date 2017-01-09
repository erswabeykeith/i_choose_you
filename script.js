console.log("js sourced");

// var userChoice = prompt("Do you choose Bulbasaur, Charmander or Squirtle?"); //prompt the user to enter rock, paper, or scissors
// console.log("User choice is: " + userChoice);
 var pokemon = function(){
   console.log("in userChoice function");
   var userChoice = document.getElementById('pokemonChosen').value;
   console.log("User choice is: " + userChoice);
   document.getElementById('displayPokemonChosen').innerHTML = '<p>' + "You chose " + userChoice + "!" + '</p>';


var rivalChoice = Math.random(); //Have the computer generate a random number
// console.log("ComputerChoice is", rivalChoice); //We got our number, but it's just a number right now. We need it to be rock, paper, or scissors

if(rivalChoice <= 0.33){
  rivalChoice = "Bulbasaur";
} else if(rivalChoice >= 0.34 && rivalChoice <= 0.66){
  rivalChoice = "Charmander";
} else {
  rivalChoice = "Squirtle";
} console.log("Rival Choice is: " + rivalChoice);
document.getElementById('displayRivalPokemon').innerHTML = '<p>' + "Your rival chose " + rivalChoice + "!" +'</p>';

var compare = function(choice1, choice2){
  if(choice1 === choice2){
    console.log("The battle is a draw!")
    return "The battle is a draw!"
  } else if(choice1 === "Bulbasaur"){
    if(choice2 === "Charmander"){
      console.log("Charmander is the winner!");
      document.getElementById('winner').innerHTML = '<p>' + "Charmander is the winner!" + '<p>';
      return "Charmander is the winner!"
    } else {
      console.log("Bulbasaur is the winner!");
      document.getElementById('winner').innerHTML = '<p>' + "Bulbasaur is the winner!" + '<p>';
      return "Bulbasaur is the winner!"
    }
  } else if(choice1 === "Charmander"){
    if(choice2 === "Bulbasaur"){
      console.log("Charmander is the winner!");
      document.getElementById('winner').innerHTML = '<p>' + "Charmander is the winner!" + '<p>';
      return "Charmander is the winner!"
    } else {
      console.log("Squirtle is the winner!");
      document.getElementById('winner').innerHTML = '<p>' + "Squirtle is the winner!" + '<p>';
      return "Squirtle is the winner!"
    }
  } else if(choice1 === "Squirtle"){
    if(choice2 === "Charmander"){
      console.log("Squirtle is the winner!");
      document.getElementById('winner').innerHTML = '<p>' + "Squirtle is the winner!" + '<p>';
      return "Squirtle is the winner"
    } else {
      console.log("Bulbasaur is the winner!");
      document.getElementById('winner').innerHTML = '<p>' + "Bulbasaur is the winner!" + '<p>';
      return "Bulbasaur is the winner!"
    }
  }
};
compare(userChoice, rivalChoice);
};

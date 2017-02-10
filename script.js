$(document).ready(function(){
  console.log("js sourced");
  var starterPokemon = [];

  //Make an object constructor for our Pokemon!
  function Pokemon(name, type, attack){
    this.name = name;
    this.type = type;
    this.attack = attack;
  };

  //Use the function to create some Pokemon objects super easily!
  var bulbasaur = new Pokemon("Bulbasaur", "grass", "Vine Whip");
  var charmander = new Pokemon("Charmander", "fire", "Ember");
  var squirtle = new Pokemon("Squirtle", "water", "Water Gun");

  //Next, get all the pokemon into an array of objects
  starterPokemon.push(bulbasaur);
  starterPokemon.push(charmander);
  starterPokemon.push(squirtle);

  starterPokemon = [bulbasaur, charmander, squirtle]
  console.log(starterPokemon);

  //displays pokemon that you chose when called

  var userChoice
  function appendBulbasaur() {
    $("#displayPokemonChosen").text("You chose the " + starterPokemon[0].type + " type Pokemon, " + starterPokemon[0].name + "!")
  }

  function appendCharmander() {
    $("#displayPokemonChosen").text("You chose the " + starterPokemon[1].type + " type Pokemon, " + starterPokemon[1].name + "!")
  }

  function appendSquirtle() {
    $("#displayPokemonChosen").text("You chose the " + starterPokemon[2].type + " type Pokemon, " + starterPokemon[2].name + "!")
  }

  //Decides which button the user clicked on
  $('#choseBulbasaur').on('click', function(){
    var userChoice = $(this).parent().attr("id");
    if(userChoice == "Bulbasaur"){
      appendBulbasaur();
      console.log("You chose: " + userChoice);
    };
  });

  $('#choseCharmander').on('click', function(){
    var userChoice = $(this).parent().attr("id");
    if(userChoice == "Charmander"){
      appendCharmander();
      console.log("You chose: " + userChoice);
    };
  });

  $('#choseSquirtle').on('click', function(){
    var userChoice = $(this).parent().attr("id");
    if(userChoice == "Squirtle"){
      appendSquirtle();
      console.log("You chose: " + userChoice);
    };
  });

  var rivalChoice
  function rivalChose(){
    rivalChoice = Math.random(); //Have the computer generate a random number
    console.log("Rival choice is", rivalChoice); //We got our number, but it's just a number right now. Let's make it a pokemon!
    if(rivalChoice <= 0.33){
      rivalChoice = "Bulbasaur";
    } else if(rivalChoice >= 0.34 && rivalChoice <= 0.66){
      rivalChoice = "Charmander";
    } else {
      rivalChoice = "Squirtle";
    } $("#displayRivalPokemon").text("Your rival chose " + rivalChoice + "!")
    console.log("Rival Choice is: " + rivalChoice);
  }//end rivalChose
  $('.arena').on('click', function(){
    console.log("arena clicked");
    return rivalChose();
  });
  console.log(userChoice);
  console.log(rivalChoice);
  // return rivalChose(); //makes rivalChoice appear on DOM
  // var compare = function(choice1, choice2){
  //   if(choice1 === choice2){
  //     console.log("The battle is a draw!")
  //     return "The battle is a draw!"
  //   } else if(choice1 === "Bulbasaur"){
  //     if(choice2 === "Charmander"){
  //       console.log("Charmander is the winner!");
  //       return "Charmander is the winner!"
  //     } else {
  //       console.log("Bulbasaur is the winner!");
  //       return "Bulbasaur is the winner!"
  //     }
  //   } else if(choice1 === "Charmander"){
  //     if(choice2 === "Bulbasaur"){
  //       console.log("Charmander is the winner!");
  //       return "Charmander is the winner!"
  //     } else {
  //       console.log("Squirtle is the winner!");
  //       return "Squirtle is the winner!"
  //     }
  //   } else if(choice1 === "Squirtle"){
  //     if(choice2 === "Charmander"){
  //       console.log("Squirtle is the winner!");
  //       return "Squirtle is the winner"
  //     } else {
  //       console.log("Bulbasaur is the winner!");
  //       return "Bulbasaur is the winner!"
  //     }
  //   }
  // };
  // compare(userChoice, rivalChoice);
  // };
}); //end document ready

//  WHAT IS JAVASCRIPT?  - NOTES
//  Programming of the web broser

//  Example
//  alert('Hello World');

//  Exercise 1
//  let favouriteFood = 'Oran Berry';
//  document.write(favouriteFood);
//  favouriteFood = 'Pokeblock';
//  document.write(favouriteFood);
//  favouriteFood = 'Curry';
//  document.write(favouriteFood); 



//  JAVASCRIPTS BASICS PART 1 - NOTES
//  STRINGS -  a terms used when talking about text in programming language,
//  always wrapped in single or double quotes
//  e.g.
//  let escapedText = "He said: \"Yes!\", that's for sure.";
//  let escapedText = 'He said: "Yes!", that\'s for sure.';

//  TEMPLATE LITERALS
//  let name = 'John';
//  let welcomeMessage1 = "Hello, I'm";
//  let welcomeMessage2 = 'and I say to you: "Hello!"';
//  console.log(welcomeMessage1 + ' ' + name + ' ' + welcomeMessage2);

//  OBJECTS
//  let car = {
//      color = 'red',
//      milage = 10
//  }

//  COMPLEX DATA
//  let carColor = 'red';
//  let car = {
//      color: 'carColor',
//      mileage: 10
//      seats: {
//          frontSeats: 2,
//          backSeats: 3
//      }
//  };

//  ARRAY OF STRINGS
//  let foodArray = ['pizza', 'tuna', 'apple'];
//
//  ARRAY OF OBJECTS
//  let carArray = [
//      { type: 'Bus', wheels: 4, color: 'blue'},
//      { type: 'Sport', wheels: 4, color: 'red'}
//  ];
//
//  ARRAY OF ARRAYS
//  let myCalculatorNumbers = [
//      [1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]
//  ];



//  JAVASCRIPTS BASICS PART 2 - NOTES
//  IF-ELSE STATEMENTS
//  if (condition 1) {
//      action if condition 1 
//      is true
//  } else if (condition 2) {
//      action if condition 2 
//      is true
//  } else {
//      action if none are true
//  } 

//  CONDITIONS
//  let isRed = true;
//  if (isRed) {
//      console.log('it is red!');
//  }
//
//  console.log(1 === 2);   // reads as "is 1 equal to 2?"
//  console.log(1 !== 2);   // reads as "is 1 not equal to 2?"
//  console.log(1 < 2);     // reads as "is 1 less than 2?"
//  console.log(1 > 2);     // reads as "is 1 greater than 2?"
//  console.log(1 <= 2);    // reads as "is 1 less than or equal to 2?"
//  console.log(1 >= 2);    // reads as "is 1 greater than or equal to 2?"

//  AND (&&) and (||) OR OPERATOR
//  if ( (1 < 2 && 3 > 2) || 2 === 2 ) {
//      console.log('yes!');
//  }
//  1 is less than 2 AND 3 is greater than 2
//  These are both true so the first condition is true
//  Then, if either the first condition (1<2 && 3>2) OR the second condition (2 === 2) is true, it will move forward.
//  Console will log 'yes!'

//  CONDITIONAL / TERNARY OPERATOR
//  Condition ? Then : Else
//  let age = 20;
//  let result = age > 19 ? 'Is not a teen' : 'Is a teen';
//  console.log(result); // Is not a teen
//
//  let age = 20;
//  let result;
//  if (age > 19) {
//    result = 'Is not a teen';
//  } else {
//    result = 'Is a teen';
//  }

//  Conditionals are decision trees. If THIS, then THAT; otherwise THIS
//  Start with IF, put the conditions. Code will be edecuted if the conditons are met
//  Use ELSE to dictate what hapens when the conditonal isnt met
//  SWITCH can replace miltiple IF checks by giving more descriptive wat to compare vales
//  Conditionals can be comparisons using mathematical operators like +, ===, and more 
//  All conditionals are treated as true or false values in JavaScript
//  Chain conditionals using && (AND) and || (OR)
//  Shorthand CONDITION ? THEN : ELSE

//  LOOPS - Used to do something multiple times without having to write multiple times
//  In JavaScript, use FOR loop 
//
//  for (let i = 1; i <=100; i++) {
//      console.log(i)
//  }
//  Starting point (let i = 1)  starting value is 1
//  The condition (i <= 100)    if value i is less than or equal to 100, 
//  The action (i++)            exectute action value i + 1
//  Console.log(i);             logs in the beginning i value in console
//
//
//  Loop to take away 2 years from age
//  let ages = [20, 30, 25, 22, 31]
//  for (let i = 0; i < ages.length; i++) {
//      console.log(ages[i] - 2);    
//  }
//  Set of ages assigned to variable (ages)
//  FOR loop
//  Starting value i = 0, if i is less than ages.length (5 values), i + 1
//  consile logs (ages[0] = looks for 1st value in the list of ages = (20) - 2)


let pokemonList = [
    {
        name: 'Bulbasaur',
        height: 0.7,
        type: ['Grass','Poison']   
    },

    {
        name: 'Ivysaur',
        height: 1,
        type: ['Grass','Poison']   
    },

    {
        name: 'Venusaur',
        height: 2,
        type: ['Grass','Poison']   
    }
]

//  console.log(pokemonList);
//  FOR loop for pokemon list
for (let i = 0; i < pokemonList.length; i++) {
    //  set variable for pokemon list     
    let pokemon = pokemonList[i]

    //  conditional for height = if taller than 1 THIS else THAT
    //  document write pokemon name and height
    if (pokemon.height > 1) {
        document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + ' - Wow, that\'s big!' + "<br>" + "<br>")   
    } else {
        document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + "<br>" + "<br>")    
    }
}
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


//  FOR loop for pokemon list
//  for (let i = 0; i < pokemonList.length; i++) {   
//     let pokemon = pokemonList[i]

//     if (pokemon.height > 1) {
//         document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + ' - Wow, that\'s big!' + "<br>" + "<br>")   
//     } else {
//         document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + "<br>" + "<br>")    
//     }
//  }

//  forEach() external function
function printPokemonInfo (pokemon) {
    if (pokemon.height > 1) {
        document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + ' - Wow, that\'s big!' + "<br>" + "<br>");
    } else {
        document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + "<br>" + "<br>")
    }
}
pokemonList.forEach(printPokemonInfo)
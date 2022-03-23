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
    if (pokemon.height > 1) {
        document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + ' - Wow, that\'s big!' + "<br>" + "<br>")   
    } else {
        document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + "<br>" + "<br>")    
    }
}
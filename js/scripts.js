//  IIFE
let pokemonRepository = ( function () {

    //  Pokemon List
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
    ];

    //  Assign -getAll- function to shows all pokemon
    function getAll() {
        return pokemonList;
    }

    //  Assign -add- function to add pokemon to end of array
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    };
})();

//  forEach() external function
pokemonRepository.getAll().forEach( function (pokemon) {
    if (pokemon.height > 1) {
        document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + ' - Wow, that\'s big!' + "<br>" + "<br>");
    } else {
        document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + "<br>" + "<br>")
    }
}); 
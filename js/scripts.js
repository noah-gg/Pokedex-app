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

    function addListItem(pokemon) {
        // Setting a list of variables
        let pokedexList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');

        // Button text and styling
        button.innerText = pokemon.name ;
        button.classList.add('button-style');

        // Append list and button
        listPokemon.appendChild(button);
        pokedexList.appendChild(listPokemon);

        // Event listener - click on button
        button.addEventListener('click', function(event){
            showDetails(pokemon);
        });
    }

    // Show detials function
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})();

//  Displays all the pokemon
pokemonRepository.getAll().forEach( function (pokemon) {
    pokemonRepository.addListItem(pokemon)
}); 


//  forEach() external function
// pokemonRepository.getAll().forEach( function (pokemon) {
//     if (pokemon.height > 1) {
//         document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + ' - Wow, that\'s big!' + "<br>" + "<br>");
//     } else {
//         document.write(pokemon.name + "\n" + '(height:' + "\n" + pokemon.height + ')' + "<br>" + "<br>")
//     }
// }); 


//  IIFE
let pokemonRepository = ( function () {

    //  Pokemon List - empty array (pokemon added here)
    let pokemonList = [];
    //  Pokemon API URL - data source
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    //  Assign -getAll- function to shows all pokemon
    function getAll() {
        return pokemonList;
    }

    //  Assign -add- function to add pokemon to end of array
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    //  Shows loading message by removing 'hidden'
    function showLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-pokedex')
        loadingMessage.classList.remove('hidden')
    }

    //  Hides loading message by adding "hidden"
    function hideLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-pokedex')
        loadingMessage.classList.add('hidden')
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

        // Event listener - click on button - shows pokemon details
        button.addEventListener('click', function(event){
            showDetails(pokemon);
        });
    }

    // Show detials function
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function (){
            console.log(pokemon);
        });
    }

    // Load List function
    function loadList () {
        showLoadingMessage();

        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add (pokemon);
                hideLoadingMessage();
            });
        }).catch(function (e) {
            console.log(e);
            hideLoadingMessage();
        });
    }

    // Load Details function
    function loadDetails(item) {
        showLoadingMessage();

        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            hideLoadingMessage();
        }).catch(function (e) {
            console.error(e);
            hideLoadingMessage();
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

//  Show all 151 pokemon using API
pokemonRepository.loadList().then(function() {
    //  Displays all the pokemon
    pokemonRepository.getAll().forEach( function (pokemon) {
        pokemonRepository.addListItem(pokemon)
    });     
});
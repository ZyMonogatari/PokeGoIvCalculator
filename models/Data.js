const Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
var result;
var getPokemonData = function(Pokemon)
{
	Pokemon.Name = Pokemon.Name.toLowerCase();
	P.getPokemonByName(Pokemon.Name)
	.then(function(response) {
		result =  response;	
    });
    return result;
}

	
exports.getPokemonData = getPokemonData;
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));

var port = (process.env.PORT || 5000));
var Calculator = require("./models/Calculator");
var Data = require("./models/Data")

app.get('/', function(req, res){
		res.render('home');
});

app.post('/calculate', function(req, res){
	var pokemon = {};
	pokemon.Name = req.body.Name;
	pokemon.Cp = req.body.Cp;
	pokemon.Hp = req.body.Hp;
	pokemon.Dust = req.body.Dust;
	var Ivs = Calculator.getIvs(pokemon);
	var pokemonData = Data.getPokemonData(pokemon);
	res.render('calculated', {
		pokemon: pokemon, 
		Ivs : Ivs,
		pokemonData : pokemonData
	});
});

app.listen(port);

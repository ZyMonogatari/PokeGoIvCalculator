'use strict';
const ivCalculator = require('pokemon-go-iv-calculator');

var getIvs = function(Pokemon)
{
	var result = ivCalculator.evaluate(Pokemon.Name, Pokemon.Cp, Pokemon.Hp, Pokemon.Dust, null);
	return result;
}

exports.getIvs = getIvs;
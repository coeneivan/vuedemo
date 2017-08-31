const Bestelling = require("../models/bestellingmodel"),
validator = require('validator');

exports.bestellingPlaatsen = function(req,res){
    req.checkBody('broodjeId', '')
}
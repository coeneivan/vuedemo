const Bestelling = require("../models/bestellingmodel"),
Broodjes = require("../models/broodjesmodel"),
validator = require('validator');

exports.bestellingPlaatsen = function(req,res){
    req.checkBody('broodjeId', 'Not a valid broodjeId').notEmpty();
    req.checkHeaders('Authorization', 'No Authorization').notEmpty();
    let err = req.validationErrors() ||[];
    if(err.length >0 ) return res.status(400).send({message: err});

    Broodjes.findById(req.body.broodjeId, function(err, resp){
        if(err) return res.status(400).send({message: err});
        else {
            var bestelling  = new Bestelling({
                user: req.get('Authorization'),
                broodjeName: resp.name,
                price: resp.price,
                date: Date.now()
            });
            bestelling.save(function(err, respp){
                if(err) res.status(400).send({message: err})
                else res.status(200).send({message: 'Order placed'});
            });
        }
    })
}

exports.getBestellingen  = function(req,res){
    Bestelling.find({},function(err,resp){
        if(err) res.status(500).send({message:"Error: " + err});
        else  res.status(200).send(resp);
    });
}

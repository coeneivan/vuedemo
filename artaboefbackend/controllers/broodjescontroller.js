const Broodjes = require('../models/broodjesmodel');

exports.getBroodjes = function(req,res){
    Broodjes.find({},function(err,resp){
        if(err) res.status(500).send({message:"Error: " + err});
        else  res.status(200).send(resp);
    });
}
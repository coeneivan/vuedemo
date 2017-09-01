const 
BestellingController = require('../controllers/bestellingcontroller.js'),
BroodjesController = require('../controllers/broodjescontroller')

module.exports = function(app){
    //Broodjes
    app.get('/api/broodjes', BroodjesController.getBroodjes);
    app.get('/api/fillbroodjes', BroodjesController.fillBroodjes);
    //Bestellingen
    app.get('/api/bestellingen', BestellingController.getBestellingen);
    app.post('/api/bestelling', BestellingController.bestellingPlaatsen);
}
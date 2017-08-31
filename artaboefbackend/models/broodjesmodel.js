const mongoose = require('mongoose'),
schema = mongoose.Schema;

const BroodjesSchema = new schema({
    naam:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Broodjes', BroodjesSchema);
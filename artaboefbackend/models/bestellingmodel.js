const mongoose = require('mongoose'),
schema = mongoose.Schema;

const BestellingSchema = new schema({
    user:{
        type: String,
        required: true
    },
    broodje:{
        type: String,
        required: true
    },
    datum:{
        type: Date
    }
});

module.exports = mongoose.model('Bestelling', BestellingSchema);
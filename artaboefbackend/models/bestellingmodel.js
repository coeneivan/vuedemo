const mongoose = require('mongoose'),
schema = mongoose.Schema;
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

const BestellingSchema = new schema({
    user:{
        type: String,
        required: true
    },
    broodjeName:{
        type: String,
        required: true
    },
    price: {
        type: SchemaTypes.Double,
        required: true
    },
    datum:{
        type: Date
    }
});

module.exports = mongoose.model('Bestelling', BestellingSchema);
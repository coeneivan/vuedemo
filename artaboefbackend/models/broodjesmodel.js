const mongoose = require('mongoose'),
schema = mongoose.Schema;
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;

const BroodjesSchema = new schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: SchemaTypes.Double,
        required: true
    }
});

module.exports = mongoose.model('Broodjes', BroodjesSchema);
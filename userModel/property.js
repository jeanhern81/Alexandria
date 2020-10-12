const stringify = require('json-stringify-safe');
const mongoose = require('mongoose');


const { Schema } = mongoose;
const PropertySchema = new Schema({
    userId: String,
    address: String,
    city: String,
    state: { type: String, min: 2, max: 2 },
    zip: Number,
    mortgage: Number,
    purchasePrice: Number,
    rent: Number
});

mongoose.model('Property', PropertySchema);

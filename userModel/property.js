const stringify = require('json-stringify-safe');
const mongoose = require('mongoose');


const { Schema } = mongoose;
const PropertySchema = new Schema({
    user_id: String,
    address: String,
    city: String,
    state: { type: String, min: 2, max: 2 },
    zip: Number,
    expenses: Number,
    purchasePrice: Number,
    rent: Number
});

mongoose.model('Property', PropertySchema);

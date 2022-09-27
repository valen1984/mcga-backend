const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProvidersSchemas = new Schema({
    _id:{
        type: Number
    },
    name:{
        type: String,
        required: true,
        maxlenght: 30
    },
    email:{
        type: String,
        maxlenght: 50,
    },
    adress:{
        type: String,
        maxlenght: 50,
    },
    telephone:{
        type: String,
        required: true,
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Providers", ProvidersSchemas);
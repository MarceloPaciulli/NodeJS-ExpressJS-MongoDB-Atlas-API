const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Users', userSchema); //collection named 'users' in MongoDB Atlas
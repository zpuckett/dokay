const { Schema } = require('mongoose');

const songSchema = new Schema ({
    artist: 
        {
        type: String,
        required: true
        },
    title:
        {
        type: String,
        required: true
        },
    songId:
        {
        type: String,
        required: true
        }
})

module.exports = songSchema;
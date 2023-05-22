// otetaan moduuli käyttöön
const mongoose = require("mongoose")

// Määritellään skeema
const trackSchema = mongoose.Schema({         
        name: String,
        artist: String,
        album: String,
        year: Number
})
// luodaan malli
module.exports = mongoose.model('Tracks', trackSchema)
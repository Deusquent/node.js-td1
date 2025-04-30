const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    titre : {
        type : String,
        required : [true, "le titre est requis"]
    },
    auteur : {
        type: String, 
        required : [true, "l'auteur est requis"]
    },
    date_de_publication : {
        type: Date,
        required : [true, "la date de publication est requise"]
    },
    genre: {
        type : String,
        required : [true , "le genre est requis"]
    }
})

const userModel = mongoose.model("livres" , userSchema)

module.exports = userModel

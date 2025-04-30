const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
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

const bookModel = mongoose.model("books" , bookSchema)

module.exports = bookModel

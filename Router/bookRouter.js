
const bookRouter = require("express").Router();
const bookModel = require("../models/bookModel")

bookRouter.post("/books", async(req, res) => {
    try {
        const book = new bookModel({
            titre: req.body.titre,
            auteur: req.body.auteur,
            date_de_publication: req.body.date_de_publication,
            genre: req.body.genre,

        })
       await book.save()
        res.json({ message: "book bien créé", book: book })
    } catch (error) {
        console.log(error);
        res.json(error)
    }

})

bookRouter.get("/books" , async(req,res)=>{
    try {
        const books = await bookModel.find()
        res.json(books)
        await bookModel.save()
    } catch (error) {
        console.log(error);
        res.json(error)
    }

    bookRouter.get("/books/:titre" , async(req,res)=>{
        try {
            const book = await bookModel.findBytitre(req.params.titre)
            res.json(book)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
    bookRouter.get("/books/:id" , async(req,res)=>{
        try {
            const book = await bookModel.findOneById(req.params.id)
            res.json(book)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
    bookRouter.put("/books/:id" , async(req,res)=>{
        try {
            const book = await bookModel.findByIdAndUpdate(req.params.id , req.body , {new : true})
            res.json(book)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })

    bookRouter.delete("/books/:id" , async(req,res)=>{
        try {
            const book = await bookModel.deleteOne(req.params.id)
            res.json(book)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
})


module.exports = bookRouter
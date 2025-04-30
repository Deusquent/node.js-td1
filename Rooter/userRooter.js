
const userRouter = require("express").Router();
const userModel = require("../models/userModel")

userRouter.post("/books", async(req, res) => {
    try {
        const livre = new userModel({
            titre: req.body.titre,
            auteur: req.body.auteur,
            date_de_publication: req.body.date_de_publication,
            genre: req.body.genre,

        })
       await livre.save()
        res.json({ message: "livre bien créé", livre: livre })
    } catch (error) {
        console.log(error);
        res.json(error)
    }

})

userRouter.get("/books" , async(req,res)=>{
    try {
        const books = await userModel.find()
        res.json(books)
        await userModel.save()
    } catch (error) {
        console.log(error);
        res.json(error)
    }

    userRouter.get("/books/:titre" , async(req,res)=>{
        try {
            const livre = await userModel.findBytitre(req.params.titre)
            res.json(livre)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
    userRouter.get("/books/:id" , async(req,res)=>{
        try {
            const livre = await userModel.findOneById(req.params.id)
            res.json(livre)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
    userRouter.update("/books/:id" , async(req,res)=>{
        try {
            const livre = await userModel.findByIdAndUpdate(req.params.id , req.body , {new : true})
            res.json(livre)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })

    userRouter.delete("/books/:id" , async(req,res)=>{
        try {
            const livre = await userModel.deleteOne(req.params.id)
            res.json(livre)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
})


module.exports = userRouter
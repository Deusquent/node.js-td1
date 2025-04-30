
const userRouter = require("express").Router();
const userModel = require("../models/userModel")

userRouter.post("/livres", async(req, res) => {
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

userRouter.get("/livres" , async(req,res)=>{
    try {
        const livres = await userModel.find()
        res.json(livres)
        await userModel.save()
    } catch (error) {
        console.log(error);
        res.json(error)
    }

    userRouter.get("/livres/:titre" , async(req,res)=>{
        try {
            const livre = await userModel.findBytitre(req.params.titre)
            res.json(livre)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
    userRouter.get("/livres/:id" , async(req,res)=>{
        try {
            const livre = await userModel.findOneById(req.params.id)
            res.json(livre)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })
    userRouter.get("/livres/:id" , async(req,res)=>{
        try {
            const livre = await userModel.updateOne(req.params.id)
            res.json(livre)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    })

    userRouter.get("/livres/:id" , async(req,res)=>{
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
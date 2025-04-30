const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./Router/bookRouter');
const app = express()
const port =3000

app.use(express.json())
app.use(userRouter)

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`connecté au server sur le port ${port}`);
    }
})
app.get("/", (req,res)=>{
    res.json({message : "Bonjour, Monde!"})
})

mongoose.connect("mongodb://localhost:27017/librairie")
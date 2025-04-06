const app = require('./app')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const connectDB = require('./config/db')

dotenv.config()

const PORT = process.env.PORT || 3000

// connexion a la bd 
connectDB().then(()=>{

    app.listen(PORT , ()=>{
        console.log(`le serveur est lancé sur le port :  ${PORT}`)
    })

}).catch(error =>{
    console.error("Erreur de connexion à MongoDB :", error);
})

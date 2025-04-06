const mongoose = require('mongoose')

const EtudiantShema = mongoose.Schema({
    matricule :{
        type: String,
        required: true,
        unique : true
    },
    nom:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    telephone:{
        type:String,
        required:true

    },
    adresse:{
        type:String,
        required:true

    },
    // dateNaissance: Date,
    niveauEtude:{
        type:String,
        required:true

    },
    specialite:{
        type:String,
        required:true

    },
   
},
    {timestamps : true}
)

const etudiant = mongoose.model('etudiant' , EtudiantShema);
module.exports = etudiant
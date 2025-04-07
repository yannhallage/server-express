const Students = require('../models/students.model')

const CreatetStudents = async (req ,res) =>{
    try {
        const students = await Students.create(req.body)
        res.status(200).json({
            message : "Etudiant crée avec success ! ",
            students
        })
    }
    catch (err) {
        res.status(400).json({
            message : "Erreur lors de la creation de l'etudiant ! "
        })
    }
}

const GetStudents = async (req , res) =>{
    try {
        const students = await Students.find({})
        res.status(200).json({
            students
        })
    }
    catch(error) {
        res.status(400).json({
            message : "Erreur lors de la recuperation des etudiants ! "
        })
    }
}

const GetStudent = async (req , res) => {
    try {
        const { id } = req.params
        const student = await Students.findById(id)

        if(!student){
            return res.status(404).json({
                message : "Etudiant non trouvé ! "
            })
        }

        res.status(200).json({
            student
        })
    }
    catch (error){
        res.status(400).json({
            message : "Erreur lors de la recuperation de l'etudiant ! "
        })
    }
}

const UpdateStudent = async (req, res) =>{
    try {
        const { id } = req.params
        const student = await Students.findByIdAndUpdate(id, req.body, {new :true})
        if(!student){
            return res.status(404).json({
                message : "Etudiant non trouvé ! "
            })
        }
        res.status(200).json({
            message : "Etudiant mis a jour avec succes ! ",
            student
        })
    }
    catch(error){
        res.status(400).json({
            message : "Erreur lors de la mise a jour de l'etudiant ! "
        })
    }
}

const DeleteStudent = async (req , res) => {
    try {
        const { id } = req.params
        const student = await Students.findByIdAndDelete(id)

        if(!student){
            return res.status(404).json({
                message : "Etudiant non trouvé ! "
            })
        }

        res.status(200).json({
            message : "Etudiant supprimé avec succes ! "
        })
    }
    catch(error){
        res.status(400).json({
            message : "Erreur lors de la suppression de l'etudiant ! "
        })
    }
}



module.exports =  {
    CreatetStudents, 
    GetStudent,
    GetStudents,
    UpdateStudent,
    DeleteStudent
}
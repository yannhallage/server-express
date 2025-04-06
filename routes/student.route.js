const express = require('express')
const router = express.Router()
// utiliser le model crée 
const Student = require('../models/students.model')
const { CreatetStudents,
    GetStudent,
    GetStudents,
    UpdateStudent,
    DeleteStudent } = require('../controllers/students.controller')
// dans le cas de la creation de l'entité etudiant on a besoin des fonctionnalités 
// CRUD 

// Creation d'Etudiant
router.post('/', CreatetStudents)

// affichage des etudiants 
router.get('/', GetStudents)

// afficher un etudiant par son id 
router.get('/:id', GetStudent)

// effecteur une mise a jour sur une donnee precise 
router.put('/:id', UpdateStudent)

// effectuer un delete en fonction de l'id 
router.delete('/:id' , DeleteStudent)



module.exports = router;
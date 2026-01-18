import express from 'express'
import { getAllPeople, getPersonById, updatePersonById, deletePersonById } from '../controllers/PeopleController.js'

const router = express.Router()

router.get('/', getAllPeople)
router.get('/:id', getPersonById)
router.put('/:id', updatePersonById)
router.delete('/:id', deletePersonById)

export default router;
import express from 'express'
import { getAllPeople, createPerson } from '../controllers/PeopleController.js'

const router = express.Router()

router.get('/', getAllPeople)
router.post('/', createPerson)

export default router;
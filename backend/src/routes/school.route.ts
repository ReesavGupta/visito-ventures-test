import { Router } from 'express'
import {
  getAllSchools,
  createSchool,
  updateSchool,
  deleteSchool,
} from '../controllers/school.controller'

export const schoolRouter = Router()

// Route to get all schools
schoolRouter.get('/', getAllSchools)

//to get a specific id
// schoolRouter.get('/:id', getAllSchools)

//school with teacher list
// schoolRouter.get('/teacher/:id', getAllSchools)

// Route to create a school
schoolRouter.post('/create', createSchool)

// Route to update a school
schoolRouter.put('/update/:schoolId', updateSchool)

// Route to delete a school
schoolRouter.delete('/delete/:schoolId', deleteSchool)

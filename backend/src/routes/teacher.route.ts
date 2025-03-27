import { Router } from 'express'
import {
  getAllTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teacher.controller'
import { upload } from '../utils/multer'

export const teacherRouter = Router()

teacherRouter.get('/', getAllTeachers)

teacherRouter.post(
  '/create',
  (req, res, next) => {
    console.log(`before ...`)
    next()
  },
  upload.single('image'),
  (req, res, next) => {
    console.log('Middleware executed')
    next()
  },
  createTeacher
)

teacherRouter.put('/update/:teacherId', updateTeacher)

teacherRouter.delete('/delete/:teacherId', deleteTeacher)

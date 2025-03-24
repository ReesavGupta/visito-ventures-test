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

teacherRouter.post('/create', upload.single('image'), createTeacher)

teacherRouter.put('/update/:teacherId', updateTeacher)

teacherRouter.delete('/delete/:teacherId', deleteTeacher)

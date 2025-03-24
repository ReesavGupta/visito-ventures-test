import { Router } from 'express'
import { schoolRouter } from './school.route'
import { teacherRouter } from './teacher.route'

export const indexRouter = Router()

indexRouter.use('/school', schoolRouter)
indexRouter.use('/teacher', teacherRouter)

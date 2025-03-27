import type { Request, Response } from 'express'
import { prisma } from '../../prisma/primsaCLient'
import generateRanomId from '../utils/randomString'

// Get all teachers
export const getAllTeachers = async (req: Request, res: Response) => {
  try {
    const teachers = await prisma.teacher.findMany({
      include: { school: true },
    })
    res.status(200).json(teachers)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teachers' })
  }
}

// Create a new teacher
export const createTeacher = async (req: Request, res: Response) => {
  try {
    console.log(`we are here`)
    const { name, age, schoolId, active } = req.body
    const teacherCode = generateRanomId('T')

    console.log(`this is req.body: `, req.body)

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null

    console.log(`this is the imagePath: ${imagePath}`)
    console.log({
      name,
      age,
      schoolId,
      teacherCode,
      imagePath,
    })

    const newTeacher = await prisma.teacher.create({
      data: {
        
        name,
        age: Number(age),
        schoolId: Number(schoolId),
        active: active === 'true',
        teacherCode,
        image: imagePath,

      },
    })

    res.status(201).json(newTeacher)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create teacher' })
  }
}

// Update a teacher
export const updateTeacher = async (req: Request, res: Response) => {
  try {
    const { teacherId } = req.params
    const { name, age, schoolId, active } = req.body

    const updatedTeacher = await prisma.teacher.update({
      where: { teacherId: Number(teacherId) },
      data: { name, age, schoolId, active },
    })

    res.status(200).json(updatedTeacher)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update teacher' })
  }
}

// Delete a teacher
export const deleteTeacher = async (req: Request, res: Response) => {
  try {
    const { teacherId } = req.params
    await prisma.teacher.delete({ where: { teacherId: Number(teacherId) } })

    res.status(200).json({ message: 'Teacher deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete teacher' })
  }
}

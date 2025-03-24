import type { Request, Response } from 'express'
import { prisma } from '../../prisma/primsaCLient'
import generateRanomId from '../utils/randomString'

// Get all schools
export const getAllSchools = async (req: Request, res: Response) => {
  try {
    const schools = await prisma.school.findMany({
      include: { teachers: true },
    })
    res.status(200).json(schools)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch schools' })
  }
}

// Create a new school
export const createSchool = async (req: Request, res: Response) => {
  try {
    console.log(`we are in`)
    const { name, location } = req.body
    const schoolCode = generateRanomId('S')
    console.log(`this is the school code : ${schoolCode}`)

    console.log(name, location)
    const newSchool = await prisma.school.create({
      data: { name, location, schoolCode },
    })
    res.status(201).json(newSchool)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create school' })
  }
}

// Update a school
export const updateSchool = async (req: Request, res: Response) => {
  try {
    const { schoolId } = req.params
    const { name, location } = req.body

    console.log(schoolId, name, location)

    const updatedSchool = await prisma.school.update({
      where: { schoolId: Number(schoolId) },
      data: { name, location },
    })

    res.status(200).json(updatedSchool)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update school' })
  }
}

// Delete a school
export const deleteSchool = async (req: Request, res: Response) => {
  try {
    const { schoolId } = req.params
    await prisma.school.delete({ where: { schoolId: Number(schoolId) } })
    res.status(200).json({ message: 'School deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete school' })
  }
}

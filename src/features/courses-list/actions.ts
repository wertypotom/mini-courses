'use server'

import { revalidatePath } from 'next/cache'
import { coursesRepository } from './repository/coursesRepository'
import { CreateCourseListItemData } from './model/types'

export const createCourseAction = async (
  data: CreateCourseListItemData,
  pathToRevalidate: string
) => {
  await coursesRepository.createCourseElement(data)
  revalidatePath(pathToRevalidate)
}

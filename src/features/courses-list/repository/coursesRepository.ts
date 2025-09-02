import { dbClient } from '@/shared/lib/dbClient'
import { cache } from 'react'
import {
  CourseListItem,
  CreateCourseListItemData,
  DeleteCourseListItemData,
} from '../model/types'

class CoursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListItem[]> => dbClient.course.findMany()
  )

  createCourseElement = (
    data: CreateCourseListItemData
  ): Promise<CourseListItem> => {
    return dbClient.course.create({
      data,
    })
  }

  deleteCourseElement = (data: DeleteCourseListItemData) => {
    return dbClient.course.delete({
      where: { id: data.id },
    })
  }
}

export const coursesRepository = new CoursesRepository()

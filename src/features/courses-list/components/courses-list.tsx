import { CourseItem } from '../ui/course-item'
import { coursesRepository } from '../repository/coursesRepository'
import { revalidatePath } from 'next/cache'

type TCoursesListProps = {
  pathToRevalidate: string
}

export async function CoursesList({ pathToRevalidate }: TCoursesListProps) {
  const coursesList = await coursesRepository.getCoursesList()

  const handleDeleteAction = async (courseId: string) => {
    'use server'

    await coursesRepository.deleteCourseElement({ id: courseId })
    revalidatePath(pathToRevalidate)
  }

  return (
    <div className='flex flex-col gap-3'>
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  )
}

import { CoursesList, CreateCourseForm } from '@/features/courses-list'

export default async function Home() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16'>
      <CreateCourseForm className='w-full max-w-md' pathToRevalidate='/' />
      <CoursesList pathToRevalidate='/' />
    </div>
  )
}

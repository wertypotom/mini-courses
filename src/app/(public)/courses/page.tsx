import { CoursesList, CreateCourseForm } from "@/features/courses-list";

export default function Courses() {
  return (
    <div className="container py-10">
      <CreateCourseForm pathToRevalidate="/" className="" />
      <CoursesList pathToRevalidate="/" />
    </div>
  );
}

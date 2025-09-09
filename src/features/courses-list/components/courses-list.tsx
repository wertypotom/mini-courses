import { CourseItem } from "../ui/course-item";
import { coursesRepository } from "../repository/coursesRepository";
import { revalidatePath } from "next/cache";
import { CourseListItem } from "../model/types";

type TCoursesListProps = {
  pathToRevalidate: string;
};

async function getCourses(): Promise<CourseListItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/courses`);

  if (!res.ok) throw new Error("Failed to load courses");
  const data = await res.json();
  return data.courses;
}

export async function CoursesList({ pathToRevalidate }: TCoursesListProps) {
  const coursesList = await getCourses();

  const handleDeleteAction = async (courseId: string) => {
    "use server";

    await coursesRepository.deleteCourseElement({ id: courseId });
    revalidatePath(pathToRevalidate);
  };

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={handleDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}

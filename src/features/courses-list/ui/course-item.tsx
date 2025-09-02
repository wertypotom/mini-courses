'use client'

import { Button } from '@/shared/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/shared/ui/card'
import { CourseListItem } from '../model/types'

type TCourseItemProps = {
  course: CourseListItem
  onDelete: () => Promise<void>
}

export function CourseItem({ course, onDelete }: TCourseItemProps) {
  const handleDelete = async () => {
    await onDelete()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button onClick={handleDelete}>Delete</Button>
      </CardFooter>
    </Card>
  )
}

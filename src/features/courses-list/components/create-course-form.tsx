'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/utils'
import { createCourseAction } from '../actions'

const createCourseFormSchema = z.object({
  name: z.string(),
  description: z.string(),
})

type TCreateCourseFormProps = {
  className: string
  pathToRevalidate: string
}

export function CreateCourseForm({
  className,
  pathToRevalidate,
}: TCreateCourseFormProps) {
  const form = useForm({
    resolver: zodResolver(createCourseFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const handleFormSubmit = async (
    data: z.infer<typeof createCourseFormSchema>
  ) => {
    await createCourseAction(data, pathToRevalidate)
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className={cn(className, 'space-y-4')}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Course name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='Course description' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='mt-8' type='submit'>
          Add
        </Button>
      </form>
    </Form>
  )
}

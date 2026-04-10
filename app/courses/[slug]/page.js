import { getCourse, courses } from '../../../lib/courses'
import CourseClient from './CourseClient'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const course = getCourse(slug)

  if (!course) {
    return { title: 'Course Not Found' }
  }

  return {
    title: `${course.title} Course in Hyderabad`,
    description: course.description,
    keywords: [
      `${course.title} course hyderabad`,
      `${course.title} training hyderabad`,
      `${course.title} course ameerpet`,
      'nettms education',
      'it training hyderabad',
    ],
    openGraph: {
      title: `${course.title} Course — Nettms Education`,
      description: course.description,
      url: `https://nettmsedu.in/courses/${course.slug}`,
      images: [{ url: course.image, alt: course.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} Course — Nettms Education`,
      description: course.description,
      images: [course.image],
    },
  }
}

export default async function CoursePage({ params }) {
  const { slug } = await params
  const course = getCourse(slug)
  return <CourseClient course={course} />
}
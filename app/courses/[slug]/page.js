import { getCourse, courses } from '../../../lib/courses'
import CourseClient from './CourseClient'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const course = getCourse(slug)

  if (!course) {
    return { title: 'Course Not Found' }
  }

  return {
    title: `${course.title} Course in Ameerpet, Hyderabad — Nettms Education`,
    description: `Join ${course.title} course at Nettms Education, Ameerpet Hyderabad. ${course.description.slice(0, 120)}... 85% placement rate. Free Masterclass available.`,
    keywords: [
      `${course.title} course Hyderabad`,
      `${course.title} training Ameerpet`,
      `${course.title} course Ameerpet Hyderabad`,
      `${course.title} institute Hyderabad`,
      `${course.title} training with placement Hyderabad`,
      'nettms education',
      'IT training Ameerpet',
    ],
    openGraph: {
      title: `${course.title} Course in Ameerpet, Hyderabad — Nettms Education`,
      description: `Join ${course.title} course at Nettms Education, Ameerpet Hyderabad. 85% placement rate. Free Masterclass available.`,
      url: `https://nettmsedu.in/courses/${course.slug}`,
      images: [{ url: course.image, alt: `${course.title} training in Ameerpet Hyderabad — Nettms Education` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} Course in Hyderabad — Nettms Education`,
      description: `${course.title} training in Ameerpet, Hyderabad. 85% placement rate. Free Masterclass available.`,
      images: [course.image],
    },
  }
}

export default async function CoursePage({ params }) {
  const { slug } = await params
  const course = getCourse(slug)

  // FAQ Schema for AI search engines
  const faqSchema = course?.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": course.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null

  // Course Schema
  const courseSchema = course ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${course.title} Course in Hyderabad`,
    "description": course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Nettms Education",
      "url": "https://nettmsedu.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "504, Vamshi Estates, Opp. Value Zone Mall, Punjagutta Officers Colony",
        "addressLocality": "Ameerpet, Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500082",
        "addressCountry": "IN"
      }
    },
    "url": `https://nettmsedu.in/courses/${course?.slug}`,
    "timeRequired": course.duration,
    "offers": {
      "@type": "Offer",
      "price": course.finalFee?.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
    }
  } : null

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      )}
      <CourseClient course={course} />
    </>
  )
}
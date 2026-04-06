import Hero from '../components/Hero'
import CoursesSection from '../components/CoursesSection'
import WhyNettms from '../components/WhyNettms'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <CoursesSection />
      <WhyNettms />
      <Testimonials />
    </main>
  )
}
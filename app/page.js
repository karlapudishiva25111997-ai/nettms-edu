import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import CoursesSection from '../components/CoursesSection'
import HowItWorks from '../components/HowItWorks'
import WhyNettms from '../components/WhyNettms'
import HiringCompanies from '../components/HiringCompanies'
import MasterclassBanner from '../components/MasterclassBanner'
import UpcomingBatches from '../components/UpcomingBatches'
import Testimonials from '../components/Testimonials'
import FreeDemoCTA from '../components/FreeDemoCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <CoursesSection />
      <HowItWorks />
      <WhyNettms />
      <HiringCompanies />
      <MasterclassBanner />
      <UpcomingBatches />
      <Testimonials />
      <FreeDemoCTA />
    </main>
  )
}
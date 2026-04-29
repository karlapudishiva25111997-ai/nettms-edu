import MasterclassPage from '../../../components/MasterclassPage'
import { getMasterclass } from '../../../lib/masterclasses'

export const metadata = {
  title: 'Free BIM Master Workshop in Hyderabad — Gulf Jobs Pathway | Nettms Education',
  description: 'Join a FREE 2-Hour Live BIM Workshop by Vijayababu Nettem (11+ years Gulf — Abu Dhabi Midfield Terminal, Dubai Mall). See live Revit, Navisworks, BOQ demos. Pathway to ₹1.5L+ tax-free Gulf jobs. Limited 15 seats.',
  openGraph: {
    title: 'Free BIM Master Workshop — Your Gateway to Gulf Jobs',
    description: 'FREE 2-Hour Live BIM Workshop. Live Revit + Navisworks demos by 11-year Gulf veteran. Limited 15 seats.',
    url: 'https://nettmsedu.in/masterclass/bim',
  },
}

export default function Page() {
  return <MasterclassPage data={getMasterclass('bim')} />
}

import MasterclassPage from '../../../components/MasterclassPage'
import { getMasterclass } from '../../../lib/masterclasses'

export const metadata = {
  title: 'Free Data Analysis Masterclass in Hyderabad — Nettms Education',
  description: 'Join a FREE 2-Hour Live Data Analysis Masterclass by K. Shiva. Learn Power BI, Python & SQL in action. Limited 15 seats.',
  openGraph: {
    title: 'Free Data Analysis Masterclass — Nettms Education Hyderabad',
    description: 'FREE 2-Hour Live Masterclass. Learn Power BI, Python & SQL. Limited 15 seats.',
    url: 'https://nettmsedu.in/masterclass/data-analysis',
  },
}

export default function Page() {
  return <MasterclassPage data={getMasterclass('data-analysis')} />
}

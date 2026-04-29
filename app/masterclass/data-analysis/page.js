import MasterclassPage from '../../../components/MasterclassPage'
import { getMasterclass } from '../../../lib/masterclasses'

export const metadata = {
  title: 'Free Data Analysis with AI Masterclass in Hyderabad — Nettms Education',
  description: 'Join a FREE 2-Hour Live Data Analysis with AI Masterclass by K. Shiva. See live Power BI, Python, SQL + AI demos. Earn 30-50% more with AI skills. Limited 15 seats.',
  openGraph: {
    title: 'Free Data Analysis with AI Masterclass — Nettms Education Hyderabad',
    description: 'FREE 2-Hour Live Masterclass. Power BI, Python, SQL + AI in action. Limited 15 seats.',
    url: 'https://nettmsedu.in/masterclass/data-analysis',
  },
}

export default function Page() {
  return <MasterclassPage data={getMasterclass('data-analysis')} />
}

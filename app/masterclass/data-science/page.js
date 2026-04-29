import MasterclassPage from '../../../components/MasterclassPage'
import { getMasterclass } from '../../../lib/masterclasses'

export const metadata = {
  title: 'Free Data Science Masterclass in Hyderabad — Nettms Education',
  description: 'Join a FREE 2-Hour Live Data Science Masterclass by K. Shiva. See real Machine Learning, Python & AI in action. Limited 15 seats.',
  openGraph: {
    title: 'Free Data Science Masterclass — Nettms Education Hyderabad',
    description: 'FREE 2-Hour Live Masterclass. See real ML, Python & AI in action. Limited 15 seats.',
    url: 'https://nettmsedu.in/masterclass/data-science',
  },
}

export default function Page() {
  return <MasterclassPage data={getMasterclass('data-science')} />
}

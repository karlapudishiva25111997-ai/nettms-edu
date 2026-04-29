import MasterclassPage from '../../../components/MasterclassPage'
import { getMasterclass } from '../../../lib/masterclasses'

export const metadata = {
  title: 'Free Gen AI & Agentic AI Masterclass in Hyderabad — Nettms Education',
  description: 'Join a FREE 2-Hour Live Gen AI Masterclass by Ravi. See real LangChain, RAG pipelines & autonomous AI agents built live. Limited 15 seats.',
  openGraph: {
    title: 'Free Gen AI & Agentic AI Masterclass — Nettms Education Hyderabad',
    description: 'FREE 2-Hour Live Masterclass. See real LangChain agents & RAG live. Limited 15 seats.',
    url: 'https://nettmsedu.in/masterclass/gen-ai',
  },
}

export default function Page() {
  return <MasterclassPage data={getMasterclass('gen-ai')} />
}

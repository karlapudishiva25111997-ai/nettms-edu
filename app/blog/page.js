import BlogClient from './BlogClient'

export const metadata = {
  title: 'Blog & Career Guides',
  description: 'Career guides, tech insights and industry news for IT & Healthcare professionals. Learn about Data Science, DevOps, Gen AI, Medical Coding and more.',
  openGraph: {
    title: 'Blog & Career Guides — Nettms Education',
    description: 'Career guides, tech insights and industry news.',
    url: 'https://nettmsedu.in/blog',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
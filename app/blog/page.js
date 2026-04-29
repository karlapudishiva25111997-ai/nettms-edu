import BlogClient from './BlogClient'

export const metadata = {
  title: 'Blog & Career Guides',
  description: 'Career guides, tech insights and industry news. Learn about Data Analysis, Data Science, Gen AI and BIM.',
  openGraph: {
    title: 'Blog & Career Guides — Nettms Education',
    description: 'Career guides, tech insights and industry news.',
    url: 'https://nettmsedu.in/blog',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
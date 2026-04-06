import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: {
    default: 'Nettms Education — Building Tomorrow',
    template: '%s | Nettms Education',
  },
  description: 'Professional IT & Healthcare training courses in Hyderabad. Data Science, DevOps, Full Stack Python, Gen AI, BIM, Medical Coding. 500+ students trained. 85% placement rate.',
  keywords: ['data science course hyderabad', 'devops training hyderabad', 'full stack python hyderabad', 'gen ai course hyderabad', 'medical coding hyderabad', 'bim training hyderabad', 'IT training ameerpet', 'nettms education'],
  authors: [{ name: 'Nettms Education' }],
  creator: 'Nettms Education',
  publisher: 'Nettms Urban Habitat',
  metadataBase: new URL('https://nettmsedu.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nettmsedu.in',
    siteName: 'Nettms Education',
    title: 'Nettms Education — Building Tomorrow',
    description: 'Professional IT & Healthcare training courses in Hyderabad. 500+ students trained. 85% placement rate.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Nettms Education' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nettms Education — Building Tomorrow',
    description: 'Professional IT & Healthcare training courses in Hyderabad.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="shortcut icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
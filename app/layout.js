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
  description: 'Specialised Data, AI and BIM training in Hyderabad. Data Analysis, Data Science, Gen AI & Agentic AI, BIM. 500+ students trained. 85% placement rate.',
  keywords: ['data analysis course hyderabad', 'data science course hyderabad', 'gen ai course hyderabad', 'agentic ai course hyderabad', 'bim training hyderabad', 'data analytics ameerpet', 'nettms education'],
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

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z6Z4Z9XFMR"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z6Z4Z9XFMR');
            `,
          }}
        />

        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1286465950342143');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt=""
            src="https://www.facebook.com/tr?id=1286465950342143&ev=PageView&noscript=1" />
        </noscript>

        {/* Schema Markup — for Google, ChatGPT, Gemini */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Nettms Education",
              "url": "https://nettmsedu.in",
              "logo": "https://nettmsedu.in/logo.jpg",
              "description": "Specialised Data, AI and BIM training institute in Ameerpet, Hyderabad. Courses in Data Analysis, Data Science, Gen AI and BIM.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ameerpet",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500016",
                "addressCountry": "IN"
              },
              "telephone": "+919963384555",
              "email": "info@nettmsedu.in",
              "sameAs": [
                "https://www.google.com/maps?q=Nettms+Education+Ameerpet+Hyderabad",
                "https://www.justdial.com/Hyderabad/Nettms-Education-Ameerpet/YOUR-LISTING-ID",
                "https://www.urbanpro.com/hyderabad/nettms-education",
                "https://www.sulekha.com/nettms-education-hyderabad"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Data, AI and BIM Courses",
                "itemListElement": [
                  { "@type": "Course", "name": "Data Analysis", "url": "https://nettmsedu.in/courses/data-analysis" },
                  { "@type": "Course", "name": "Data Science", "url": "https://nettmsedu.in/courses/data-science" },
                  { "@type": "Course", "name": "Gen AI & Agentic AI", "url": "https://nettmsedu.in/courses/gen-ai" },
                  { "@type": "Course", "name": "BIM", "url": "https://nettmsedu.in/courses/bim" }
                ]
              }
            })
          }}
        />
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
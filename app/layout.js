import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: {
    default: 'Best IT & Healthcare Training Institute in Ameerpet, Hyderabad | Nettms Education',
    template: '%s | Nettms Education Hyderabad',
  },
  description: 'Join Nettms Education — top-rated IT & Healthcare training institute in Ameerpet, Hyderabad. Courses in Data Science, DevOps, Python, Gen AI, BIM & Medical Coding. 500+ students placed. 85% placement rate. Free Masterclass available.',
  keywords: [
    'IT training institute Ameerpet Hyderabad',
    'data science course Ameerpet',
    'Python full stack training Hyderabad',
    'DevOps course Hyderabad with placement',
    'medical coding course Hyderabad',
    'BIM training Hyderabad',
    'Gen AI course Hyderabad',
    'data analysis course Ameerpet',
    'best training institute Ameerpet',
    'IT courses near Ameerpet metro',
    'nettms education',
    'nettmsedu',
  ],
  authors: [{ name: 'Nettms Education' }],
  creator: 'Nettms Education',
  publisher: 'Nettms Urban Habitat',
  metadataBase: new URL('https://nettmsedu.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nettmsedu.in',
    siteName: 'Nettms Education',
    title: 'Best IT & Healthcare Training Institute in Ameerpet, Hyderabad | Nettms Education',
    description: 'Top-rated IT & Healthcare training institute in Ameerpet, Hyderabad. Data Science, DevOps, Python, Gen AI, BIM & Medical Coding. 500+ students placed. Free Masterclass available.',
    images: [{ url: '/logo.jpg', width: 800, height: 600, alt: 'Nettms Education — IT Training Institute Ameerpet Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IT Training Institute in Ameerpet, Hyderabad | Nettms Education',
    description: 'Data Science, DevOps, Python, Gen AI, BIM & Medical Coding courses in Hyderabad. 500+ placed. 85% placement rate.',
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
              "image": "https://nettmsedu.in/logo.jpg",
              "description": "Leading IT & Healthcare training institute in Ameerpet, Hyderabad. Best institute for BIM, Data Science, DevOps, Full Stack Python, Gen AI and Medical Coding courses with placement support.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "504, Vamshi Estates, Opp. Value Zone Mall, Punjagutta Officers Colony",
                "addressLocality": "Ameerpet, Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500082",
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
                "name": "IT & Healthcare Courses",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "Data Science",
                    "description": "Learn Machine Learning, Deep Learning and AI to build intelligent data-driven systems. Hands-on training in Python, TensorFlow and AWS SageMaker in Ameerpet, Hyderabad.",
                    "url": "https://nettmsedu.in/courses/data-science",
                    "provider": {
                      "@type": "Organization",
                      "name": "Nettms Education",
                      "url": "https://nettmsedu.in"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Multi-Cloud DevOps",
                    "description": "Master AWS and Azure cloud platforms with Docker, Kubernetes, CI/CD and Terraform. Industry-ready DevOps training with placement support in Hyderabad.",
                    "url": "https://nettmsedu.in/courses/devops",
                    "provider": {
                      "@type": "Organization",
                      "name": "Nettms Education",
                      "url": "https://nettmsedu.in"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Full Stack Python",
                    "description": "Build complete web applications using Django, React.js, REST APIs and deploy on cloud. Job-ready Python full stack training in Ameerpet, Hyderabad.",
                    "url": "https://nettmsedu.in/courses/python-fullstack",
                    "provider": {
                      "@type": "Organization",
                      "name": "Nettms Education",
                      "url": "https://nettmsedu.in"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Gen AI & Agentic AI",
                    "description": "Master Generative AI, LLMs, Prompt Engineering and build autonomous AI agents using LangChain and LangGraph. Best Gen AI course in Hyderabad.",
                    "url": "https://nettmsedu.in/courses/gen-ai",
                    "provider": {
                      "@type": "Organization",
                      "name": "Nettms Education",
                      "url": "https://nettmsedu.in"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "BIM",
                    "description": "Building Information Modeling training for Civil, Mechanical and ECE engineers. Learn Revit, AutoCAD and Navisworks. Best BIM training institute in Hyderabad.",
                    "url": "https://nettmsedu.in/courses/bim",
                    "provider": {
                      "@type": "Organization",
                      "name": "Nettms Education",
                      "url": "https://nettmsedu.in"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Medical Coding",
                    "description": "Learn ICD-10, CPT, HCPCS coding systems and prepare for the AAPC CPC certification. Best medical coding course in Hyderabad with placement support.",
                    "url": "https://nettmsedu.in/courses/medical-coding",
                    "provider": {
                      "@type": "Organization",
                      "name": "Nettms Education",
                      "url": "https://nettmsedu.in"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Data Analysis",
                    "description": "Master Excel, SQL, Power BI and Python to analyze data and drive business decisions. Data analysis course with placement in Ameerpet, Hyderabad.",
                    "url": "https://nettmsedu.in/courses/data-analysis",
                    "provider": {
                      "@type": "Organization",
                      "name": "Nettms Education",
                      "url": "https://nettmsedu.in"
                    }
                  }
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
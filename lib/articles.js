 export const articles = [
  {
    slug: 'why-data-science-is-best-career-2025',
    title: 'Why Data Science is the Best Career Choice in 2025',
    excerpt: 'Data Science is one of the fastest growing fields in India. Here is why you should consider a career in Data Science in 2025.',
    content: `
Data Science has emerged as one of the most sought-after careers in India and globally. With companies generating massive amounts of data every day, the need for skilled data scientists has never been higher.

## Why Data Science?

The average salary for a Data Scientist in India ranges from ₹5 LPA to ₹15 LPA for freshers and experienced professionals respectively. Companies like TCS, Infosys, Amazon, Google and hundreds of startups are actively hiring data scientists.

## Skills You Need

To become a Data Scientist you need to master:
- Python programming
- Machine Learning algorithms
- Statistical analysis
- Data visualization tools like Power BI
- SQL for data querying

## Career Opportunities

After completing a Data Science course you can work as:
- Data Scientist
- Machine Learning Engineer
- AI Engineer
- Research Analyst
- Business Intelligence Analyst

## How to Get Started

The best way to start your Data Science journey is to enroll in a structured course that covers Python, Statistics, Machine Learning and real-world projects. At Nettms Education we offer a comprehensive 4-month Data Science program designed for both freshers and working professionals.
    `,
    category: 'Data Science',
    author: 'Nettms Education',
    date: '2025-01-15',
    readTime: '5 min read',
    color: '#5AB240',
  },
  {
    slug: 'devops-career-guide-india',
    title: 'Complete DevOps Career Guide for Indian Freshers',
    excerpt: 'DevOps is one of the highest paying IT roles in India. This complete guide will help you understand how to start your DevOps career.',
    content: `
DevOps has become one of the most in-demand skills in the Indian IT industry. With companies moving to cloud infrastructure and agile development, DevOps engineers are being hired at record numbers.

## What is DevOps?

DevOps is a combination of Development and Operations. It is a set of practices that combines software development and IT operations to shorten the development lifecycle and deliver high quality software continuously.

## Why Learn DevOps?

- Average salary: ₹4.5 LPA to ₹12 LPA
- Massive demand across all company sizes
- Work with cutting-edge cloud technologies
- High job security and growth potential

## Key Skills for DevOps

To become a DevOps Engineer you need to learn:
- Linux and Shell Scripting
- Docker and Kubernetes
- AWS and Azure cloud platforms
- CI/CD pipelines with Jenkins and GitHub Actions
- Infrastructure as Code with Terraform

## Top Companies Hiring DevOps Engineers

TCS, Infosys, Wipro, Accenture, Amazon, Microsoft and hundreds of startups are actively looking for DevOps professionals in India.

## Get Started with DevOps

At Nettms Education we offer a Multi-Cloud DevOps course covering both AWS and Azure. Our students have been placed at top companies with salary packages ranging from ₹4.5 LPA to ₹12 LPA.
    `,
    category: 'DevOps',
    author: 'Nettms Education',
    date: '2025-01-20',
    readTime: '6 min read',
    color: '#F97316',
  },
  {
    slug: 'gen-ai-future-of-technology',
    title: 'Gen AI & Agentic AI — The Future of Technology is Here',
    excerpt: 'Generative AI is transforming every industry. Learn how to ride the AI wave and build a career in the most exciting field of our time.',
    content: `
Generative AI has taken the world by storm. From ChatGPT to Claude to Gemini, AI tools are now being used by millions of people every day. But what does this mean for your career?

## What is Generative AI?

Generative AI refers to AI systems that can generate new content — text, images, code, music and more. Large Language Models like GPT-4 and Claude are examples of generative AI systems.

## Why Learn Gen AI Now?

- Highest paying new skill in the tech industry
- Every company is adopting AI tools
- Massive shortage of AI engineers globally
- Average salary: ₹6 LPA to ₹18 LPA

## What is Agentic AI?

Agentic AI takes generative AI a step further. AI agents can autonomously take actions, make decisions and complete complex tasks without human intervention. This is the next frontier of AI development.

## Career Opportunities in Gen AI

- AI Engineer
- Prompt Engineer
- LLM Application Developer
- AI Product Manager
- Gen AI Consultant

## How to Learn Gen AI

At Nettms Education we offer a comprehensive Gen AI and Agentic AI course covering LangChain, LangGraph, RAG pipelines and building autonomous AI agents from scratch.
    `,
    category: 'Artificial Intelligence',
    author: 'Nettms Education',
    date: '2025-01-25',
    readTime: '7 min read',
    color: '#A855F7',
  },
  {
    slug: 'medical-coding-work-from-home',
    title: 'Medical Coding — The Best Work From Home Career in 2025',
    excerpt: 'Medical Coding offers stable income, work from home flexibility and great career growth. Here is everything you need to know.',
    content: `
Medical Coding is one of the most underrated yet highly rewarding careers available in India today. It offers the unique combination of stable income, work from home opportunities and excellent job security.

## What is Medical Coding?

Medical Coding is the process of translating medical diagnoses, procedures and treatments into universal alphanumeric codes used for billing and insurance claims. These codes are used by hospitals, clinics and insurance companies worldwide.

## Why Medical Coding is Perfect for 2025

- Work from home — many companies offer remote positions
- No prior medical background needed
- Stable income with consistent growth
- Massive demand from US healthcare outsourcing companies in India
- AAPC CPC certification is globally recognized

## Who Can Become a Medical Coder?

Medical Coding is open to:
- Life science and pharmacy graduates
- Any graduate with good English skills
- People looking for stable work from home jobs
- BPO professionals wanting to switch to healthcare

## Salary Expectations

- Fresher: ₹2.5 LPA to ₹4 LPA
- Experienced (2-3 years): ₹4 LPA to ₹8 LPA
- CPC Certified: Higher packages available

## Get Certified with Nettms

At Nettms Education our Medical Coding course prepares you for the AAPC CPC certification exam. We cover ICD-10-CM, CPT, HCPCS coding systems with real case studies and mock tests.
    `,
    category: 'Healthcare',
    author: 'Nettms Education',
    date: '2025-02-01',
    readTime: '5 min read',
    color: '#EC4899',
  },
]

export function getArticle(slug) {
  return articles.find(a => a.slug === slug)
}

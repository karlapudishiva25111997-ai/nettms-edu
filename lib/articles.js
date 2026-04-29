export const articles = [
  {
    slug: 'why-data-science-is-best-career-2025',
    title: 'Why Data Science is the Best Career Choice in 2025',
    excerpt: 'Data Science is one of the fastest growing fields in India. Here is why you should consider a career in Data Science in 2025.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
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
    slug: 'gen-ai-future-of-technology',
    title: 'Gen AI & Agentic AI — The Future of Technology is Here',
    excerpt: 'Generative AI is transforming every industry. Learn how to ride the AI wave and build a career in the most exciting field of our time.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
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
]

export function getArticle(slug) {
  return articles.find(a => a.slug === slug)
}
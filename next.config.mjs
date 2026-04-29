/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Wrong slug redirects → correct slugs
      {
        source: '/courses/gen-ai-agentic-ai',
        destination: '/courses/gen-ai',
        permanent: true,
      },
      {
        source: '/courses/gen-ai-&-agentic-ai',
        destination: '/courses/gen-ai',
        permanent: true,
      },
      // Removed courses → redirect to courses listing
      {
        source: '/courses/devops',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/courses/multi-cloud-devops',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/courses/python-fullstack',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/courses/full-stack-python',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/courses/medical-coding',
        destination: '/courses',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
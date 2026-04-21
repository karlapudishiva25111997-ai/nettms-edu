/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Wrong slug redirects → correct slugs
      {
        source: '/courses/full-stack-python',
        destination: '/courses/python-fullstack',
        permanent: true,
      },
      {
        source: '/courses/multi-cloud-devops',
        destination: '/courses/devops',
        permanent: true,
      },
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
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ]
  },
}

export default nextConfig
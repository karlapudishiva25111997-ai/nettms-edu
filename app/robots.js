export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/logo.jpg',
        '/favicon.ico',
        '/iso-logo.png',
        '/startup-india.jpg',
        '/*.jpg$',
        '/*.png$',
        '/*.ico$',
      ],
    },
    sitemap: 'https://nettmsedu.in/sitemap.xml',
  }
}
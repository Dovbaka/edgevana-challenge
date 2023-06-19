/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.pravatar.cc'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sign-up', // Matched parameters can be used in the destination
        permanent: true,
      },
      // hack for cashed SignUp route
      {
        source: '/SignUp',
        destination: '/sign-up', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

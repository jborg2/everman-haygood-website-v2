const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
    mdxRs: false,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = withContentlayer(nextConfig)

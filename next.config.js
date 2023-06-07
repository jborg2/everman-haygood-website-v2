const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcMinify: true,
    mdxRs: false,
  },
}

module.exports = withContentlayer(nextConfig)

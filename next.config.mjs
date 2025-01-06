/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com'
      },
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.gems.fun'
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'staging-api.gems.fun'
      // },
      {
        protocol: 'https',
        hostname: 'storage.herewallet.app'
      }
    ]
  }
}

export default nextConfig

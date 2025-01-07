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
      {
        protocol: 'https',
        hostname: 'cdn.gems.fun'
      },
      {
        protocol: 'https',
        hostname: 'staging-api.gems.fun'
      },
      {
        protocol: 'https',
        hostname: 'storage.herewallet.app'
      },
      {
        protocol: 'https',
        hostname: 'file.io'
      },
      {
        protocol: 'https',
        hostname: 'specs.walletconnect.com'
      },
      {
        protocol: 'https',
        hostname: 'app.safe.global'
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com'
      }
    ]
  }
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com', 'media.autochek.africa', 'www.flaticon.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

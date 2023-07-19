/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    REACT_APP_SITE_KEY: process.env.REACT_APP_SITE_KEY
  }
}

module.exports = nextConfig

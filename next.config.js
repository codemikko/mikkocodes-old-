/* eslint-disable @typescript-eslint/no-var-requires */
const { withPlaiceholder } = require('@plaiceholder/next');
const { withNextBanner } = require('next-banner');
const withNextBanner = require('next-banner').default;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['avatars.githubusercontent.com'],
    minimumCacheTTL: 3600,
  },
};

const nextBannerConfig = {
  domain: 'https://mikko.codes',
  layoutDir: 'og-image',
  outputDir: 'images/og-image',
};

module.exports = withPlaiceholder(
  withNextBanner(nextBannerConfig)(nextConfig)
);

/** @type {import('next').NextConfig} */

const withFonts = require("next-fonts");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
  nextConfig,
});

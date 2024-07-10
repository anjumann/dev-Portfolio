const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for improved error handling
  swcMinify: true,      // Enable SWC minification for improved performance
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

// Configuration object tells the next-pwa plugin 
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA(withMDX(nextConfig));

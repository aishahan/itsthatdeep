/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... any existing config
  
  // Add pattern to ignore .obsidian folder
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  // Ignore patterns for the entire build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Ignore specific patterns
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/.obsidian/**', '**/node_modules/**']
    };
    return config;
  },

  // Add ignore patterns for file system
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Explicitly ignore certain paths
  experimental: {
    outputFileTracingIgnores: ['.obsidian/**/*'],
  },

  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/itsthatdeep' : '', // Replace 'itsthatdeep' with your repo name
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 
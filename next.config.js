/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set the basePath to your repository name
  // This is crucial for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

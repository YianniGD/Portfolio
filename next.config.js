/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static HTML export
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optionally, if you're deploying to a subpath (e.g., your-username.github.io/your-repo-name)
  // You might need to add a basePath:
  // basePath: '/your-repo-name',
};

module.exports = nextConfig;
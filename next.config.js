    /** @type {import('next').NextConfig} */
    const nextConfig = {
      // Required for static HTML export, which is ideal for GitHub Pages
      output: 'export',

      // Configure the base path for your GitHub Pages deployment
      // Replace 'your-repository-name' with the actual name of your GitHub repository.
      basePath: '/portfolio',

      // Optional: If you're using Image Optimization with Next.js,
      // you might need to disable it for static export or configure a custom loader.
      // For simple static sites, disabling is often easiest.
      images: {
        unoptimized: true,
      },

      // Optional: If you have any other specific configurations, add them here.
      // For example, if you have custom webpack configurations or environment variables.
      // webpack: (config, { isServer }) => {
      //   // Custom webpack config here
      //   return config;
      // },
    };

    module.exports = nextConfig;
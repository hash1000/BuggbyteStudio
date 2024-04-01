/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
    images: {
      deviceSizes: [320, 640, 1024, 1280, 1920],
      // Other existing `images` configs
  },
  };
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
// const isProd = process.env.NODE_ENV === 'production';

export default {

    trailingSlash: true,
  env: {
    customKey: process.env.CUSTOM_KEY,
  },
};

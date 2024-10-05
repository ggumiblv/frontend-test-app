/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/frontend-test-app', 
    assetPrefix: '/frontend-test-app/', 
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;

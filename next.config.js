/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '',
    output: "export",
    images: {
        unoptimized: true,
    },
    //assetPrefix: process.env.NODE_ENV === 'development' ? "" : "/Naowak-V4/",
}

module.exports = nextConfig;

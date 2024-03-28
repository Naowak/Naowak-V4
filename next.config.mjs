/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV === 'development' ? "" : "/Naowak-V4/",
    assetPrefix: process.env.NODE_ENV === 'development' ? "" : "/Naowak-V4/",
    images: {
        unoptimized: true,
    },
}
export default nextConfig;

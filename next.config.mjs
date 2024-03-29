/** @type {import('next').NextConfig} */

const nextConfig = {
    //assetPrefix: process.env.NODE_ENV === 'development' ? "" : "/Naowak-V4/",
    basePath: '/',
    output: "export",
    images: {
        unoptimized: true,
    },
}
export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'development' ? "" : "https://github.naowak.fr/",
    output: "export",
}

module.exports = nextConfig;

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/book-store',
   // Make sure this matches your GitHub repo name

   eslint: {
    ignoreDuringBuilds: true,
  },
}



export default nextConfig








// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// export default nextConfig;
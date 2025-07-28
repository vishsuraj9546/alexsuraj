import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Build ke time ESLint skip hoga
  },
  reactStrictMode: true, // ✅ Best practice
  images: {
    unoptimized: true, // ✅ Netlify ke liye optimize issues avoid karega
  },
  typescript: {
    ignoreBuildErrors: false, // ✅ Type errors build fail karenge (acha hai debugging ke liye)
  },
  webpack: (config) => {
    // ✅ Path aliases (imports ko clean aur short karne ke liye)
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": path.resolve(__dirname, "./components"),
      "@/app": path.resolve(__dirname, "./app"),
      "@/lib": path.resolve(__dirname, "./lib"),
      "@/styles": path.resolve(__dirname, "./styles"),
      "@": path.resolve(__dirname, "."),
    };
    return config;
  },
  experimental: {
    // ✅ Server actions allow sab origin ke liye (Netlify/Vercel par errors avoid)
    serverActions: {
      allowedOrigins: ["*"],
    },
    // ✅ Bundle optimize hoga (GSAP, Framer Motion, React-icons ke imports shrink honge)
    optimizePackageImports: ["gsap", "framer-motion", "react-icons"],
  },
};

export default nextConfig;

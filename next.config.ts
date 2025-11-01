import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configuración para exportación estática
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Eliminar basePath y assetPrefix para Netlify
  // basePath: process.env.NODE_ENV === 'production' ? '/bootcamp-ia-interactivo' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/bootcamp-ia-interactivo' : '',
  // Configuración para asegurar que el JavaScript se genere correctamente
  poweredByHeader: false,
  // Asegurar que los assets se sirvan correctamente
  assetPrefix: '',
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['chart.js', 'react-chartjs-2'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'chart.js/auto': 'chart.js/dist/chart.js'
    };
    return config;
  }
}

export default nextConfig;
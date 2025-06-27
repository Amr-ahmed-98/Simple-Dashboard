/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['chart.js', 'react-chartjs-2'],
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'chart.js/auto': 'chart.js/dist/chart.js'
    };
    
    // Add this to handle canvas (used by Chart.js)
    config.externals.push({
      canvas: 'canvas',
    });
    
    return config;
  }
}

module.exports = nextConfig;
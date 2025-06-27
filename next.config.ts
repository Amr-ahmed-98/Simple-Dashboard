// next.config.js
module.exports = {
  transpilePackages: ['chart.js', 'react-chartjs-2'],
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'chart.js/auto': 'chart.js/dist/chart.js'
    };
    return config;
  }
}
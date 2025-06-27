const nextConfig = {
  transpilePackages: ['chart.js', 'react-chartjs-2'],
  webpack: (config: any) => {
    // Add a rule to handle canvas (used by Chart.js)
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;

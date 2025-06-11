'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  data?: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<ChartJS<'bar'> | null>(null);

  useEffect(() => {
    // Early return if not in browser environment
    if (typeof window === 'undefined' || !chartRef.current) {
      return;
    }

    // Destroy existing chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null;
    }

    // Create new chart instance
    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    try {
      chartInstance.current = new ChartJS(ctx, {
        type: 'bar',
        data: data || {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: 'Sample Data',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: 'rgb(75, 192, 192)',
              borderRadius: 8,
              barPercentage: 0.4,
              categoryPercentage: 0.5,
              borderSkipped: false,
            },
          ],
        },
        options: options || {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Bar Chart',
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              grid: { display: false },
              beginAtZero: true,
            },
          },
        },
      });
    } catch (error) {
      console.error('Error creating chart:', error);
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [data, options]);

  // Don't render on server side
  if (typeof window === 'undefined') {
    return (
      <div className="w-full h-48 md:h-56 lg:h-64 flex items-center justify-center">
        <div>Loading chart...</div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-48 md:h-56 lg:h-64 flex items-center justify-center"
      style={{
        position: 'relative',
        maxWidth: '350px',
        margin: '0 auto',
      }}
    >
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
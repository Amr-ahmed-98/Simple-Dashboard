'use client';

import { useEffect, useRef } from 'react';
import Chart, { ChartOptions, ChartData } from 'chart.js/auto';

interface BarChartProps {
  data?: ChartData<'bar'>;
  options?: ChartOptions<'bar'>;
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  if (typeof window === 'undefined') return null;
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'bar'> | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (chartRef && chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
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
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, options]);

  return (
    <div
      className=' w-full h-48 md:h-56 lg:h-64 flex items-center justify-center '
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

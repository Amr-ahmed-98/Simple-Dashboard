// src/lib/chart.ts
import {
    Chart as ChartJS,
    registerables,      // all scales, controllers, elements, plugins
  } from 'chart.js';
  
  // register everything once on import
  ChartJS.register(...registerables);
  

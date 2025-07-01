'use client';
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useTheme } from '@/context/ThemeContext';

const ThemedLayout = ({ children }: { children: React.ReactNode }) => {
    const { colors } = useTheme();
  return (
    <div className={`min-h-screen ${colors.background} ${colors.textPrimary}`}>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <main className='flex-1 p-4'>{children}</main>
      </div>
    </div>
  )
}

export default ThemedLayout
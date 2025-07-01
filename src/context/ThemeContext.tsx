'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for theme colors
interface ThemeColors {
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  border: string;
  borderSecondary: string;
  buttonPrimary: string;
  buttonSecondary: string;
  card: string;
  cardHover: string;
  input: string;
  navbar: string;
  navbarText: string;
  icon: string;
  iconHover: string;
}

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  colors: ThemeColors;
  isDark: boolean;
}

const defaultColors: ThemeColors = {
  background: '',
  backgroundSecondary: '',
  backgroundTertiary: '',
  textPrimary: '',
  textSecondary: '',
  textTertiary: '',
  border: '',
  borderSecondary: '',
  buttonPrimary: '',
  buttonSecondary: '',
  card: '',
  cardHover: '',
  input: '',
  navbar: '',
  navbarText: '',
  icon: '',
  iconHover: '',
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  colors: defaultColors,
  isDark: false,
});

// Theme Provider Component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Theme colors configuration
  const themes: { [key in 'light' | 'dark']: ThemeColors } = {
    light: {
      // Background colors
      background: 'bg-white',
      backgroundSecondary: 'bg-gray-50',
      backgroundTertiary: 'bg-gray-100',
      // Text colors
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textTertiary: 'text-gray-500',
      // Border colors
      border: 'border-gray-200',
      borderSecondary: 'border-gray-300',
      // Button colors
      buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
      // Card colors
      card: 'bg-white border-gray-200 shadow-sm',
      cardHover: 'hover:shadow-md',
      // Input colors
      input: 'bg-white border-gray-300 focus:border-blue-500 text-gray-900',
      // Navbar colors
      navbar: 'bg-white border-gray-200 shadow-sm',
      navbarText: 'text-gray-700',
      // Icon colors
      icon: 'text-gray-600',
      iconHover: 'hover:text-gray-900',
    },
    dark: {
      // Background colors
      background: 'bg-gray-900',
      backgroundSecondary: 'bg-gray-800',
      backgroundTertiary: 'bg-gray-700',
      // Text colors
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      textTertiary: 'text-gray-400',
      // Border colors
      border: 'border-gray-700',
      borderSecondary: 'border-gray-600',
      // Button colors
      buttonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white',
      buttonSecondary: 'bg-gray-700 hover:bg-gray-600 text-white',
      // Card colors
      card: 'bg-gray-800 border-gray-700 shadow-lg',
      cardHover: 'hover:shadow-xl',
      // Input colors
      input: 'bg-gray-800 border-gray-600 focus:border-blue-500 text-white',
      // Navbar colors
      navbar: 'bg-gray-900 border-gray-700 shadow-lg',
      navbarText: 'text-gray-300',
      // Icon colors
      icon: 'text-gray-400',
      iconHover: 'hover:text-white',
    },
  };

  const value: ThemeContextType = {
    theme,
    toggleTheme,
    colors: themes[theme],
    isDark: theme === 'dark',
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

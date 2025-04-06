'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check if dark mode is activated
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    // Update the class in the html element
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
      aria-label={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      {isDark ? (
        <span>Light Mode ☀️</span>
      ) : (
        <span>Dark Mode 🌙</span>
      )}
    </button>
  )
} 
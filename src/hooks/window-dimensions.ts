import React, { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
  }

  return { width: 0, height: 0 }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleSize = () => {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleSize)

      return () => window.removeEventListener('resize', handleSize)
    }
  }, [])

  return windowDimensions
}

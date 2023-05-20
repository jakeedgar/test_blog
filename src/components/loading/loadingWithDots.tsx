import { useState, useEffect } from 'react'

const LoadingWithDots = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''))
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return <div>Loading{dots}</div>
}

export default LoadingWithDots

// import { useState, useEffect } from 'react'

// const Loading = () => {
//   const [dots, setDots] = useState('')

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''))
//     }, 300)

//     return () => clearInterval(interval)
//   }, [])

//   return <div>Loading{dots}</div>
// }

import React, { useEffect, useState, useRef } from 'react'

const Loading = () => {
  const [loadingText, setLoadingText] = useState('')
  const currentIndex = useRef(0)

  useEffect(() => {
    const text = 'L oading...'
    console.log(text)
    currentIndex.current = 0

    const interval = setInterval(() => {
      if (currentIndex.current < text.length - 1) {
        console.log(currentIndex.current, 'current')
        setLoadingText((prevText) => prevText + text[currentIndex.current])
        currentIndex.current++
      } else {
        clearInterval(interval)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return <div>{loadingText}</div>
}

export default Loading

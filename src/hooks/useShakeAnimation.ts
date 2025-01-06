import { useEffect, useRef, useState } from 'react'

import { generateRandomBadgeColor } from '@/utils/randomBadgeColor'

function randomDelayTime() {
  const delays = [1000, 1500, 1600, 1700, 1800, 2000]
  return delays[Math.floor(Math.random() * delays.length)]
}
export function useShakeAnimationRandom() {
  const animateInterval = useRef<any>(null)
  const [animateClass, setAnimateClass] = useState('animate-shake')
  const [ranColor, setRanColor] = useState('')
  useEffect(() => {
    animateInterval.current = setInterval(() => {
      setAnimateClass('')
      setRanColor('')
      setTimeout(() => {
        setAnimateClass('animate-shake')
        setRanColor(generateRandomBadgeColor())
      }, randomDelayTime())
    }, 1500)
    return () => {
      clearInterval(animateInterval.current)
    }
  }, [])

  return { animateClass, ranColor }
}

export function useShakeAnimation() {
  const [animateClass, setAnimateClass] = useState('')
  const [ranColor, setRanColor] = useState('')
  useEffect(() => {
    setAnimateClass('animate-shake')
    setRanColor(generateRandomBadgeColor())
    setTimeout(() => {
      setAnimateClass('')
      setRanColor('')
    }, 1500)
  }, [])

  return { animateClass, ranColor }
}

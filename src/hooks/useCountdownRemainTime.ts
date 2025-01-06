import { useEffect, useState } from 'react'

export default function useCountdownRemainTime(targetDate: string, onCountdownEnd?: () => void) {
  const [remainingTime, setRemainingTime] = useState('00:00:00')

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const target = new Date(targetDate)
      const difference = target.getTime() - now.getTime()

      if (difference <= 0) {
        setRemainingTime('00:00:00')
        clearInterval(intervalId)
        onCountdownEnd?.()
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setRemainingTime(
          `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        )
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  return remainingTime
}

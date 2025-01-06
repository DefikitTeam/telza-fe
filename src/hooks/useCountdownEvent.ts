import { useEffect, useState } from 'react'

export default function useCountdownEvent(targetDate: string | number, onCountdownEnd?: (isEnd?: boolean) => void) {
  const [remainingTime, setRemainingTime] = useState({ day: '00', hour: '00', min: '00', sec: '00' })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const target = new Date(targetDate)
      const difference = target.getTime() - now.getTime()

      if (difference <= 0) {
        setRemainingTime({ day: '00', hour: '00', min: '00', sec: '00' })
        clearInterval(intervalId)
        onCountdownEnd?.(true)
      } else {
        onCountdownEnd?.(false)
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setRemainingTime({
          day: days.toString().padStart(2, '0'),
          hour: hours.toString().padStart(2, '0'),
          min: minutes.toString().padStart(2, '0'),
          sec: seconds.toString().padStart(2, '0')
        })
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  return remainingTime
}

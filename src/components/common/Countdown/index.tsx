import useCountdownRemainTime from '@/hooks/useCountdownRemainTime'

export default function Countdown({ targetDate }: { targetDate: string }) {
  const remainingTime = useCountdownRemainTime(targetDate)

  return <>{remainingTime}</>
}

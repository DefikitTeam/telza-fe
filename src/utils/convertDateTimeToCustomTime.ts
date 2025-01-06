import dayjs from 'dayjs'

export const convertDateTimeToCustomTime = (time?: string) => {
  if (!time) return ''
  const createdAt = dayjs(time)
  const now = dayjs()

  // Get the difference in seconds
  const diffInSeconds = now.diff(createdAt, 'second')

  switch (true) {
    case diffInSeconds < 60:
      return `${diffInSeconds}s`
    case diffInSeconds < 3600:
      return `${Math.floor(diffInSeconds / 60)}m`
    case diffInSeconds < 86400:
      return `${Math.floor(diffInSeconds / 3600)}h`
    case diffInSeconds < 604800:
      return `${Math.floor(diffInSeconds / 86400)}d`
    case diffInSeconds < 2419200:
      return `${Math.floor(diffInSeconds / 604800)}w`
    default:
      return `${Math.floor(diffInSeconds / 2419200)}months`
  }
}

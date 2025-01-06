import { SPIN_COLORS } from '@/constant/enum/colors'

const badgeColors = ['green.400', 'yellow.400', 'purple.400', 'pink.400', 'cyan.400', 'orange.400', 'red.400']

function getIndexFromHex(hexString: string): number {
  const sum = hexString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return (sum % 80) + 1
}

export const generateRandomBadgeColor = (str?: string) => {
  if (str) {
    const index = getIndexFromHex(str) % badgeColors.length
    return SPIN_COLORS[index]
  }
  return badgeColors[Math.floor(Math.random() * badgeColors.length)]
}

export default function getSpinColor(index: number) {
  const totalColors = SPIN_COLORS.length
  const colorIndex = index % totalColors
  return SPIN_COLORS[colorIndex]
}

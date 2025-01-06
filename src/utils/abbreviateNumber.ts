export default function abbreviateNumber(num: number | string, maximumFractionDigits?: number): string {
  return Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: maximumFractionDigits || 6
  }).format(typeof num === 'string' ? parseFloat(num) : num)
}

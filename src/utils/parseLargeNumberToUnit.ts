export const parseLargeNumberToUnit = (number: string) => {
  const billion = 1000000000
  const million = 1000000
  const thousand = 1000

  const num = Number(number)

  if (num >= billion) {
    return `${(num / billion).toFixed(0)}B`
  } else if (num >= million) {
    return `${(num / million).toFixed(0)}M`
  } else if (num >= thousand) {
    return `${(num / thousand).toFixed(0)}K`
  } else {
    return num.toLocaleString('en-us', {
      maximumFractionDigits: 2
    })
  }
}

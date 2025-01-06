export default function truncateText(txt: string, limit: number) {
  if (!txt) return ''
  if (txt.length <= limit) return txt
  return txt.substring(0, limit) + '...'
}

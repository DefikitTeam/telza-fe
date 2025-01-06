import { useCallback, useState } from 'react'

type CopiedValue = string | null

type CopyFn = (text: string) => Promise<boolean>

type ResetFn = () => void

export function useCopyToClipboard(duration?: number): [CopiedValue, CopyFn, ResetFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const resetText = () => {
    setCopiedText('')
  }

  const copy: CopyFn = useCallback(
    async (text) => {
      if (!navigator?.clipboard) {
        console.warn('Clipboard not supported')
        return false
      }

      // Try to save to clipboard then save it in the state if worked
      try {
        await navigator.clipboard.writeText(text)
        setCopiedText(text)
        setTimeout(() => setCopiedText(''), duration || 1000)
        return true
      } catch (error) {
        console.warn('Copy failed', error)
        setCopiedText(null)
        return false
      }
    },
    [duration]
  )

  return [copiedText, copy, resetText]
}

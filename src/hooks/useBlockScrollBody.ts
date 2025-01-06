import { useEffect } from 'react'

export default function useBlockScrollBody(isBlock: boolean, isSubModal?: boolean) {
  useEffect(() => {
    if (!isSubModal) {
      if (isBlock) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = ''
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBlock])
}

export function isDev() {
  return process.env.NEXT_PUBLIC_ENV === 'dev'
}

export function isProd() {
  return process.env.NEXT_PUBLIC_ENV === 'prod'
}

export const isClient = () => typeof window !== 'undefined'
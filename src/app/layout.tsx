import React from 'react'

import LayoutProvider from '@/components/layout/Providers/LayoutProvider'
import ReduxProvider from '@/components/layout/Providers/ReduxProvider'
import { siteConfig } from '@/constant/siteConfig'
import { montserratFont } from '@/themes/fonts'

import '../styles/globals.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.icon,
    shortcut: siteConfig.logo,
    apple: siteConfig.logo
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.landing]
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.landing,
        width: 1200,
        height: 630,
        alt: 'Landing Meta Image'
      }
    ]
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="robots"
          content="index, follow"
        />
        <script
          src="https://telegram.org/js/telegram-web-app.js"
          async
        ></script>
      </head>
      <body className={montserratFont.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

import MyApp from './_app'

export const metadata: Metadata = {
  title: 'Mobibazar',
  description: 'Film',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <MyApp>{children}</MyApp>
      </body>
    </html>
  )
}

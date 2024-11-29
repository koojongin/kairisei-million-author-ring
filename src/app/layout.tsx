import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: '밀리언 아서 : 링',
  description: '밀리언 아서 : 링',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="./globals.css" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div
          className={
            'bg-center bg-cover min-w-full h-full absolute -z-10 opacity-10'
          }
          style={{ backgroundImage: `url('/img/bg.jpg')` }}
        ></div>
        {children}
      </body>
    </html>
  )
}

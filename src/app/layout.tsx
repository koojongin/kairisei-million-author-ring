import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Noto_Sans_KR } from 'next/font/google' // Roboto와 한글 NotoSans를 사용합니다.

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ['latin'], // 또는 preload: false
  weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
})

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

const cls = (...classnames: string[]) => {
  return classnames.join(' ')
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
      <body className={cls(notoSansKr.className)}>
        <Analytics />
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

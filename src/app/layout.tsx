import './globals.css'
import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import Header from '@/components/header'

const SourceSans3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Movie Database (TMDB)',
  description: 'The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={SourceSans3.className}
        suppressHydrationWarning={true}>
          <Header />
          <main id="main" className="content flex justify-center flex-wrap">
            {children}
          </main>
        </body>
    </html>
  )
}

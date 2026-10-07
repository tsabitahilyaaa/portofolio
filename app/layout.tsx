import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tsabitah Hilyatul Aulia — Junior Web Developer',
  description: 'The personal portfolio of Tsabitah Hilyatul Aulia, a Junior Web Developer and Informatics Engineering Graduate.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

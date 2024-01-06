import type { Metadata } from 'next'
import './globals.css'
import { Footer, NavBar } from '@src/components'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Encontre o carro dos seus sonhos sem dificuldade ou complicações!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
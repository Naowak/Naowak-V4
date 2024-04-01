import { Inter } from 'next/font/google'
import Author from '@/components/Author'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naowak',
  description: 'Site web personnel de Yannis Bendi-Ouis - alias Naowak - doctorant en intelligence artificielle à l\'Inria de l\'Université de Bordeaux',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

          {/* Author */}
          <Author />

          {/* Layout */}
          <div className='absolute p-4 md:p-8 xl:p-0 xl:w-4/5 xl:right-0 xl:py-10 xl:pr-10'>
            <div className='bg-white rounded-xl shadow-2xl p-2'>
              {children}
            </div>
          </div>


      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
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
          <div className='xl:fixed xl:w-1/5 xl:p-10'>
            <div className='bg-white rounded-xl overflow-hidden shadow-2xl'>
              <img src='./picture.png' alt='user_picture' className='' />
              <div className='p-2'>
                <h1 className='text-lg text-center font-semibold p-0.5'>Yannis Bendi-Ouis</h1>
                <h2 className='text-sm text-center text-slate-500  p-0.5'>Doctorant en Intelligence Artificielle</h2>
                <h3 className='text-sm text-center text-red-400 p-0.5'>Inria de Bordeaux</h3>
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className='absolute xl:w-4/5 xl:right-0 xl:py-10 xl:pr-10'>
            <div className='bg-white rounded-xl shadow-2xl'>

              {children}
            </div>
          </div>


      </body>
    </html>
  )
}

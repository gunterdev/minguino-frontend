import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className='h-full flex items-center flex-col justify-center'>
        <header className={[inter.className,"container","min-h-[100px]","bg-red-300"].join(" ")}>
          Header
        </header>
        <section className='container flex flex-1'>
          <aside className='bg-blue-300 hidden md:block md:w-64'>Aside</aside>
          <main className={[inter.className,"bg-red-500","flex-1"].join(" ")}>
             Main
          </main>
        </section>
    </div>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div className='h-full flex items-center flex-col justify-center'>
      <div className='container flex flex-1'>
        <header className="p-6 bg-gray-900 hidden sm:block sm:w-48 md:w-64">
          <h1>Header</h1>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Notifications</a></li>
              <li><a href="#">Profile</a></li>
            </ul>
          </nav>
        </header>
        <main className="p-6 bg-gray-800 flex-1">
            Main
        </main>
        <aside className="p-6 bg-gray-900 hidden lg:block sm:w-48 md:w-64">
          hey
        </aside>
      </div>
    </div>
  )
}

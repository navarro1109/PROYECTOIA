import TravelForm from './components/TravelForm'
import { Jost } from 'next/font/google'
import Image from 'next/image'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 ${jost.className}`}>
      <header className="bg-sky-500 p-4 text-white flex items-center">
        <Image 
          src="/travel-logo.jpg" 
          alt="TravelIA Logo" 
          width={50} 
          height={50} 
          className="mr-4"
        />
        <h1 className="text-4xl font-bold flex-grow text-center">TravelIA</h1>
      </header>
      <div className="container mx-auto p-4">
        <TravelForm />
      </div>
    </main>
  )
}


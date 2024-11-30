import TravelForm from './components/TravelForm'
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 ${jost.className}`}>
      <header className="bg-sky-500 p-4 text-white">
        <h1 className="text-4xl font-bold text-center">TravelIA</h1>
      </header>
      <div className="container mx-auto p-4">
        <TravelForm />
      </div>
    </main>
  )
}


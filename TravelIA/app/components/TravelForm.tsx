'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from 'next/image'

type Recommendation = {
  place: string
  description: string
  imageUrl: string
}

const Recommendations = ({ recommendations }: { recommendations: Recommendation[] }) => {
  return (
    <div className="space-y-4">
      {recommendations.map((rec, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative h-48">
            <Image
              src={rec.imageUrl}
              alt={rec.place}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-sky-600 text-lg">{rec.place}</h3>
            <p className="text-sky-700">{rec.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default function TravelForm() {
  const [region, setRegion] = useState('')
  const [country, setCountry] = useState('')
  const [budget, setBudget] = useState('')
  const [duration, setDuration] = useState('')
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulating AI recommendation (replace with actual AI API call in production)
    const simulatedRecommendations = [
      { place: "Barcelona, España", description: "Ciudad cosmopolita con arquitectura única y playas hermosas.", imageUrl: "/placeholder.svg?height=200&width=300" },
      { place: "Granada, España", description: "Hogar de la Alhambra, con rica historia y cultura andaluza.", imageUrl: "/placeholder.svg?height=200&width=300" },
      { place: "San Sebastián, España", description: "Conocida por sus playas y su excelente gastronomía vasca.", imageUrl: "/placeholder.svg?height=200&width=300" },
    ]
    setRecommendations(simulatedRecommendations)
    setShowRecommendations(true)
  }

  return (
    <div className={`flex transition-all duration-500 ease-in-out ${showRecommendations ? 'gap-8' : ''}`}>
      <Card className={`transition-all duration-500 ease-in-out ${showRecommendations ? 'w-1/2' : 'w-full max-w-md mx-auto'}`}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-sky-700">Encuentra tu destino ideal</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="region">Región</Label>
              <Select value={region} onValueChange={setRegion} required>
                <SelectTrigger id="region">
                  <SelectValue placeholder="Selecciona una región" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="playa">Playa</SelectItem>
                  <SelectItem value="montaña">Montaña</SelectItem>
                  <SelectItem value="ciudad">Ciudad</SelectItem>
                  <SelectItem value="rural">Rural</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">País</Label>
              <Input id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Presupuesto (€)</Label>
              <Input id="budget" type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">Duración (días)</Label>
              <Input id="duration" type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">Buscar destinos</Button>
          </form>
        </CardContent>
      </Card>
      {showRecommendations && (
        <div className={`w-1/2 transition-all duration-500 ease-in-out ${showRecommendations ? 'opacity-100' : 'opacity-0'}`}>
          <Recommendations recommendations={recommendations} />
        </div>
      )}
    </div>
  )
}


import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { TestimonialCarousel } from "../components/TestimonialCarousel"
import { WistiaVideoPlayer } from "../components/WistiaVideoPlayer"

export function HomePage() {
  const [showButton, setShowButton] = useState(false)
  const checkoutUrl = "https://grokgg.space/homempotente"

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 9 * 60 * 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
            <span className="text-foreground">O </span>
            <span className="bg-accent text-accent-foreground px-1">SEGREDO</span>
            <span className="text-foreground"> DO ENERGIZANTE </span>
            <span className="bg-accent text-accent-foreground px-1">AFRICANO</span>
            <span className="text-foreground">:</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold leading-tight">
            <span className="bg-accent text-accent-foreground px-1">REVELADO</span>
            <span className="text-foreground">: O </span>
            <span className="bg-accent text-accent-foreground px-1">ENERGIZANTE</span>
            <span className="text-foreground"> DE 7 DIAS QUE </span>
            <span className="underline font-bold">ESTICA E ENGROSSA</span>
            <span className="text-foreground"> O PAU EM ATÉ </span>
            <span className="bg-accent text-accent-foreground px-1">20CM</span>
          </h2>
        </div>

        <div className="bg-secondary text-secondary-foreground p-4 rounded-lg mb-4 text-center text-base md:text-lg">
          <span className="text-accent font-bold">Incrível!</span> Revelado: Os Ingredientes
          Usado Para Aumentar em Pelo Menos <strong>15cm</strong> o Tamanho do Pênis
        </div>

        <p className="text-center text-foreground text-sm mb-6">
          Aperte o botão play e aumente volume assista até o fim.
        </p>

        <WistiaVideoPlayer />

        {showButton && (
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4"
          >
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-lg cursor-pointer">
              Quero o meu energizante
            </Button>
          </a>
        )}

        <TestimonialCarousel />
      </div>
    </main>
  )
}

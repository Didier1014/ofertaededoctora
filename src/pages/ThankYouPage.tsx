export function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Pagamento Confirmado!
          </h1>
          <p className="text-muted-foreground text-lg">
            Bem-vindo à sua <span className="text-accent font-semibold">Cinemateca</span> exclusiva
          </p>
        </div>

        <div className="bg-secondary text-secondary-foreground p-4 rounded-lg mb-6 text-center text-sm">
          Três vídeos selecionados, reunidos em um só lugar para assistir sem distrações.
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <iframe
                src="https://player-vz-f9150b0d-544.tv.pandavideo.com.br/embed/?v=05d51158-66d9-48c9-b2b9-2e86df0631a9"
                className="w-full h-full"
                style={{ border: "none" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Episódio 01</span>
                <span className="text-xs text-muted-foreground">01 / 03</span>
              </div>
              <h3 className="text-foreground font-semibold">Abertura da coleção</h3>
              <p className="text-muted-foreground text-sm">Comece por aqui.</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-muted-foreground text-sm">Vídeo 02</div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Episódio 02</span>
                <span className="text-xs text-muted-foreground">02 / 03</span>
              </div>
              <h3 className="text-foreground font-semibold">Continuação da jornada</h3>
              <p className="text-muted-foreground text-sm">Novas perspectivas.</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-muted-foreground text-sm">Vídeo 03</div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">Episódio 03</span>
                <span className="text-xs text-muted-foreground">03 / 03</span>
              </div>
              <h3 className="text-foreground font-semibold">O encerramento</h3>
              <p className="text-muted-foreground text-sm">Desta seleção especial.</p>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-muted-foreground border-t border-border pt-6">
          Vídeos hospedados no Panda Video · Cinemateca 2026
        </footer>
      </div>
    </main>
  )
}

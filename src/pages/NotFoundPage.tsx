import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-accent mb-4">Oops!</h1>
        <p className="text-foreground text-lg mb-8">Page not found</p>
        <Link to="/">
          <Button variant="default" className="cursor-pointer">
            Return to Home
          </Button>
        </Link>
      </div>
    </main>
  )
}

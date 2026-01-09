export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-card/90 p-6 text-card-foreground shadow-xl shadow-primary/15 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-primary/25">
      {children}
    </div>
  )
}

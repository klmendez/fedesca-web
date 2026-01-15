// components/Card.tsx
import type { ReactNode } from 'react'

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

export default function Card({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-3xl bg-card/90 p-6 text-card-foreground shadow-xl shadow-primary/15 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-primary/25',
        className
      )}
    >
      {children}
    </div>
  )
}

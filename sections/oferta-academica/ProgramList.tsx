interface ProgramListProps {
  items: string[]
}

export function ProgramList({ items }: ProgramListProps) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

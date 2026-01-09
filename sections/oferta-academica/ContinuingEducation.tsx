import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'
import { ProgramList } from './ProgramList'

interface ContinuingEducationProps {
  programs: string[]
  note?: string
}

export function ContinuingEducation({ programs, note }: ContinuingEducationProps) {
  return (
    <FadeIn>
      <div className="mt-6">
        <Card>
          <h3 className="text-lg font-semibold">Reentrenamientos</h3>
          <ProgramList items={programs} />
          {note ? <p className="mt-3 text-xs text-muted-foreground">{note}</p> : null}
        </Card>
      </div>
    </FadeIn>
  )
}

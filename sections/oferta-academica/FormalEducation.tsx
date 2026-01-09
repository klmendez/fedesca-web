import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'
import { ProgramList } from './ProgramList'

interface FormalEducationProps {
  programs: string[]
}

export function FormalEducation({ programs }: FormalEducationProps) {
  return (
    <FadeIn>
      <Card>
        <h3 className="text-lg font-semibold">Educación Formal</h3>
        <ProgramList items={programs} />
      </Card>
    </FadeIn>
  )
}

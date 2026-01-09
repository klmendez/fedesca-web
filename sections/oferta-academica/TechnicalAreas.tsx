import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'
import { ProgramList } from './ProgramList'

interface TechnicalArea {
  title: string
  items: string[]
}

interface TechnicalAreasProps {
  areas: TechnicalArea[]
}

export function TechnicalAreas({ areas }: TechnicalAreasProps) {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      {areas.map((area) => (
        <FadeIn key={area.title}>
          <Card>
            <h3 className="text-lg font-semibold">{area.title}</h3>
            <ProgramList items={area.items} />
          </Card>
        </FadeIn>
      ))}
    </div>
  )
}

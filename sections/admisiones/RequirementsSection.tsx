import Section from '@/components/Section'
import Card from '@/components/Card'
import { FadeIn } from '@/components/Motion'

export function AdmissionRequirementsSection() {
  return (
    <Section title="Requisitos generales" subtitle="Documentos y pasos previos a la inscripción">
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <Card>
            <h3 className="text-lg font-semibold">Documentos solicitados</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Documento de identidad</li>
              <li>Certificados académicos (si aplica)</li>
              <li>Formulario de inscripción</li>
              <li>Entrevista/orientación (si aplica)</li>
            </ul>
          </Card>
        </FadeIn>

        <FadeIn>
          <Card>
            <h3 className="text-lg font-semibold">Pasos del proceso</h3>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Selecciona el programa de tu interés</li>
              <li>Completa el formulario de inscripción</li>
              <li>Entrega los documentos requeridos</li>
              <li>Recibe confirmación y realiza la matrícula</li>
            </ol>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}

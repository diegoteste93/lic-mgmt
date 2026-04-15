import { Badge } from '@/components/ui/badge'
import { EmptyStateCard } from '@/components/states/empty-state-card'
import { PageContainer, SectionCard } from '@/components/states/page-section'

export default function DashboardPage() {
  return (
    <PageContainer>
      <section>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">Resumo executivo do ambiente interno.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: 'Documentos', value: '148', variant: 'default' as const },
          { label: 'Pendências', value: '23', variant: 'destructive' as const },
          { label: 'Conformidade', value: '97%', variant: 'secondary' as const },
        ].map((metric) => (
          <SectionCard key={metric.label} title={metric.value} description={metric.label}>
            <Badge variant={metric.variant}>Atualizado agora</Badge>
          </SectionCard>
        ))}
      </div>
      <EmptyStateCard
        title="Sem alertas críticos"
        description="Quando houver alertas de segurança e conformidade, eles aparecerão aqui."
      />
    </PageContainer>
  )
}

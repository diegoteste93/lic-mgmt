'use client'

import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { PageContainer, SectionCard } from '@/components/states/page-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const schema = z.object({
  filtro: z.string().min(2, 'Digite ao menos 2 caracteres'),
})

type FormData = z.infer<typeof schema>

export default function DocumentosDashboardPage() {
  const form = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { filtro: '' } })

  const query = useMutation({
    mutationFn: async (data: FormData) => {
      await new Promise((resolve) => setTimeout(resolve, 350))
      return data
    },
  })

  return (
    <PageContainer>
      <section>
        <h1 className="text-2xl font-semibold">Documentos</h1>
        <p className="mt-1 text-sm text-muted-foreground">Visão geral e pesquisa de documentos corporativos.</p>
      </section>
      <SectionCard title="Busca inteligente" description="Filtre por nome, tag ou categoria.">
        <form
          className="flex flex-col md:flex-row gap-3"
          onSubmit={form.handleSubmit((values) => query.mutate(values))}
        >
          <div className="flex-1 space-y-1">
            <Input placeholder="Ex.: Contrato" {...form.register('filtro')} aria-label="Filtro de documentos" />
            {form.formState.errors.filtro && (
              <p className="text-xs text-destructive">{form.formState.errors.filtro.message}</p>
            )}
          </div>
          <Button type="submit" disabled={query.isPending}>
            {query.isPending ? 'Buscando...' : 'Buscar'}
          </Button>
        </form>
      </SectionCard>
    </PageContainer>
  )
}

import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="space-y-6 animate-fade-in-fast">{children}</div>
}

export function SectionCard({ title, description, children, className }: { title: string; description?: string; children: ReactNode; className?: string }) {
  return (
    <section className={cn('rounded-xl border border-border bg-card/90 p-5', className)}>
      <h2 className="text-base font-semibold">{title}</h2>
      {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      <div className="mt-4">{children}</div>
    </section>
  )
}

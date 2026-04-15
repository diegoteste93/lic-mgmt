import { ReactNode } from 'react'

export function SidebarNavSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="px-3 pt-3">
      <h3 className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/80">{title}</h3>
      <div className="space-y-1">{children}</div>
    </section>
  )
}

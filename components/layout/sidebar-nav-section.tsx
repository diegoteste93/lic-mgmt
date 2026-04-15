import { ReactNode } from 'react'

export function SidebarNavSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="px-3 pt-3.5">
      <h3 className="mb-2.5 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">{title}</h3>
      <div className="space-y-1">{children}</div>
    </section>
  )
}

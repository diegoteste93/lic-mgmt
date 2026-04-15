import { ReactNode } from 'react'
import { AppHeader } from '@/components/layout/app-header'
import { AppSidebar } from '@/components/layout/app-sidebar'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-pattern-mesh">
      <AppSidebar />
      <AppHeader />
      <main className="pt-[4.75rem] md:pl-56 xl:pl-80 overflow-x-hidden">
        <div className="p-4 md:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}

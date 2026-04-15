import { AppShell } from '@/components/layout/app-shell'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <AppShell breadcrumb={[{ label: 'Documentos' }, { label: 'Dashboard' }]}>{children}</AppShell>
}

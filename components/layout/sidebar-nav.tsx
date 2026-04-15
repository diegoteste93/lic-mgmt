import { appNavItems } from '@/lib/navigation'
import { SidebarNavItem } from '@/components/layout/sidebar-nav-item'

export function SidebarNav() {
  return (
    <nav className="space-y-1 px-3 pb-3" aria-label="Menu lateral principal">
      {appNavItems.map((item) => (
        <SidebarNavItem key={item.label} item={item} />
      ))}
    </nav>
  )
}

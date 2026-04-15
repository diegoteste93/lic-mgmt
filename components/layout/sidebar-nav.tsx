import { SidebarNavSection } from '@/components/layout/sidebar-nav-section'
import { SidebarNavItem } from '@/components/layout/sidebar-nav-item'
import { appNavItems } from '@/lib/navigation'

export function SidebarNav() {
  return (
    <nav className="pb-4" aria-label="Menu lateral principal">
      <SidebarNavSection title="Módulos">
        {appNavItems.map((item) => (
          <SidebarNavItem key={item.label} item={item} />
        ))}
      </SidebarNavSection>
    </nav>
  )
}

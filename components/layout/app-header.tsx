import { BreadcrumbNav } from '@/components/layout/breadcrumb-nav'
import { MobileSidebarDrawer } from '@/components/layout/mobile-sidebar-drawer'
import { UserAvatarMenu } from '@/components/layout/user-avatar-menu'
import { UserGreeting } from '@/components/layout/user-greeting'

export function AppHeader() {
  return (
    <header className="fixed top-0 left-0 md:left-56 xl:left-80 right-0 z-20 h-[3.75rem] border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="h-full px-4 md:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <MobileSidebarDrawer />
          <BreadcrumbNav />
        </div>
        <div className="flex items-center gap-2">
          <UserGreeting />
          <UserAvatarMenu />
        </div>
      </div>
    </header>
  )
}

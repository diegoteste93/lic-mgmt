import Link from 'next/link'
import { cn } from '@/lib/cn'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SidebarNav } from '@/components/layout/sidebar-nav'
import { SidebarSearch } from '@/components/layout/sidebar-search'

export function AppSidebar({ mobile = false }: { mobile?: boolean }) {
  return (
    <aside
      className={cn(
        'inset-y-0 left-0 z-30 flex flex-col border-r border-border/90 bg-card/96',
        mobile ? 'h-full w-full' : 'hidden md:fixed md:flex md:w-56 xl:w-80',
      )}
    >
      <div className="h-[3.75rem] border-b border-border/80 px-5 flex items-center">
        <Link href="/dashboard" className="flex items-center gap-2.5 text-sm font-semibold tracking-wide">
          <span className="h-8 w-8 rounded-lg bg-primary/18 text-primary grid place-content-center text-[11px] font-bold">LM</span>
          License Management
        </Link>
      </div>
      <div className="py-3.5">
        <SidebarSearch />
      </div>
      <ScrollArea className="custom-scrollbar flex-1">
        <SidebarNav />
      </ScrollArea>
    </aside>
  )
}

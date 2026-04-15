import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function SidebarSearch() {
  return (
    <div className="relative px-3">
      <Search className="pointer-events-none absolute left-5 top-3.5 h-4 w-4 text-muted-foreground" />
      <Input
        aria-label="Buscar menu"
        className="h-11 bg-muted/40 pl-9 pr-16"
        placeholder="Buscar menu..."
      />
      <kbd className="pointer-events-none absolute right-5 top-3 rounded border border-border bg-card px-1.5 py-0.5 text-[10px] text-muted-foreground">
        Ctrl K
      </kbd>
    </div>
  )
}

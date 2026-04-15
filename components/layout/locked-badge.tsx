import { Lock } from 'lucide-react'
import { cn } from '@/lib/cn'

export function LockedBadge({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-md border border-border/80 bg-muted/35 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground', className)}>
      <Lock className="mr-1 h-3 w-3" /> Bloqueado
    </span>
  )
}

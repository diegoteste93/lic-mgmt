'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Lock } from 'lucide-react'
import { useMemo, useState } from 'react'
import { cn } from '@/lib/cn'
import type { NavItem } from '@/types/navigation'

export function SidebarNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const hasChildren = Boolean(item.children?.length)
  const childActive = useMemo(
    () => (item.children ? item.children.some((child) => pathname === child.href) : false),
    [item.children, pathname],
  )
  const isActive = item.href ? pathname === item.href : childActive
  const [open, setOpen] = useState(childActive)

  if (item.href) {
    return (
      <Link
        href={item.href}
        aria-disabled={item.isLocked}
        className={cn(
          'group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 text-sm transition-all',
          item.isLocked && 'pointer-events-none opacity-45',
          isActive
            ? 'border-primary/25 bg-primary/12 text-foreground'
            : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
        )}
      >
        <item.icon className={cn('h-4 w-4', isActive ? 'text-primary' : 'text-muted-foreground')} />
        <span className="flex-1">{item.label}</span>
        {item.isLocked && <Lock className="h-3.5 w-3.5" />}
      </Link>
    )
  }

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all',
          item.isLocked && 'pointer-events-none opacity-45',
          isActive
            ? 'bg-primary/12 text-foreground'
            : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
        )}
      >
        <item.icon className={cn('h-4 w-4', isActive ? 'text-primary' : 'text-muted-foreground')} />
        <span className="flex-1 text-left">{item.label}</span>
        {item.isLocked ? <Lock className="h-3.5 w-3.5" /> : <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />}
      </button>

      {hasChildren && open && (
        <div className="animate-fade-in-fast space-y-1 border-l border-border/70 pl-4 ml-4">
          {item.children?.map((child) => {
            const activeChild = pathname === child.href
            return (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  'flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors',
                  activeChild
                    ? 'bg-primary/10 text-foreground'
                    : 'text-muted-foreground hover:bg-accent/40 hover:text-foreground',
                  child.isLocked && 'pointer-events-none opacity-45',
                )}
              >
                {child.label}
                {child.isLocked && <Lock className="h-3.5 w-3.5" />}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

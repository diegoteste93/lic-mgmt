'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, House } from 'lucide-react'

const labels: Record<string, string> = {
  dashboard: 'Dashboard',
  documentos: 'Documentos',
  'sem-permissao': 'Sem permissão',
}

function toTitle(segment: string) {
  return labels[segment] ?? segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export function BreadcrumbNav() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link href="/dashboard" className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm" aria-label="Home">
            <House className="h-4 w-4" />
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`
          const isLast = index === segments.length - 1

          return (
            <li key={href} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 opacity-60" />
              {isLast ? (
                <span className="font-medium text-foreground">{toTitle(segment)}</span>
              ) : (
                <Link href={href} className="hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-0.5">
                  {toTitle(segment)}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

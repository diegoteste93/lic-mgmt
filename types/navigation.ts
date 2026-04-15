import { LucideIcon } from 'lucide-react'

export interface NavChildItem {
  label: string
  href: string
  isLocked?: boolean
}

export interface NavItem {
  label: string
  href?: string
  icon: LucideIcon
  isLocked?: boolean
  children?: NavChildItem[]
}

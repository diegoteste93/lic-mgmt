import {
  Briefcase,
  Building2,
  ClipboardList,
  FileText,
  FolderKanban,
  Gauge,
  GraduationCap,
  HardHat,
  Shield,
  UserRound,
  Users,
  Wrench,
} from 'lucide-react'
import type { NavItem } from '@/types/navigation'

export const appNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: Gauge },
  { label: 'Treinamentos', icon: GraduationCap, isLocked: true },
  { label: 'Organização', icon: Building2, isLocked: true },
  { label: 'Pessoas', icon: Users, isLocked: true },
  { label: 'Contratações', icon: Briefcase, isLocked: true },
  { label: 'Desempenho', icon: ClipboardList, isLocked: true },
  { label: 'Projetos', icon: FolderKanban, isLocked: true },
  {
    label: 'Documentos',
    icon: FileText,
    children: [
      { label: 'Dashboard', href: '/documentos/dashboard' },
      { label: 'Sem permissão', href: '/documentos/sem-permissao' },
    ],
  },
  { label: 'Processos', icon: Wrench, isLocked: true },
  { label: 'Patrimônio', icon: UserRound, isLocked: true },
  { label: 'Pesquisas', icon: Shield, isLocked: true },
  { label: 'Segurança do Trabalho', icon: HardHat, isLocked: true },
  { label: 'Configurações', icon: Wrench, isLocked: true },
]

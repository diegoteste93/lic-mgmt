import { mockUser } from '@/lib/mock-auth'

export function UserGreeting() {
  return (
    <div className="hidden lg:flex items-center rounded-lg border border-border/85 bg-card/72 px-3.5 py-2 text-sm backdrop-blur-sm">
      <div>
        <p className="text-[11px] text-muted-foreground">Olá,</p>
        <p className="font-semibold leading-tight tracking-tight">{mockUser.name}</p>
      </div>
    </div>
  )
}

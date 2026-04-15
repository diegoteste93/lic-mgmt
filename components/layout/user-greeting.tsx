import { mockUser } from '@/lib/mock-auth'

export function UserGreeting() {
  return (
    <div className="hidden lg:flex items-center rounded-lg border border-border bg-card/75 px-3 py-2 text-sm">
      <div>
        <p className="text-muted-foreground">Olá,</p>
        <p className="font-medium leading-tight">{mockUser.name}</p>
      </div>
    </div>
  )
}

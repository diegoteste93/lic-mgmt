import { Inbox } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function EmptyStateCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="border-dashed">
      <CardContent className="py-10 text-center">
        <div className="mx-auto mb-4 grid h-12 w-12 place-content-center rounded-full bg-muted">
          <Inbox className="h-5 w-5 text-muted-foreground" />
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

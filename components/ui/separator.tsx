'use client'

import * as SeparatorPrimitive from '@radix-ui/react-separator'

export function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={['shrink-0 bg-border', orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px', className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

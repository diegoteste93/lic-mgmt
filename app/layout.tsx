import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import { QueryProvider } from '@/providers/query-provider'
import { ThemeProvider } from '@/providers/theme-provider'

export const metadata: Metadata = {
  title: 'LIC Management',
  description: 'Corporate dark dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <QueryProvider>
            <NextTopLoader color="#2A92FF" showSpinner={false} height={2} crawlSpeed={120} />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

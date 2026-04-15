import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import { QueryProvider } from '@/providers/query-provider'
import { ThemeProvider } from '@/providers/theme-provider'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'LIC Management',
  description: 'Corporate dark dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${inter.variable} ${mono.variable} font-sans antialiased`}>
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

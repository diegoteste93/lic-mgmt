'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Ban, House } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function PermissionDeniedCard({ currentRoute }: { currentRoute: string }) {
  return (
    <div className="min-h-[70vh] grid place-items-center">
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="w-full max-w-[42rem]"
      >
        <Card className="glass-card-premium border-destructive/28">
          <CardHeader className="text-center">
            <div className="mx-auto mb-2.5 grid h-14 w-14 place-content-center rounded-full bg-muted/80 ring-1 ring-border/80">
              <Ban className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle className="text-[1.35rem] tracking-tight">Permissão negada</CardTitle>
            <CardDescription className="mx-auto max-w-[34rem] text-[0.92rem] leading-relaxed">
              Você não tem permissão para acessar esta funcionalidade. Solicite acesso ao administrador do sistema.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="rounded-md border border-border bg-muted/30 px-3 py-2 font-mono text-xs text-muted-foreground">
              {currentRoute}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button variant="secondary" asChild className="sm:flex-1 h-10">
                <Link href="/documentos/dashboard">
                  <ArrowLeft className="h-4 w-4" /> Voltar
                </Link>
              </Button>
              <Button asChild className="sm:flex-1 h-10 shadow-soft">
                <Link href="/dashboard">
                  <House className="h-4 w-4" /> Ir para o Dashboard
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

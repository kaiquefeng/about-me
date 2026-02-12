import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowUpRight,
  Braces,
  Database,
  Globe,
  Layers3,
  Shield,
  Sparkles,
} from 'lucide-react'

import siteData from '@/data/data.json'

const techIcons: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="h-4 w-4" />,
  braces: <Braces className="h-4 w-4" />,
  layers: <Layers3 className="h-4 w-4" />,
  globe: <Globe className="h-4 w-4" />,
  database: <Database className="h-4 w-4" />,
  shield: <Shield className="h-4 w-4" />,
}
export const Route = createFileRoute('/tech/')({
  component: TechPage,
})

function TechPage() {
  const { techStack } = siteData

  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto w-full max-w-[720px] px-6 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-muted-foreground transition hover:text-foreground"
            data-testid="link-back-home"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para home
          </Link>

          <h1
            className="mt-10 text-balance font-serif text-[30px] leading-[1.12] tracking-[-0.03em] sm:text-[34px]"
            data-testid="text-tech-title"
          >
            Minha tech stack
          </h1>
          <p
            className="mt-4 max-w-[46rem] text-balance text-[15px] leading-relaxed text-muted-foreground"
            data-testid="text-tech-subtitle"
          >
            As tecnologias e escolhas que uso no dia a dia para construir
            produtos.
          </p>

          <div className="mt-10 clean-divider" data-testid="divider-tech" />

          <div className="mt-8 space-y-3">
            {techStack.map((t) => (
              <div
                key={t.id}
                className="rounded-xl border border-border bg-card px-4 py-4"
                data-testid={`card-tech-${t.id}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-foreground">
                      {techIcons[t.icon] || <Globe className="h-4 w-4" />}
                    </span>
                    <div>
                      <div
                        className="text-[14px] font-medium text-foreground"
                        data-testid={`text-tech-name-${t.id}`}
                      >
                        {t.name}
                      </div>
                      <div
                        className="mt-1 text-[13px] leading-relaxed text-muted-foreground"
                        data-testid={`text-tech-desc-${t.id}`}
                      >
                        {t.description}
                      </div>
                    </div>
                  </div>

                  <a
                    href={t.href || '#'}
                    className="inline-flex items-center gap-1 text-[13px] text-muted-foreground transition hover:text-foreground"
                    data-testid={`link-tech-more-${t.id}`}
                  >
                    Link
                    <ArrowUpRight className="h-4 w-4 opacity-60" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

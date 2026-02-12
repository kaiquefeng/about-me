import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Mail } from 'lucide-react'
import siteData from '@/data/data.json'
import { motion } from 'framer-motion'
import { HomeContainer } from '@/components/home-container'
import { SectionCardsLinks } from '@/components/section-cards-links'
import { SectionInlineCard } from '@/components/section-inline-card'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const { profile, socials, apps } = siteData

  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto w-full max-w-[720px] px-6 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="text-left"
        >
          <HomeContainer>
            <div className="inline-flex items-center gap-3">
              <img
                src={'https://github.com/kaiquefeng.png'}
                alt="Foto"
                className="size-12 rounded-2xl object-cover"
                data-testid="img-avatar"
              />
              <p className="leading-relaxed" data-testid="text-intro">
                {profile.greeting}{' '}
                <span className="font-medium text-foreground">
                  {profile.name}
                </span>
              </p>
            </div>

            <p
              className="mt-6 text-balance leading-relaxed "
              data-testid="text-blurb"
            >
              {profile.bio}
            </p>

            <SectionCardsLinks
              items={socials}
              title="I post regularly on these platforms"
            />
            <SectionCardsLinks items={apps} title="I build web apps" />

            <SectionInlineCard
              title="Do you need to create a project? I have a software studio"
              item={{
                label: profile.softwareHouse.name,
                href: profile.softwareHouse.href,
                id: 'software-house',
                icon: 'devexperience',
                nickname: profile.softwareHouse.nickname,
              }}
            />

            {/* <p className="mt-7 leading-relaxed " data-testid="text-tech-cta">
              Curioso sobre minha tech stack?{' '}
              <Link
                to="/tech"
                className="link-underline font-medium text-foreground"
                data-testid="link-tech-stack"
              >
                Clique aqui
              </Link>
              .
            </p> */}

            <div className="mt-10 clean-divider" data-testid="divider-home" />

            <div className="mt-10 text-left">
              <h2
                className="font-serif text-[18px] tracking-[-0.015em]"
                data-testid="text-contact-title"
              >
                Want to say hi?
              </h2>
              <div className="mt-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-[13px] text-foreground transition hover:bg-secondary"
                  data-testid="link-email"
                >
                  <Mail className="h-4 w-4 opacity-70" />
                  Click here
                  <ArrowUpRight className="h-4 w-4 opacity-40" />
                </a>
              </div>

              <p
                className="mt-8 text-center text-[12px] "
                data-testid="text-footer"
              >
                {profile.footer}
              </p>
            </div>
          </HomeContainer>
        </motion.div>
      </main>
    </div>
  )
}

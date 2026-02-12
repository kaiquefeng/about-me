import { Globe } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { MAPPING_ICONS } from '@/constants/mapping-icons'

export const SectionCardsLinks = ({
  items,
  title,
}: {
  items: {
    id: string
    label: string
    nickname: string
    href: string
    icon: string
  }[]
  title: string
}) => {
  return (
    <div className="mt-6">
      <p
        className="text-balance leading-relaxed "
        data-testid="text-social-title"
      >
        {title}
      </p>

      <div
        className="mt-3 flex flex-wrap items-center gap-3"
        data-testid="row-social-icons"
      >
        {items.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <a
                href={item.href}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:bg-secondary"
                aria-label={item.label}
                data-testid={`icon-social-${item.id}`}
              >
                <span className="opacity-85 transition group-hover:opacity-100">
                  {MAPPING_ICONS[item.icon as keyof typeof MAPPING_ICONS] || (
                    <Globe className="h-4 w-4" />
                  )}
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              align="center"
              className="text-[12px]"
              data-testid={`tooltip-social-${item.id}`}
            >
              {item.nickname}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

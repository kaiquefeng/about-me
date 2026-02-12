import { Globe } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { MAPPING_ICONS } from '@/constants/mapping-icons'

function InlineLink({
  href,
  children,
  testId,
}: {
  href: string
  children: React.ReactNode
  testId: string
}) {
  return (
    <a
      href={href}
      className="link-underline font-medium text-foreground"
      data-testid={testId}
    >
      {children}
    </a>
  )
}

export const SectionInlineCard = ({
  item,
  title,
}: {
  item: {
    id: string
    label: string
    nickname: string
    href: string
    icon: string
  }
  title: string
}) => {
  return (
    <div className="mt-6">
      <p
        className="mt-4 text-balance leading-relaxed "
        data-testid="text-studio"
      >
        {title}{' '}
        <Tooltip key={item.id}>
          <TooltipTrigger asChild>
            <a
              href={item.href}
              className="flex h-10 px-2 w-fit items-center justify-center rounded-xl border border-border bg-card text-foreground transition hover:bg-secondary"
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
      </p>

      <div
        className="mt-3 flex flex-wrap items-center gap-3"
        data-testid="row-social-icons"
      ></div>
    </div>
  )
}

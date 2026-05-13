import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { HomeContainer } from "@/components/home-container";
import { MAPPING_ICONS } from "@/constants/mapping-icons";
import siteData from "@/data/data.json";

export const Route = createFileRoute("/services")({ component: ServicesPage });

function ServicesPage() {
  const { services } = siteData as typeof siteData & {
    services: {
      id: string;
      label: string;
      description: string;
      href: string;
      icon: string;
      badge: string | null;
    }[];
  };

  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto w-full max-w-[720px] px-6 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <HomeContainer>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </Link>

            <h1 className="text-lg font-medium tracking-[-0.015em]">
              Recommended services
            </h1>
            <p className="mt-2 text-balance leading-relaxed text-muted-foreground">
              Tools and services I use daily and genuinely recommend.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3.5 transition hover:bg-secondary"
                    data-testid={`service-${service.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background opacity-85 transition group-hover:opacity-100">
                        {MAPPING_ICONS[
                          service.icon as keyof typeof MAPPING_ICONS
                        ] || <Globe className="h-4 w-4" />}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {service.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                          {service.badge}
                        </span>
                      )}
                      <ArrowUpRight className="h-4 w-4 opacity-30 transition group-hover:opacity-70" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </HomeContainer>
        </motion.div>
      </main>
    </div>
  );
}

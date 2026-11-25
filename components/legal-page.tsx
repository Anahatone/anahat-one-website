import { SiteLogo } from "@/components/site-logo"
import { SiteFooter } from "@/components/site-footer"

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-svh bg-[#08071a] text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center px-4 py-5 md:px-6">
          <a href="/" aria-label="Anahat Aura home">
            <SiteLogo iconSize={34} />
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-20">
        <h1 className="font-serif text-3xl font-medium md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated} · Anahat Aura LLP</p>
        <div className="mt-10 space-y-8 text-base leading-relaxed text-muted-foreground [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground [&_a]:text-primary">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

import { SiteLogo } from "@/components/site-logo"
import { ADDRESS_ONE_LINE } from "@/lib/company"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <a href="/#top" className="flex items-center">
          <SiteLogo iconSize={34} />
        </a>

        <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
          <nav className="flex gap-5 text-sm text-muted-foreground">
            <a href="/privacy" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="/terms" className="transition-colors hover:text-foreground">Terms of Use</a>
            <a href="mailto:admin@anahatone.com" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <p className="text-sm text-muted-foreground" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Anahat Aura LLP (LLPIN ACY-2870). All rights reserved.
          </p>
          <p className="max-w-md text-xs text-muted-foreground/70">Registered office: {ADDRESS_ONE_LINE}</p>
        </div>
      </div>
    </footer>
  )
}

import { BRAND, NAV_LINKS } from '../../lib/constants'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-slate-800/60">
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <a href="/" className="flex items-center gap-2.5 group" aria-label="Kumo home">
          <img
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            decoding="async"
            className="w-8 h-8 transition-transform group-hover:rotate-12"
          />
          <span className="font-bold text-lg tracking-tight">{BRAND.name}</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={BRAND.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-3 py-1.5 text-sm text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 rounded-md transition-colors"
          >
            GitHub
          </a>
          <a
            href="#install"
            className="inline-flex items-center px-4 py-1.5 text-sm font-semibold bg-brand hover:bg-brand-400 text-white rounded-md transition-colors"
          >
            Install
          </a>
        </div>
      </nav>
    </header>
  )
}

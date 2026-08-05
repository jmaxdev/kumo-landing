import { useState } from 'react'
import { BRAND, HERO_BADGES, INSTALL_COMMANDS } from '../../lib/constants'

type InstallKey = keyof typeof INSTALL_COMMANDS

export function Hero() {
  const [active, setActive] = useState<InstallKey>('unix')
  const cmd = INSTALL_COMMANDS[active]

  const copy = () => {
    navigator.clipboard.writeText(cmd.command)
  }

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32"
    >
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-grid bg-grid-mask pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="absolute inset-0 bg-brand/30 blur-2xl rounded-full animate-pulse-glow"
              aria-hidden="true"
            />
            <img
              src="/icon.png"
              alt="Kumo package manager logo"
              width={112}
              height={112}
              decoding="async"
              fetchPriority="high"
              className="relative w-24 h-24 md:w-28 md:h-28 animate-float"
            />
          </div>
        </div>

        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-gradient">{BRAND.name}</span>
          <br />
          <span className="text-white">{BRAND.tagline}</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {BRAND.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {HERO_BADGES.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-bg-card border border-slate-800 rounded-full"
            >
              <span>{b.icon}</span>
              {b.label}
            </span>
          ))}
        </div>

        {/* Install commands */}
        <div id="install" className="max-w-2xl mx-auto">
          <div className="rounded-xl overflow-hidden bg-bg-card border border-slate-800 shadow-2xl border-glow">
            {/* Tabs */}
            <div className="flex border-b border-slate-800">
              {(Object.keys(INSTALL_COMMANDS) as InstallKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    active === key
                      ? 'text-white bg-slate-800/50 border-b-2 border-brand'
                      : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'
                  }`}
                >
                  {INSTALL_COMMANDS[key].label}
                </button>
              ))}
            </div>
            {/* Command */}
            <div className="relative p-5 font-mono text-sm text-left">
              <code className="text-slate-100 break-all">{cmd.command}</code>
              <button
                onClick={copy}
                aria-label="Copy command"
                className="absolute top-3 right-3 px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 rounded transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-400 rounded-lg transition-colors"
          >
            Explore Features
            <span>↓</span>
          </a>
          <a
            href={BRAND.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-bg-card border border-slate-700 hover:border-slate-500 rounded-lg transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

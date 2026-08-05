import { SECURITY_PILLARS } from '../../lib/constants'
import { CodeBlock } from '../ui/CodeBlock'

export function Security() {
  return (
    <section
      id="security"
      aria-labelledby="security-heading"
      className="py-20 md:py-28 border-t border-slate-800/60 relative"
    >
      {/* subtle background glow */}
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Security
          </p>
          <h2 id="security-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Supply chain security before a byte touches disk
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Dependency attacks are the new normal. Kumo validates every package against
            configurable policies during resolution — sandboxing, typosquatting checks, OSV scans,
            and license allowlists.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {SECURITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-xl bg-bg-card border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 w-11 h-11 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-xl">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-white pt-1.5">{pillar.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>
              <CodeBlock language="kumo.config.json">{pillar.code}</CodeBlock>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

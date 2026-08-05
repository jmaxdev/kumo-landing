import { FEATURES } from '../../lib/constants'

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything a modern package manager should be
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Caching, security, and developer experience — designed in Rust from the ground up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="relative p-6 rounded-xl bg-bg-card border border-slate-800 hover:border-brand/40 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_rgba(232,97,26,0.4)]"
            >
              <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

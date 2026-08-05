import { PROBLEMS } from '../../lib/constants'

export function Problems() {
  return (
    <section
      aria-labelledby="problems-heading"
      className="py-20 md:py-28 border-t border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            The Problem
          </p>
          <h2 id="problems-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Why your current package manager is holding you back
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Modern JavaScript and TypeScript projects are bigger than ever. Dependency management
            tools have not kept up with install speed or supply chain security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="relative p-6 rounded-xl bg-bg-card border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-slate-300 mt-12">
          <span className="text-brand font-semibold">Kumo</span> was built to solve all three.
        </p>
      </div>
    </section>
  )
}

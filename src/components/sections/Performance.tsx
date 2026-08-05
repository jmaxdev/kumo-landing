import { PERF_NOTE, PERF_STATS } from '../../lib/constants'

export function Performance() {
  return (
    <section id="performance" className="py-20 md:py-28 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Performance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fast where it matters, cached where it counts
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{PERF_NOTE}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {PERF_STATS.map((s) => (
            <div
              key={s.label}
              className="text-center p-8 rounded-xl bg-bg-card border border-slate-800"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">
                {s.value}
              </div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Cache flow explanation */}
        <div className="mt-12 p-6 md:p-8 rounded-xl bg-gradient-to-br from-bg-card to-bg-elevated border border-slate-800">
          <h3 className="text-lg font-semibold mb-3 text-white">
            How the BLAKE3 build cache works
          </h3>
          <ol className="space-y-3 text-slate-300 text-sm">
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand/20 border border-brand/40 text-brand text-xs font-bold flex items-center justify-center">
                1
              </span>
              <span>
                Kumo computes a deterministic hash of your{' '}
                <code className="text-brand-300">build</code> script, the resolved
                lockfile, and the matched source files.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand/20 border border-brand/40 text-brand text-xs font-bold flex items-center justify-center">
                2
              </span>
              <span>
                If that hash exists in the store, Kumo restores the previous outputs and log
                streams — no script execution required.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand/20 border border-brand/40 text-brand text-xs font-bold flex items-center justify-center">
                3
              </span>
              <span>
                If the hash is new, the script runs and Kumo stores the outputs for the next
                time the same hash appears.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

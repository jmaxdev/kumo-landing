import { BRAND, DOCKER_DOCKERFILE, DOCKER_FEATURES } from '../../lib/constants'
import { CodeBlock } from '../ui/CodeBlock'

export function Docker() {
  return (
    <section id="docker" className="py-20 md:py-28 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            Docker
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Production-ready container images
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Official multi-arch image with a built-in Node.js runtime manager. No bundling
            decisions forced on you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Dockerfile */}
          <div className="lg:col-span-3">
            <CodeBlock language="Dockerfile">{DOCKER_DOCKERFILE}</CodeBlock>
          </div>
          {/* Features */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {DOCKER_FEATURES.map((f) => (
              <div
                key={f}
                className="flex items-start gap-3 p-4 rounded-lg bg-bg-card border border-slate-800"
              >
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand/20 border border-brand/40 text-brand text-xs font-bold flex items-center justify-center">
                  ✓
                </span>
                <span className="text-slate-300 text-sm">{f}</span>
              </div>
            ))}
            <a
              href={BRAND.docs}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-brand hover:bg-brand-400 rounded-lg transition-colors"
            >
              Full Docker guide →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

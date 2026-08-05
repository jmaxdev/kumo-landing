import { TERMINAL_DEMO } from '../../lib/constants'
import { TerminalWindow } from '../ui/TerminalWindow'

type Line = (typeof TERMINAL_DEMO)[number]

function renderLine(line: Line, i: number) {
  if ('type' in line && line.type === 'spacer') {
    return <div key={i} className="h-2" />
  }
  if ('type' in line && line.type === 'cmd') {
    return (
      <div key={i} className="text-slate-100">
        <span className="text-brand-300">{line.text}</span>
      </div>
    )
  }
  if ('type' in line && line.type === 'out') {
    const cls = 'success' in line && line.success
      ? 'text-emerald-400'
      : 'muted' in line && line.muted
        ? 'text-slate-500'
        : 'text-slate-300'
    return (
      <div key={i} className={cls}>
        {line.text}
      </div>
    )
  }
  return null
}

export function Terminal() {
  return (
    <section
      aria-labelledby="terminal-heading"
      className="py-20 md:py-28 border-t border-slate-800/60"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            See it in action
          </p>
          <h2 id="terminal-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Familiar package manager commands, supercharged output
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Drop-in familiarity with common npm-style CLI workflows, with security scans and cache
            hits built into every step.
          </p>
        </div>

        <TerminalWindow title="kumo@dev ~/projects/my-app" className="max-w-3xl mx-auto">
          {TERMINAL_DEMO.map((line, i) => renderLine(line, i))}
        </TerminalWindow>
      </div>
    </section>
  )
}

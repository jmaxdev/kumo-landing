import type { ReactNode } from 'react'

type Props = {
  title?: string
  children: ReactNode
  className?: string
}

export function TerminalWindow({ title = 'kumo@dev ~', children, className = '' }: Props) {
  return (
    <div
      className={`rounded-xl overflow-hidden bg-[#0a0e17] border border-slate-800/80 shadow-2xl ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/60 border-b border-slate-800/80">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-slate-500 font-mono">{title}</span>
      </div>
      {/* Body */}
      <div className="p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  )
}

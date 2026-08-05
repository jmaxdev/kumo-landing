import type { ReactNode } from 'react'

type Props = {
  language?: string
  children: ReactNode
  className?: string
}

export function CodeBlock({ language, children, className = '' }: Props) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden bg-[#0a0e17] border border-slate-800/80 ${className}`}
    >
      {language && (
        <div className="px-4 py-2 text-xs font-mono text-slate-500 bg-slate-900/40 border-b border-slate-800/80 flex items-center justify-between">
          <span>{language}</span>
        </div>
      )}
      <pre className="p-4 m-0 text-sm font-mono leading-relaxed text-slate-200 overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  )
}

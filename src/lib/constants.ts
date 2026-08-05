// All marketing copy and content for the Kumo landing page.
// Centralized here for easy updates.

export const BRAND = {
  name: 'Kumo',
  tagline: 'The package manager that protects your supply chain',
  description:
    'High-performance dependency management with BLAKE3 caching, OS-level sandboxing, and proactive vulnerability scanning — written in Rust.',
  github: 'https://github.com/jmaxdev/Kumo',
  site: 'https://kumo.jmaxdev.site',
  docs: 'https://github.com/jmaxdev/Kumo/blob/main/app/docs/kumo.md',
  installSh: '/install.sh',
  installPs1: '/install.ps1',
  docker: 'ghcr.io/jmaxdev/kumo',
  version: '1.0.4',
  license: 'UPL 1.0',
}

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Performance', href: '#performance' },
  { label: 'Docker', href: '#docker' },
]

export const INSTALL_COMMANDS = {
  windows: {
    label: 'Windows',
    command:
      'Invoke-WebRequest https://kumo.jmaxdev.site/install.ps1 -UseBasicParsing | Invoke-Expression',
  },
  unix: {
    label: 'macOS / Linux',
    command: 'curl -fsSL https://kumo.jmaxdev.site/install.sh | bash',
  },
  docker: {
    label: 'Docker',
    command: 'docker pull ghcr.io/jmaxdev/kumo:latest',
  },
}

export const HERO_BADGES = [
  { icon: '⚡', label: 'Built in Rust' },
  { icon: '🔒', label: 'BLAKE3 CAS' },
  { icon: '🛡️', label: 'Sandboxed' },
  { icon: '🌐', label: 'Linux · macOS · Windows' },
]

export const PROBLEMS = [
  {
    icon: '🐌',
    title: 'Installs that take forever',
    description:
      'Most package managers re-download the same tarballs for every project, wasting bandwidth and disk space.',
  },
  {
    icon: '⚠️',
    title: 'Supply chain attacks',
    description:
      'A single typosquatted or compromised package can exfiltrate secrets, mine crypto, or pivot into your CI.',
  },
  {
    icon: '💾',
    title: 'Disk bloat',
    description:
      'Hundreds of megabytes of duplicated dependencies across projects, with no deduplication.',
  },
]

export const FEATURES = [
  {
    icon: '⚡',
    title: 'BLAKE3 Content-Addressable Store',
    description:
      'A global store keyed by cryptographic content hash. Every package is downloaded once and hardlinked across all your projects.',
  },
  {
    icon: '🛡️',
    title: 'OS-Level Sandboxing',
    description:
      'Lifecycle scripts run inside native sandboxes: Bubblewrap on Linux, Apple Sandbox on macOS, Win32Job on Windows.',
  },
  {
    icon: '🔍',
    title: 'Typosquatting Detection',
    description:
      'Levenshtein distance engine plus a 24-hour release-age threshold catches lookalike packages before they hit disk.',
  },
  {
    icon: '📊',
    title: 'Vulnerability Scanning',
    description:
      'Every dependency is checked against the OSV database. Configurable severity thresholds let you fail builds on critical CVEs.',
  },
  {
    icon: '📜',
    title: 'License Compliance',
    description:
      'Allowlist SPDX identifiers so unlicensed or copyleft packages never enter your codebase silently.',
  },
  {
    icon: '🚀',
    title: 'Zero-Config Build Caching',
    description:
      'Deterministic BLAKE3 hashes for kumo run build skip unchanged scripts and restore outputs in milliseconds.',
  },
]

export const SECURITY_PILLARS = [
  {
    id: 'sandbox',
    title: 'Script Sandboxing',
    icon: '🛡️',
    description:
      'Postinstall scripts are blocked by default. When allowed, they run inside a native OS sandbox with the network namespace unshared, the filesystem mounted read-only except for the package directory, and all environment variables purged — including CI tokens matching SECRET, PASSWORD, PRIVATE_KEY, or _TOKEN.',
    code: `{
  "allow_postinstall": false,
  "trusted_packages": ["electron", "vite", "esbuild"]
}`,
  },
  {
    id: 'typo',
    title: 'Typosquatting Protection',
    icon: '🎯',
    description:
      'A Levenshtein engine compares every new package against your existing dependencies and a protected list. Names within edit distance 1 (≤10 chars) or 2 (>10 chars) are rejected. A 24-hour minimum release age blocks freshly published copycats.',
    code: `{
  "minimum_release_age": 1440,
  "protected_packages": ["react", "next", "vite"]
}`,
  },
  {
    id: 'vuln',
    title: 'Vulnerability Scanning',
    icon: '🚨',
    description:
      'Every resolved version is matched against the OSV database. When a vulnerability crosses your configured threshold, installation aborts before any bytes touch disk.',
    code: `{
  "min_severity": "high"
}`,
  },
  {
    id: 'license',
    title: 'License Compliance',
    icon: '📜',
    description:
      'Whitelist SPDX license identifiers to keep your legal team happy. By default only MIT, Apache-2.0, ISC, and BSD-3-Clause are allowed.',
    code: `{
  "allowed_licenses": ["MIT", "Apache-2.0", "ISC"]
}`,
  },
  {
    id: 'integrity',
    title: 'Checksum Integrity',
    icon: '🔐',
    description:
      'Every downloaded tarball is verified with BLAKE3 and SHA hashes. A tampered or swapped package fails the install with a clear error.',
    code: `# Triggered automatically during install
# kumo verifies BLAKE3 + SHA on every download`,
  },
  {
    id: 'trust',
    title: 'Trust Policy & Provenance',
    icon: '🪪',
    description:
      'Tracks three trust levels based on SLSA provenance and registry signatures. no-downgrade mode prevents attackers from publishing a less-trusted version to override a verified release.',
    code: `{
  "trust_policy": "no-downgrade"
}`,
  },
]

export const PERF_STATS = [
  { value: '<100ms', label: 'Cached lockfile resolution' },
  { value: 'BLAKE3', label: 'Cryptographic CAS keying' },
  { value: '0', label: 'Re-downloads across projects' },
]

export const PERF_NOTE =
  'Built in Rust with LTO and size optimization. Single static binary, no runtime dependencies — ready for any Linux distro, macOS, or Windows.'

export const TERMINAL_DEMO = [
  { type: 'cmd', text: '$ kumo install' },
  { type: 'out', text: '🔒 Security scan... 142 packages verified' },
  { type: 'out', text: '⚡ BLAKE3 cache hit — 0 downloads' },
  { type: 'out', text: '✅ Linked 142 packages in 23ms', muted: true },
  { type: 'spacer' },
  { type: 'cmd', text: '$ kumo run build' },
  { type: 'out', text: '🔑 BLAKE3 hash matches cache' },
  { type: 'out', text: '⚡ Restored build output from store' },
  { type: 'out', text: '✨ Build completed in 0ms (cached)', success: true },
  { type: 'spacer' },
  { type: 'cmd', text: '$ kx cowsay "Hello Kumo!"' },
  { type: 'out', text: '  ____________' },
  { type: 'out', text: ' < Hello Kumo! >' },
  { type: 'out', text: '  ------------' },
  { type: 'out', text: '        \\   ^__^' },
  { type: 'out', text: '         \\  (oo)\\_______' },
  { type: 'out', text: '            (__)\\       )\\/\\' },
  { type: 'out', text: '                ||----w |' },
  { type: 'out', text: '                ||     ||' },
]

export const DOCKER_DOCKERFILE = `FROM ghcr.io/jmaxdev/kumo

# Install the Node.js version you need
RUN kumo runtime use 22

WORKDIR /app
COPY package.json kumo.lock* ./
RUN kumo fetch && kumo ci

COPY . .
CMD ["start"]`

export const DOCKER_FEATURES = [
  'Minimal debian:stable-slim base',
  'Multi-arch: linux/amd64 and linux/arm64',
  'Built-in runtime manager for any Node.js version',
  'CI-optimized caching strategies',
]

export const FOOTER_LINKS = [
  {
    title: 'Project',
    links: [
      { label: 'GitHub', href: BRAND.github },
      { label: 'Documentation', href: BRAND.docs },
      { label: 'Releases', href: `${BRAND.github}/releases` },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Security Policy', href: `${BRAND.github}/blob/main/app/docs/security.md` },
      { label: 'Benchmark', href: `${BRAND.github}/blob/main/app/docs/benchmark.md` },
      { label: 'Contributing', href: `${BRAND.github}/blob/main/app/docs/contributing.md` },
    ],
  }
]

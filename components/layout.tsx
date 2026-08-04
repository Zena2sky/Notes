import Link from 'next/link';
import { navItems, site } from '@/data/site';

export function Header() {
  return <header className="sticky top-0 z-20 border-b border-zinc-900/10 bg-paper/85 backdrop-blur dark:border-white/10 dark:bg-zinc-950/85">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
      <Link href="/" className="text-sm font-semibold tracking-tight">{site.name}</Link>
      <nav aria-label="주요 메뉴" className="hidden items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300 lg:flex">
        {navItems.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-accent dark:hover:text-amber-300">{item.label}</Link>)}
      </nav>
      <div className="flex items-center gap-2 text-xs" aria-label="언어 선택">
        <Link href="/" aria-current="page" className="font-semibold text-accent dark:text-amber-300">한국어</Link><span className="text-zinc-400">|</span><Link href="/en" className="text-zinc-500 dark:text-zinc-400">English</Link>
      </div>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="border-t border-zinc-900/10 dark:border-white/10"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between"><p>© 2026 {site.name}. 꾸준히 배우고 쉽게 설명하기 위한 기록.</p><p>정적 사이트 · MDX 확장 준비 · 다국어 구조 준비</p></div></footer>;
}

export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return <section className="mx-auto max-w-6xl px-5 py-16"><div className="mb-8 max-w-3xl">{eyebrow && <p className="mb-3 text-sm font-medium text-accent dark:text-amber-300">{eyebrow}</p>}<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2></div>{children}</section>;
}

export function Card({ children }: { children: React.ReactNode }) {
  return <article className="rounded-3xl border border-zinc-900/10 bg-white/45 p-6 shadow-soft dark:border-white/10 dark:bg-white/5">{children}</article>;
}

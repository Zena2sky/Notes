import Link from 'next/link';
import { Card, Section } from '@/components/layout';
import { featuredNotes, home, projects } from '@/data/site';

export default function HomePage() {
  return <>
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
      <div><p className="mb-5 text-sm font-medium text-accent dark:text-amber-300">{home.eyebrow}</p><h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{home.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{home.intro}</p><div className="mt-9 flex gap-3"><Link className="rounded-full bg-zinc-900 px-5 py-3 text-sm text-white dark:bg-white dark:text-zinc-950" href="/learning">학습 노트 보기</Link><Link className="rounded-full border border-zinc-900/15 px-5 py-3 text-sm dark:border-white/15" href="/about">방향성 읽기</Link></div></div>
      <Card><h2 className="text-lg font-semibold">현재 공부하는 질문</h2><ul className="mt-5 space-y-4 text-zinc-650 dark:text-zinc-300">{home.focus.map((item) => <li key={item} className="border-l-2 border-accent/40 pl-4">{item}</li>)}</ul></Card>
    </section>
    <Section eyebrow="Learning Notes" title="이해한 내용을 다른 사람도 이해할 수 있도록 정리합니다."><div className="grid gap-5 md:grid-cols-3">{featuredNotes.map((note) => <Card key={note.slug}><p className="text-xs text-accent dark:text-amber-300">{note.tags.join(' · ')}</p><h3 className="mt-3 text-xl font-semibold">{note.title}</h3><p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{note.summary}</p><Link href={`/learning/${note.slug}`} className="mt-5 inline-block text-sm font-medium text-accent dark:text-amber-300">읽기 →</Link></Card>)}</div></Section>
    <Section eyebrow="Projects" title="최근 프로젝트는 원리를 확인하고 교육적으로 바꾸는 과정입니다."><div className="grid gap-5 md:grid-cols-2">{projects.map((project) => <Card key={project.title}><p className="text-sm text-zinc-500">{project.status}</p><h3 className="mt-2 text-2xl font-semibold">{project.title}</h3><p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p><p className="mt-5 text-sm text-zinc-500">{project.tech.join(' · ')}</p></Card>)}</div></Section>
  </>;
}

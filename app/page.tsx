import Link from 'next/link';
import { Card, Section } from '@/components/layout';
import { featuredNotes, home, projects } from '@/data/site';

export default function HomePage() {
  return <>
    <section className="border-b border-zinc-900/10 bg-white dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col justify-center px-5 py-24 md:py-32">
        <p className="mb-8 max-w-2xl text-sm font-medium tracking-[0.22em] text-accent dark:text-amber-300">
          {home.eyebrow}
        </p>
        <h1 className="max-w-5xl whitespace-pre-line text-6xl font-semibold leading-[0.95] tracking-[-0.055em] text-black dark:text-white md:text-8xl lg:text-9xl">
          {home.title}
        </h1>
        <p className="mt-10 max-w-3xl whitespace-pre-line text-xl leading-9 text-zinc-650 dark:text-zinc-300 md:text-2xl md:leading-10">
          {home.intro}
        </p>
        <div className="mt-6 h-px w-16 bg-accent dark:bg-amber-300" aria-hidden="true" />
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200" href="/learning">
            학습 노트 보기
          </Link>
          <Link className="inline-flex rounded-full border border-zinc-900/15 px-6 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-900/30 dark:border-white/15 dark:text-white dark:hover:border-white/30" href="/about">
            방향성 읽기
          </Link>
        </div>
      </div>
    </section>
    <Section eyebrow="Learning Notes" title="이해한 내용을 다른 사람도 이해할 수 있도록 정리합니다."><div className="grid gap-5 md:grid-cols-3">{featuredNotes.map((note) => <Card key={note.slug}><p className="text-xs text-accent dark:text-amber-300">{note.tags.join(' · ')}</p><h3 className="mt-3 text-xl font-semibold">{note.title}</h3><p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{note.summary}</p><Link href={`/learning/${note.slug}`} className="mt-5 inline-block text-sm font-medium text-accent dark:text-amber-300">읽기 →</Link></Card>)}</div></Section>
    <Section eyebrow="Projects" title="최근 프로젝트는 원리를 확인하고 교육적으로 바꾸는 과정입니다."><div className="grid gap-5 md:grid-cols-2">{projects.map((project) => <Card key={project.title}><p className="text-sm text-zinc-500">{project.status}</p><h3 className="mt-2 text-2xl font-semibold">{project.title}</h3><p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p><p className="mt-5 text-sm text-zinc-500">{project.tech.join(' · ')}</p></Card>)}</div></Section>
  </>;
}

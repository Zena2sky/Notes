import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: { title: site.name, description: site.description, type: 'website', locale: 'ko_KR' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko" suppressHydrationWarning><body><Header /><main>{children}</main><Footer /></body></html>;
}

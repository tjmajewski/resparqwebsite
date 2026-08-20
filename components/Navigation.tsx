import SiteNav from '@/components/site/SiteNav';

export default function Navigation({ variant = 'landing' }: { variant?: 'landing' | 'blog' }) {
  return <SiteNav variant={variant === 'landing' ? 'landing' : 'sub'} />;
}

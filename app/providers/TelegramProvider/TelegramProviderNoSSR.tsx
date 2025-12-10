import dynamic from 'next/dynamic';

const TelegramProviderNoSSR = dynamic(
  () => import('./TelegramProvider').then((mod) => mod.TelegramProvider),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <TelegramProviderNoSSR>{children}</TelegramProviderNoSSR>;
}

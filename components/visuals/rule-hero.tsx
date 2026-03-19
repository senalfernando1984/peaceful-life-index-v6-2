const MAP: Record<string, string> = {
  'do-good': '/rules/do-good.svg',
  'do-the-right-thing': '/rules/do-the-right-thing.svg',
  'do-no-harm': '/rules/do-no-harm.svg',
  'treat-everyone-equally': '/rules/treat-everyone-equally.svg',
  'love-yourself-and-all': '/rules/love-yourself-and-all.svg',
  'eat-healthy-live-healthy': '/rules/eat-healthy-live-healthy.svg',
  'achieving-financial-freedom': '/rules/achieving-financial-freedom.svg',
  'be-humble': '/rules/be-humble.svg',
  'stay-calm-and-eliminate-anger': '/rules/stay-calm-and-eliminate-anger.svg',
  'accept-change-embrace-impermanence': '/rules/accept-change-embrace-impermanence.svg',
};

export function RuleHero({ slug, title }: { slug: string; title: string }) {
  const src = MAP[slug] ?? '/rules/do-good.svg';

  return (
    <div className="overflow-hidden rounded-3xl border border-pli-border bg-white shadow-soft">
      <div className="mx-auto flex w-full max-w-[760px] items-center justify-center p-2 sm:p-3">
        <img
          src={src}
          alt={`${title} visual`}
          className="h-auto max-h-[210px] w-full object-contain sm:max-h-[260px] lg:max-h-[320px]"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.endsWith('/rules/do-good.svg')) {
              target.src = '/rules/do-good.svg';
            }
          }}
        />
      </div>
    </div>
  );
}

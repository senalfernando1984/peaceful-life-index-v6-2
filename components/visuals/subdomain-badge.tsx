const COLORS = [
  'bg-emerald-50 text-emerald-700 border-emerald-200',
  'bg-sky-50 text-sky-700 border-sky-200',
  'bg-amber-50 text-amber-700 border-amber-200',
  'bg-violet-50 text-violet-700 border-violet-200',
  'bg-rose-50 text-rose-700 border-rose-200',
];

function glyph(label: string) {
  const value = label.toLowerCase();
  if (value.includes('help') || value.includes('support')) return '✦';
  if (value.includes('sleep')) return '☾';
  if (value.includes('hydration') || value.includes('water')) return '◔';
  if (value.includes('physical') || value.includes('activity') || value.includes('movement')) return '→';
  if (value.includes('money') || value.includes('budget') || value.includes('financial')) return '¤';
  if (value.includes('calm') || value.includes('anger') || value.includes('de-escalation')) return '◌';
  if (value.includes('forgive') || value.includes('compassion') || value.includes('warmth')) return '♡';
  if (value.includes('fair') || value.includes('equal') || value.includes('bias') || value.includes('dignity')) return '◎';
  if (value.includes('plan') || value.includes('change') || value.includes('accept')) return '↺';
  return '•';
}

export function SubdomainBadge({ label, index = 0 }: { label: string; index?: number }) {
  const color = COLORS[index % COLORS.length];
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${color}`}>
      <span aria-hidden="true">{glyph(label)}</span>
      <span>{label}</span>
    </div>
  );
}

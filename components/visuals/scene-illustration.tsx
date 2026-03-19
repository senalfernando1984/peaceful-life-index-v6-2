import Image from 'next/image';
import { AssessmentCharacter } from '@/types/pli';

const SUBDOMAIN_SCENE_MAP: Record<string, string> = {
  'Spontaneous helping': 'help-colleague',
  'Emotional support': 'distressed-friend',
  'Contribution at home': 'wash-dishes',
  'Honesty': 'correct-mistake',
  'Environmental harm': 'waste-disposal',
  'Smoking / substance use': 'refuse-cigarette',
  'Fairness in discussion': 'invite-discussion',
  'Self-compassion': 'self-kindness',
  'Food': 'healthy-food',
  'Hydration': 'hydration',
  'Budgeting': 'budget-planning',
  'Impulse spending': 'impulse-pause',
  'Response delay': 'pause-react',
  'Flexibility': 'adapt-change',
  'Plan B mindset': 'adapt-change',
};

export function SceneIllustration({
  subdomain,
  character = 'nimal',
}: {
  subdomain: string;
  character?: AssessmentCharacter;
}) {
  const scene = SUBDOMAIN_SCENE_MAP[subdomain];
  if (!scene) return null;

  const src = `/scenes/${scene}-${character}.svg`;

  return (
    <div className="overflow-hidden rounded-3xl border border-pli-border bg-white shadow-soft">
      <Image
        src={src}
        alt={`${subdomain} scene`}
        width={480}
        height={250}
        className="h-auto w-full object-cover"
        sizes="(max-width: 768px) 100vw, 480px"
      />
    </div>
  );
}

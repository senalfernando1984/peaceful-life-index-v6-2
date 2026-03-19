import Image from 'next/image';
import { AssessmentCharacter } from '@/types/pli';

export function CharacterIllustration({
  character,
  size = 'md',
  className = '',
}: {
  character: AssessmentCharacter;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const src = character === 'maya' ? '/characters/maya.svg' : '/characters/nimal.svg';
  const dim = size === 'sm' ? 92 : size === 'md' ? 156 : 192;
  const motion = size === 'lg' ? 'float-gentle-delayed' : 'float-gentle';
  return (
    <div className={`relative shrink-0 ${className}`} aria-hidden="true" style={{ width: dim }}>
      <Image
        src={src}
        alt=""
        width={dim}
        height={dim}
        className={`h-auto max-w-full drop-shadow-[0_16px_30px_rgba(15,94,100,0.14)] ${motion}`}
        priority
      />
    </div>
  );
}

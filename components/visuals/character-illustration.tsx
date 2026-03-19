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
  const dim = size === 'sm' ? 88 : size === 'md' ? 150 : 220;
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <Image
        src={src}
        alt=""
        width={dim}
        height={dim}
        className={size === 'lg' ? 'float-gentle-delayed' : 'float-gentle'}
        priority
      />
    </div>
  );
}

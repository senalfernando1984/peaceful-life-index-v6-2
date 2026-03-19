'use client';

import Link from 'next/link';
import { useState } from 'react';
import { saveAssessmentCharacter } from '@/lib/storage';
import { AssessmentCharacter } from '@/types/pli';
import { CharacterIllustration } from '@/components/visuals/character-illustration';

const CHARACTER_CARDS: Array<{
  id: AssessmentCharacter;
  name: string;
  description: string;
}> = [
  {
    id: 'nimal',
    name: 'Nimal',
    description: 'Follow the assessment through the male character pathway.'
  },
  {
    id: 'maya',
    name: 'Maya',
    description: 'Follow the assessment through the female character pathway.'
  }
];

export function AssessmentCharacterSelector() {
  const [selected, setSelected] = useState<AssessmentCharacter>('nimal');

  const choose = (character: AssessmentCharacter) => {
    setSelected(character);
    saveAssessmentCharacter(character);
  };

  return (
    <div className="card p-8">
      <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Choose your assessment character</p>
      <h2 className="mt-2 text-2xl font-semibold">Select the story pathway that feels right for you</h2>
      <p className="mt-3 text-sm text-pli-slate">
        The scoring is the same for both pathways. Only the story perspective changes so the assessment feels more natural and relatable.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {CHARACTER_CARDS.map(card => {
          const active = selected === card.id;
          return (
            <button
              key={card.id}
              type="button"
              onClick={() => choose(card.id)}
              className={`rounded-3xl border p-5 text-left transition ${active ? 'border-pli-teal bg-pli-bg shadow-sm' : 'border-pli-border bg-white hover:-translate-y-0.5 hover:shadow-sm'}`}
            >
              <div className="flex items-center gap-4">
                <CharacterIllustration character={card.id} size="md" />
                <div>
                  <p className="text-lg font-semibold text-pli-ink">{card.name}</p>
                  <p className="mt-2 text-sm text-pli-slate">{card.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.14em] text-pli-gold">
                    {active ? 'Selected' : 'Tap to select'}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <Link
          href="/assessment/run"
          className="rounded-full bg-pli-teal px-6 py-3 font-medium text-white"
        >
          Continue with {selected === 'nimal' ? 'Nimal' : 'Maya'}
        </Link>
      </div>
    </div>
  );
}

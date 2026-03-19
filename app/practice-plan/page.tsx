'use client';

import { useEffect, useState } from 'react';
import { getLatestAssessment } from '@/lib/storage';
import { buildPracticePlan } from '@/lib/practice-plan';
import { MonthlyPracticePlan } from '@/components/monthly-practice-plan';
import { AssessmentResult } from '@/types/pli';
import { CharacterIllustration } from '@/components/visuals/character-illustration';

export default function PracticePlanPage() {
  const [latest, setLatest] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    setLatest(getLatestAssessment());
  }, []);

  if (!latest) {
    return (
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">My Practice Plan</h1>
        <p className="mt-3 text-pli-slate">
          Complete your PLI assessment first. After that, this page will generate a monthly practice plan based on your weakest domain and subdomains.
        </p>
      </div>
    );
  }

  const plan = buildPracticePlan(latest);
  const character = latest.selectedCharacter ?? 'nimal';

  return (
    <div className="space-y-6">
      <div className="card overflow-hidden p-0">
        <div className="grid gap-6 bg-gradient-to-br from-white via-[#f7f3ec] to-[#eef7f5] p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Next Month Improvement Plan</p>
            <h1 className="mt-2 text-3xl font-semibold">My Practice Plan</h1>
            <p className="mt-3 text-pli-slate">
              This plan uses your latest PLI results to recommend domain-specific and subdomain-specific SBCC activities to practice over the next month.
            </p>
          </div>
          <CharacterIllustration character={character} size="lg" />
        </div>
      </div>
      <MonthlyPracticePlan plan={plan} />
    </div>
  );
}

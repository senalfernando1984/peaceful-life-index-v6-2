'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getLatestAssessment, purgeLegacyPliStorage } from '@/lib/storage';
import { buildPracticePlan } from '@/lib/practice-plan';
import { MonthlyPracticePlan } from '@/components/monthly-practice-plan';
import { AssessmentResult } from '@/types/pli';

export default function PracticePlanPage() {
  const [latest, setLatest] = useState<AssessmentResult | null | undefined>(undefined);

  useEffect(() => {
    purgeLegacyPliStorage();
    setLatest(getLatestAssessment());
  }, []);

  if (latest === undefined) {
    return (
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">My Practice Plan</h1>
        <p className="mt-3 text-pli-slate">Loading your latest PLI result...</p>
      </div>
    );
  }

  if (!latest) {
    return (
      <div className="card p-8">
        <h1 className="text-3xl font-semibold">My Practice Plan</h1>
        <p className="mt-3 text-pli-slate">
          Complete your PLI assessment first. After that, this page will generate a monthly practice plan based on your weakest domain and subdomains.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/assessment" className="rounded-full bg-pli-teal px-5 py-3 text-sm font-medium text-white">
            Start assessment
          </Link>
          <Link href="/results" className="rounded-full border border-pli-border px-5 py-3 text-sm font-medium text-pli-ink">
            Open dashboard
          </Link>
        </div>
      </div>
    );
  }

  const plan = buildPracticePlan(latest);

  return (
    <div className="space-y-6">
      <div className="card p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Next Month Improvement Plan</p>
        <h1 className="mt-2 text-3xl font-semibold">My Practice Plan</h1>
        <p className="mt-3 text-pli-slate">
          This plan uses your latest PLI results to recommend domain-specific and subdomain-specific SBCC activities to practice over the next month.
        </p>
      </div>
      <MonthlyPracticePlan plan={plan} />
    </div>
  );
}

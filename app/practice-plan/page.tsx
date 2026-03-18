'use client';

import { getLatestAssessment } from '@/lib/storage';
import { buildPracticePlan } from '@/lib/practice-plan';
import { MonthlyPracticePlan } from '@/components/monthly-practice-plan';

export default function PracticePlanPage() {
  const latest = getLatestAssessment();

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

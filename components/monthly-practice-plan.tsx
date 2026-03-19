'use client';

import { MONTHLY_PRACTICE_RICH } from '@/data/monthly-practice-rich';
import { PracticePlan } from '@/types/practice-plan';

export function MonthlyPracticePlan({ plan }: { plan: PracticePlan }) {
  const entries = MONTHLY_PRACTICE_RICH.filter(
    item => item.domain === plan.weakestDomain || plan.weakestSubdomains.includes(item.subdomain)
  ).slice(0, 8);

  const fallback = plan.activities.map(activity => ({
    domain: activity.domain,
    subdomain: activity.subdomain,
    title: activity.title,
    whatToDo: activity.whatToDo,
    whyItHelps: activity.whyItHelps,
    howOften: activity.frequency,
    weeklyCheck: activity.weeklyCheckLabel,
    monthlyGoal: 'Practice this consistently over the next month and review your progress weekly.',
  }));

  const finalEntries = entries.length > 0 ? entries : fallback;

  return (
    <div className="space-y-5">
      <div className="card p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Your growth focus for this month</p>
        <h2 className="mt-2 text-2xl font-semibold">{plan.weakestDomain}</h2>
        <p className="mt-4 text-base leading-8 text-pli-slate">
          Focus especially on: <strong className="text-pli-ink">{plan.weakestSubdomains.join(' and ')}</strong>
        </p>
      </div>

      <div className="card p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Monthly practice table</p>
        <div className="mt-5 space-y-4">
          {finalEntries.map((activity, index) => (
            <div key={`${activity.domain}-${activity.subdomain}-${index}`} className="rounded-3xl border border-pli-border bg-pli-bg p-5 sm:p-6">
              <h3 className="text-2xl font-semibold text-pli-ink">{activity.title}</h3>
              <p className="mt-4 text-base leading-8 text-pli-slate">{activity.whatToDo}</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Domain</p>
                  <p className="mt-2 text-xl font-medium text-pli-ink">{activity.domain}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Subdomain</p>
                  <p className="mt-2 text-xl font-medium text-pli-ink">{activity.subdomain}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">How often</p>
                  <p className="mt-2 text-xl font-medium text-pli-ink">{activity.howOften}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Weekly check</p>
                  <p className="mt-2 text-xl font-medium text-pli-ink">{activity.weeklyCheck}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 rounded-2xl bg-white p-4 sm:p-5">
                <p className="text-base leading-8 text-pli-slate">
                  <strong className="text-pli-ink">Why it helps:</strong> {activity.whyItHelps}
                </p>
                <p className="text-base leading-8 text-pli-slate">
                  <strong className="text-pli-ink">Monthly goal:</strong> {activity.monthlyGoal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Next assessment</p>
        <p className="mt-3 text-base leading-8 text-pli-slate">
          Your next recommended PLI assessment date: <strong className="text-pli-ink">{plan.nextAssessmentDate}</strong>
        </p>
        <p className="mt-3 text-base leading-8 text-pli-slate">
          Practice these activities over the next 30 days, revisit them weekly, and reassess on the date above to reflect on your progress.
        </p>
        <p className="mt-3 text-base leading-8 text-pli-slate">
          <strong className="text-pli-ink">Reflection prompt:</strong> {plan.reflectionPrompt}
        </p>
      </div>
    </div>
  );
}

'use client';

import { PracticePlan } from '@/types/practice-plan';

export function MonthlyPracticePlan({ plan }: { plan: PracticePlan }) {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Your growth focus for this month</p>
        <h2 className="mt-2 text-2xl font-semibold">{plan.weakestDomain}</h2>
        <p className="mt-3 text-sm text-pli-slate">
          Focus especially on: <strong className="text-pli-ink">{plan.weakestSubdomains.join(' and ')}</strong>
        </p>
      </div>

      <div className="card p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Monthly practice table</p>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-pli-bg">
                <th className="border border-pli-border px-3 py-2 text-left">Activity</th>
                <th className="border border-pli-border px-3 py-2 text-left">Domain</th>
                <th className="border border-pli-border px-3 py-2 text-left">Subdomain</th>
                <th className="border border-pli-border px-3 py-2 text-left">How often</th>
                <th className="border border-pli-border px-3 py-2 text-left">Weekly check</th>
              </tr>
            </thead>
            <tbody>
              {plan.activities.map(activity => (
                <tr key={activity.id}>
                  <td className="border border-pli-border px-3 py-3 align-top">
                    <p className="font-medium text-pli-ink">{activity.title}</p>
                    <p className="mt-1 text-pli-slate">{activity.whatToDo}</p>
                    <p className="mt-2 text-xs text-pli-slate"><strong className="text-pli-ink">Why it helps:</strong> {activity.whyItHelps}</p>
                  </td>
                  <td className="border border-pli-border px-3 py-3 align-top">{activity.domain}</td>
                  <td className="border border-pli-border px-3 py-3 align-top">{activity.subdomain}</td>
                  <td className="border border-pli-border px-3 py-3 align-top">{activity.frequency}</td>
                  <td className="border border-pli-border px-3 py-3 align-top">{activity.weeklyCheckLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Next assessment</p>
        <p className="mt-3 text-lg text-pli-ink">
          Your next recommended PLI assessment date: <strong>{plan.nextAssessmentDate}</strong>
        </p>
        <p className="mt-3 text-sm text-pli-slate">
          Practice these activities over the next 30 days, revisit them weekly, and reassess on the date above to reflect on your progress.
        </p>
        <p className="mt-3 text-sm text-pli-slate">
          <strong className="text-pli-ink">Reflection prompt:</strong> {plan.reflectionPrompt}
        </p>
      </div>
    </div>
  );
}

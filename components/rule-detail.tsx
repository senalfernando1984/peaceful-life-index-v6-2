'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { INTERVENTIONS } from '@/data/interventions';
import { QUESTIONNAIRE_ITEMS } from '@/data/questionnaire';
import { RULES } from '@/data/rules';
import { RULE_BOOK_MESSAGES } from '@/data/rule-book-messages';
import { TAILORED_SBCC } from '@/data/sbcc-tailored';
import { getAssessments, getLatestAssessment } from '@/lib/storage';
import { scoreBand, scoreBandLabel } from '@/lib/scoring';
import { TrendChart } from '@/components/charts/trend-chart';
import { formatDate } from '@/lib/utils';
import { RuleHero } from '@/components/visuals/rule-hero';
import { SubdomainBadge } from '@/components/visuals/subdomain-badge';

function tailoredPattern(score: number | null) {
  if (score === null) return 'moderate';
  const band = scoreBand(score);
  if (band === 'very-low') return 'very low';
  if (band === 'low' || band === 'emerging') return 'low';
  if (band === 'moderate') return 'moderate';
  return 'good/strong but uneven';
}

export function RuleDetail({ slug }: { slug: string }) {
  const rule = RULES.find(item => item.slug === slug);
  const [trend, setTrend] = useState<Array<{ label: string; pli: number }>>([]);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const assessments = getAssessments();
    if (!rule) return;
    setTrend(
      [...assessments].reverse().map(item => ({
        label: formatDate(item.createdAt),
        pli: item.domainScores.find(entry => entry.ruleId === rule.id)?.adjusted ?? 0,
      }))
    );
    const latest = getLatestAssessment();
    setScore(latest?.domainScores.find(entry => entry.ruleId === rule.id)?.adjusted ?? null);
  }, [rule]);

  const interventions = useMemo(() => {
    if (!rule) return [];
    const band = score === null ? 'moderate' : scoreBand(score);
    const normalized =
      ['good', 'strong', 'flourishing'].includes(band)
        ? 'maintenance'
        : band === 'emerging'
          ? 'low'
          : (band as 'maintenance' | 'moderate' | 'low' | 'very-low');

    return INTERVENTIONS.filter(item => item.ruleId === rule.id && item.scoreBand === normalized);
  }, [rule, score]);

  const subdomainBundles = useMemo(() => {
    if (!rule) return [];
    const pattern = tailoredPattern(score);
    return TAILORED_SBCC.filter(item => item.ruleId === rule.id && item.scorePattern === pattern);
  }, [rule, score]);

  if (!rule) return <div className="card p-8">Rule not found.</div>;
  const itemCount = QUESTIONNAIRE_ITEMS.filter(i => i.ruleId === rule.id).length;
  const bookMessage = RULE_BOOK_MESSAGES[rule.id];

  return (
    <div className="space-y-5">
      <div className="card p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Golden Rule detail</p>
        <h1 className="mt-2 text-3xl font-semibold">{rule.title}</h1>
        <p className="mt-3 text-sm text-pli-slate">{rule.definition}</p>
        <div className="mt-3">
          <RuleHero slug={rule.slug} title={rule.title} />
        </div>
        <p className="mt-4 text-sm text-pli-slate">
          <strong className="text-pli-ink">Why it matters:</strong> {rule.whyItMatters}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {rule.subdomains.map((tag, index) => (
            <a key={tag} href={`#subdomain-${index + 1}`} className="inline-block">
              <SubdomainBadge label={tag} index={index} />
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-end gap-5">
          <div>
            <p className="text-sm text-pli-slate">Assessment scenarios in this domain</p>
            <p className="mt-1 text-xl font-semibold text-pli-ink">{itemCount}</p>
          </div>
          <div>
            <p className="text-sm text-pli-slate">Current domain score</p>
            <p className="mt-1 text-4xl font-semibold text-pli-teal">{score === null ? '—' : `${score.toFixed(1)}/10`}</p>
            {score !== null && <p className="mt-2 text-sm text-pli-slate">Current band: {scoreBandLabel(scoreBand(score))}</p>}
          </div>
        </div>
      </div>

      <div className="card p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Trend in this domain</p>
        <TrendChart data={trend} />
      </div>

      <div className="card p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Domain-level support</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          {interventions.map(intervention => (
            <div key={intervention.id} className="rounded-2xl border border-pli-border bg-pli-bg p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">{intervention.scoreBand}</p>
              <h2 className="mt-2 text-xl font-semibold">{intervention.title}</h2>
              <p className="mt-3 text-sm text-pli-slate">
                <strong className="text-pli-ink">What to do:</strong> {intervention.whatToDo}
              </p>
              <p className="mt-3 text-sm text-pli-slate">
                <strong className="text-pli-ink">Why it helps:</strong> {intervention.whyItHelps}
              </p>
              <div className="mt-4 space-y-3 rounded-2xl bg-white p-4 text-sm text-pli-slate">
                <p><strong className="text-pli-ink">Quick action:</strong> {intervention.quickAction}</p>
                <p><strong className="text-pli-ink">Weekly practice:</strong> {intervention.weeklyPractice}</p>
                <p><strong className="text-pli-ink">Longer habit:</strong> {intervention.longerHabit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="card p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Subdomain-tailored SBCC</p>
          <h2 className="mt-2 text-2xl font-semibold">Suggested monthly activities for this domain</h2>
          <p className="mt-3 text-sm text-pli-slate">
            These activity bundles are drawn from your evidence workbook and aligned to the current domain score pattern.
          </p>
        </div>

        {subdomainBundles.map((bundle, index) => (
          <div key={`${bundle.ruleId}-${bundle.subdomain}`} id={`subdomain-${index + 1}`} className="card p-6">
            <div className="flex flex-wrap items-center gap-3">
              <SubdomainBadge label={bundle.subdomain} index={index} />
              <span className="text-sm text-pli-slate">{bundle.scorePattern}</span>
            </div>
            <p className="mt-4 text-sm text-pli-slate">
              <strong className="text-pli-ink">When to use:</strong> {bundle.whenToUse}
            </p>
            <p className="mt-3 text-sm text-pli-slate">
              <strong className="text-pli-ink">Recommended focus:</strong> {bundle.recommendedFocus}
            </p>
            <div className="mt-5 grid gap-3 lg:grid-cols-2">
              {bundle.activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="rounded-2xl border border-pli-border bg-pli-bg p-4 text-sm leading-6 text-pli-slate">
                  <strong className="text-pli-ink">Activity {activityIndex + 1}:</strong> {activity}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-white p-4 text-sm text-pli-slate">
              <p><strong className="text-pli-ink">Why these fit this weakness:</strong> {bundle.whyTheseFit}</p>
              <p className="mt-3"><strong className="text-pli-ink">Suggested monthly use:</strong> {bundle.monthlyUse}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6 text-sm text-pli-slate">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">{bookMessage.title}</p>
        <p className="mt-3 text-base leading-7 text-pli-ink">“{bookMessage.message}”</p>
      </div>

      <Link href="/results" className="inline-flex rounded-full border border-pli-border px-4 py-2 text-sm">
        Back to dashboard
      </Link>
    </div>
  );
}

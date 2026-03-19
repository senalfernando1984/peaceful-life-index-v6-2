'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { RULES } from '@/data/rules';
import { PliRadarChart } from '@/components/charts/radar-chart';
import { TrendChart } from '@/components/charts/trend-chart';
import { InteractionGrid } from '@/components/charts/interaction-grid';
import { ClearDataButton } from '@/components/clear-data-button';
import { getAssessments, getLatestAssessment, purgeLegacyPliStorage } from '@/lib/storage';
import { formatDate } from '@/lib/utils';
import { scoreBandLabel } from '@/lib/scoring';
import { AssessmentResult } from '@/types/pli';
import { INTERVENTIONS } from '@/data/interventions';
import { buildPracticePlan } from '@/lib/practice-plan';
import { CharacterIllustration } from '@/components/visuals/character-illustration';
import { RuleHero } from '@/components/visuals/rule-hero';

function overallBandLabel(score: number) {
  if (score < 2) return 'Very Low';
  if (score < 3.5) return 'Low';
  if (score < 5) return 'Emerging';
  if (score < 6.5) return 'Moderate';
  if (score < 7.5) return 'Good';
  if (score < 8.5) return 'Strong';
  return 'Flourishing';
}

export function ResultsDashboard() {
  const [latest, setLatest] = useState<AssessmentResult | null>(null);
  const [all, setAll] = useState<AssessmentResult[]>([]);

  useEffect(() => {
    purgeLegacyPliStorage();
    setLatest(getLatestAssessment());
    setAll(getAssessments());
  }, []);

  const domainScores = latest?.domainScores ?? [];
  const sorted = [...domainScores].sort((a, b) => b.adjusted - a.adjusted);
  const strong = sorted.slice(0, 3);
  const weak = [...domainScores].sort((a, b) => a.adjusted - b.adjusted).slice(0, 3);
  const trend = [...all].reverse().map(item => ({ label: formatDate(item.createdAt), pli: item.pli }));
  const practicePlan = latest ? buildPracticePlan(latest) : null;

  const growth = useMemo(
    () =>
      weak.map(score => {
        const rule = RULES.find(item => item.id === score.ruleId);
        if (!rule) return null;

        let scoreBand: 'very-low' | 'low' | 'moderate' | 'maintenance';
        if (score.adjusted < 2) scoreBand = 'very-low';
        else if (score.adjusted < 5) scoreBand = 'low';
        else if (score.adjusted < 7.5) scoreBand = 'moderate';
        else scoreBand = 'maintenance';

        return {
          rule,
          score,
          interventions: INTERVENTIONS.filter(
            item => item.ruleId === score.ruleId && item.scoreBand === scoreBand
          ).slice(0, 1),
        };
      }).filter(Boolean),
    [weak]
  ) as Array<{
    rule: (typeof RULES)[number];
    score: NonNullable<AssessmentResult['domainScores']>[number];
    interventions: typeof INTERVENTIONS;
  }>;

  if (!latest || !Array.isArray(latest.domainScores)) {
    return (
      <div className="card p-8 text-center sm:p-10">
        <h2 className="text-2xl font-semibold">No valid assessment saved yet</h2>
        <p className="mt-3 text-sm text-pli-slate">
          Complete your first assessment or clear old browser data if this device holds an older incompatible version.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/assessment" className="rounded-full bg-pli-teal px-5 py-3 text-sm font-medium text-white">Start assessment</Link>
          <ClearDataButton label="Clear browser data" />
        </div>
      </div>
    );
  }

  const strongestRule = RULES.find(rule => rule.id === strong[0]?.ruleId);
  const character = latest.selectedCharacter ?? 'nimal';

  return (
    <div className="space-y-5">
      <div className="card overflow-hidden p-0">
        <div className="grid gap-5 bg-gradient-to-br from-white via-[#f7f3ec] to-[#eef7f5] p-5 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Latest result</p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Peaceful Life Index Dashboard</h1>
            <p className="mt-3 text-sm text-pli-slate">
              Completed on {formatDate(latest.createdAt)} through the {character === 'maya' ? 'Maya' : 'Nimal'} story pathway.
            </p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
              <div>
                <p className="text-sm text-pli-slate">Overall PLI</p>
                <p className="mt-1 text-4xl font-semibold text-pli-teal sm:text-5xl">{latest.pli.toFixed(2)}/10</p>
                <p className="mt-2 text-sm leading-6 text-pli-slate">{overallBandLabel(latest.pli)}</p>
              </div>
              <div className="min-w-0 rounded-2xl border border-pli-border bg-white/80 p-4 sm:min-w-[180px]">
                <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Priority growth domain</p>
                <p className="mt-2 text-lg font-semibold">{practicePlan?.weakestDomain ?? 'Growth area'}</p>
                <p className="mt-2 text-sm leading-6 text-pli-slate">
                  Next recommended PLI: <strong className="text-pli-ink">{practicePlan?.nextAssessmentDate ?? '—'}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto md:mx-0">
            <CharacterIllustration character={character} size="md" />
          </div>
        </div>
      </div>

      <div className="card p-5 sm:p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">All domain scores</p>
          <h2 className="mt-2 text-lg font-semibold sm:text-xl">Open any Golden Rule for domain detail</h2>
          <p className="mt-2 text-sm leading-6 text-pli-slate">
            Tap a domain to view its score, trend, tailored SBCC activities, and a relevant quote from The Happiness Blueprint.
          </p>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {RULES.map(rule => {
            const score = domainScores.find(item => item.ruleId === rule.id);
            return (
              <Link
                key={rule.id}
                href={`/rules/${rule.slug}`}
                className="rounded-2xl border border-pli-border bg-pli-bg p-3.5 transition hover:border-pli-teal hover:shadow-soft"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Rule {rule.index}</p>
                <p className="mt-2 text-base font-semibold text-pli-ink">{rule.title}</p>
                <p className="mt-2 text-sm leading-6 text-pli-slate">{rule.definition}</p>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-2xl font-semibold text-pli-teal">
                      {score ? `${score.adjusted.toFixed(1)}/10` : '—'}
                    </p>
                    <p className="mt-1 text-sm text-pli-slate">
                      {score ? scoreBandLabel(score.band) : 'No score'}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-pli-teal">Open detail →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-5">
          <div className="card p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Domain profile</p>
            <div className="mt-3 sm:mt-4">
              <PliRadarChart scores={domainScores} />
            </div>
          </div>

          <div className="card p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Interaction matrix</p>
            <div className="mt-3 sm:mt-4">
              <InteractionGrid />
            </div>
          </div>

          <div className="card p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Trend over time</p>
            <div className="mt-3 sm:mt-4">
              <TrendChart data={trend} />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {strongestRule ? (
            <div className="card p-5 sm:p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Strongest area</p>
              <h2 className="mt-2 text-xl font-semibold">{strongestRule.title}</h2>
              <div className="mt-4 max-w-full overflow-hidden">
                <RuleHero slug={strongestRule.slug} title={strongestRule.title} />
              </div>
            </div>
          ) : null}

          <div className="card p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Strengths</p>
            <div className="mt-4 space-y-3">
              {strong.map(score => {
                const rule = RULES.find(item => item.id === score.ruleId);
                if (!rule) return null;
                return (
                  <Link key={score.ruleId} href={`/rules/${rule.slug}`} className="block rounded-2xl border border-pli-border bg-pli-bg p-3.5">
                    <p className="font-medium">{rule.title}</p>
                    <p className="mt-1 text-sm text-pli-slate">{score.adjusted.toFixed(1)}/10 · {scoreBandLabel(score.band)}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="card p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Growth areas</p>
            <div className="mt-4 space-y-4">
              {growth.map(entry => (
                <Link key={entry.rule.id} href={`/rules/${entry.rule.slug}`} className="block overflow-hidden rounded-2xl border border-pli-border p-3.5">
                  <p className="font-medium">{entry.rule.title}</p>
                  <p className="mt-1 text-sm text-pli-slate">{entry.score.adjusted.toFixed(1)}/10 · {scoreBandLabel(entry.score.band)}</p>
                  {entry.interventions[0] ? (
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-pli-slate">
                      <strong className="text-pli-ink">{entry.interventions[0].title}:</strong> {entry.interventions[0].whatToDo}
                    </p>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Priority growth planning</p>
            <p className="mt-3 text-sm leading-6 text-pli-slate">
              Create a guided monthly practice plan based on your weakest domain and subdomain pattern.
            </p>
            <div className="mt-4">
              <Link href="/practice-plan" className="inline-block rounded-full bg-pli-teal px-5 py-3 text-sm font-medium text-white">
                Open My Practice Plan
              </Link>
            </div>
          </div>

          <ClearDataButton label="Clear browser data and restart" />
        </div>
      </div>
    </div>
  );
}

import { AssessmentResult } from '@/types/pli';
import { SBCC_LIBRARY } from '@/data/sbcc-library';
import { PracticePlan, PracticeActivity } from '@/types/practice-plan';
import { RULES } from '@/data/rules';

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

const SUBDOMAIN_BY_RULE_ID: Record<string, string[]> = {
  'do-good': ['Spontaneous helping', 'Emotional support', 'Contribution at home', 'Kindness without recognition'],
  'do-right-thing': ['Honesty', 'Fairness', 'Value-based action', 'Keeping commitments'],
  'do-no-harm': ['Self-protection / self-damaging behaviour', 'Harm to others', 'Environmental harm', 'Smoking / substance use'],
  'treat-equally': ['Dignity', 'Fairness in discussion', 'Bias awareness', 'Equal respect despite disagreement'],
  'love-yourself-and-all': ['Self-compassion', 'Warmth to others', 'Forgiveness', 'Balanced care'],
  'eat-healthy-live-healthy': ['Food', 'Sleep', 'Hydration', 'Physical activity'],
  'financial-freedom': ['Impulse spending', 'Facing money issues', 'Budgeting', 'Value-based money decisions'],
  'be-humble': ['Receiving praise', 'Accepting feedback', 'Admitting wrong', 'Learning from anyone'],
  'stay-calm': ['Early awareness', 'Response delay', 'De-escalation', 'Recovery'],
  'accept-change': ['Flexibility', 'Acceptance', 'Recovery after disappointment', 'Plan B mindset'],
};

function fallbackActivities(domain: string, subdomains: string[]): PracticeActivity[] {
  return subdomains.slice(0, 4).map((subdomain, index) => ({
    id: `${domain}-${index + 1}`,
    domain,
    subdomain,
    title: `Practice ${subdomain}`,
    whatToDo: `Choose one small daily action that strengthens ${subdomain.toLowerCase()} during the next 30 days.`,
    whyItHelps: `Repeated small actions can gradually strengthen ${subdomain.toLowerCase()} and improve your next PLI in this area.`,
    frequency: '3–5 times per week',
    weeklyCheckLabel: `Did I practice one action for ${subdomain} this week?`,
  }));
}

export function buildPracticePlan(result: AssessmentResult): PracticePlan {
  const sorted = [...result.domainScores].sort((a, b) => a.adjusted - b.adjusted);
  const weakest = sorted[0];
  const weakestRule = RULES.find((rule) => rule.id === weakest.ruleId);
  const weakestDomain = weakestRule?.title ?? 'Priority Growth Area';
  const weakestSubdomains = SUBDOMAIN_BY_RULE_ID[weakest.ruleId] ?? [];

  let selectedActivities: PracticeActivity[] = SBCC_LIBRARY.filter(
    (item) => item.domain === weakestDomain
  ).slice(0, 4);

  if (!selectedActivities.length) {
    selectedActivities = fallbackActivities(weakestDomain, weakestSubdomains);
  }

  const baseDate = result?.createdAt ? new Date(result.createdAt) : new Date();
  const nextAssessmentDate = formatDate(addDays(baseDate, 30));

  return {
    generatedAt: formatDate(new Date()),
    nextAssessmentDate,
    weakestDomain,
    weakestSubdomains: weakestSubdomains.slice(0, 2),
    activities: selectedActivities,
    reflectionPrompt:
      'Before your next PLI, reflect on which activity became easier, which weak area improved, and what still needs support.',
  };
}

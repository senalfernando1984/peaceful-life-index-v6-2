import Link from 'next/link';
import { AssessmentCharacterSelector } from '@/components/assessment-character-selector';

export default function AssessmentIntroPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="card p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Before you begin</p>
        <h1 className="mt-2 text-3xl font-semibold">Monthly Peaceful Life Index assessment</h1>
        <p className="mt-3 text-pli-slate">
          This assessment is designed for <strong className="text-pli-ink">monthly self-monitoring</strong>.
          Please complete it <strong className="text-pli-ink">once every 30 days</strong> to track your growth over time.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-pli-bg p-5">
            <h2 className="font-semibold">Answer based on the last 30 days</h2>
            <p className="mt-2 text-sm text-pli-slate">
              Think specifically about your <strong className="text-pli-ink">experiences, behaviours, emotions, and daily habits during the past 30 days</strong>.
            </p>
          </div>
          <div className="rounded-2xl bg-pli-bg p-5">
            <h2 className="font-semibold">Choose your story character first</h2>
            <p className="mt-2 text-sm text-pli-slate">
              You can now take the same assessment through either the <strong className="text-pli-ink">Nimal</strong> or <strong className="text-pli-ink">Maya</strong> story pathway.
              The scoring remains the same. Only the story perspective changes.
            </p>
          </div>
        </div>

        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-pli-slate">
          <li>There are 10 Golden Rule domains.</li>
          <li>Each domain contains 4 connected story-based scenarios.</li>
          <li>Complete all 40 scenarios for a full monthly PLI score.</li>
          <li>Use the same 30-day time window each month for better comparison.</li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="rounded-full border border-pli-border px-6 py-3 font-medium">
            Back to home
          </Link>
        </div>
      </div>

      <AssessmentCharacterSelector />
    </div>
  );
}

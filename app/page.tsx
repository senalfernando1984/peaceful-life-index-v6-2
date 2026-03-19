import Link from 'next/link';
import { RULES } from '@/data/rules';
import { ProfileForm } from '@/components/profile-form';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="space-y-6">
        <div className="card overflow-hidden p-0">
          <div className="bg-gradient-to-br from-white via-[#f8f5ee] to-[#eef7f5] px-5 py-8 sm:px-8 sm:py-10 xl:px-10 xl:py-12">
            <div className="max-w-5xl">
              <span className="inline-flex rounded-full border border-pli-border bg-white/80 px-3 py-1 text-xs font-medium text-pli-teal">
                The Happiness Blueprint
              </span>

              <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl xl:text-[4.5rem] xl:leading-[1.02]">
                Measure your <span className="text-pli-teal">Peaceful Life Index</span> through the 10 Golden Rules.
              </h1>

              <p className="mt-5 max-w-4xl text-base leading-8 text-pli-slate sm:text-lg">
                The Peaceful Life Index translates the philosophy of{' '}
                <strong className="text-pli-ink">The Happiness Blueprint: The 10 Golden Rules</strong>{' '}
                into a practical self-assessment. It helps you reflect on peace, balance,
                everyday behaviour, relationships, health, financial stability, humility,
                calmness, and adaptability, then shows your strengths, growth areas, and practical next steps.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/assessment" className="rounded-full bg-pli-teal px-6 py-3 font-medium text-white">
                  Start assessment
                </Link>
                <Link href="/results" className="rounded-full border border-pli-border bg-white/75 px-6 py-3 font-medium">
                  Open dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-4 sm:p-5 lg:p-6">
          <div className="mb-4 sm:mb-5">
            <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">The 10 Golden Rules</p>
            <h2 className="mt-2 text-xl font-semibold sm:text-2xl">Explore the full Peaceful Life framework</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-pli-slate">
              These 10 connected domains form the structure of the Peaceful Life Index. Each rule contributes to your overall balance, and each one can be explored in more detail after assessment.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {RULES.map(rule => (
              <div key={rule.id} className="rounded-2xl border border-pli-border bg-pli-bg p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Rule {rule.index}</p>
                <h3 className="mt-2 text-base font-medium text-pli-ink">{rule.title}</h3>
                <p className="mt-2 text-sm leading-6 text-pli-slate">{rule.whyItMatters}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProfileForm />
    </div>
  );
}

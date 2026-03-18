import Link from 'next/link';

export default function AboutDeveloperPage() {
  return (
    <div className="mx-auto max-w-4xl card p-8">
      <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">About the developer</p>
      <h1 className="mt-2 text-3xl font-semibold">Dr Senal Fernando</h1>
      <p className="mt-4 text-pli-slate">
        <strong className="text-pli-ink">Dr Senal Fernando</strong> is the developer and conceptual creator of the
        <strong className="text-pli-ink"> Peaceful Life Index (PLI)</strong>.
      </p>
      <p className="mt-4 text-pli-slate">
        The PLI was created to translate the philosophy of
        <strong className="text-pli-ink"> The Happiness Blueprint: The 10 Golden Rules for a Peaceful and Purposeful Life</strong>
        into a practical self-reflection and growth-monitoring tool that can help people assess and improve peace, balance, and purpose in everyday life.
      </p>
      <div className="mt-6">
        <Link href="/results" className="rounded-full border border-pli-border px-5 py-3 text-sm font-medium">
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}

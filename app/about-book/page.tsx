import Link from 'next/link';

export default function AboutBookPage() {
  return (
    <div className="mx-auto max-w-4xl card p-8">
      <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">About the book</p>
      <h1 className="mt-2 text-3xl font-semibold">
        The Happiness Blueprint: The 10 Golden Rules for a Peaceful and Purposeful Life
      </h1>
      <p className="mt-4 text-pli-slate">
        This book by <strong className="text-pli-ink">Dr Senal Fernando</strong> is the conceptual foundation of the Peaceful Life Index.
        It is designed as a practical guide to understanding the 10 Golden Rules and applying them in daily life to improve peace, purpose, balance, and happiness.
      </p>
      <p className="mt-4 text-pli-slate">
        If you want to improve your PLI more deeply, use the book alongside the assessment as a practical companion for reflection, behaviour change, and personal growth.
      </p>
      <div className="mt-6">
        <Link href="/results" className="rounded-full border border-pli-border px-5 py-3 text-sm font-medium">
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}

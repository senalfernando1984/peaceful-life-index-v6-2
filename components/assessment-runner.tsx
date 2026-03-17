'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTIONNAIRE_ITEMS } from '@/data/questionnaire';
import { RULES } from '@/data/rules';
import { computeAssessment, isAssessmentComplete, RESPONSE_LABELS } from '@/lib/scoring';
import { purgeLegacyPliStorage, saveAssessment } from '@/lib/storage';
import { ClearDataButton } from '@/components/clear-data-button';

export function AssessmentRunner() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [validationMessage, setValidationMessage] = useState('');
  const [missingIds, setMissingIds] = useState<string[]>([]);
  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    purgeLegacyPliStorage();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setValidationMessage('');
    setMissingIds([]);
  }, [step]);

  const currentRule = RULES[step];
  const items = QUESTIONNAIRE_ITEMS.filter(item => item.ruleId === currentRule.id);
  const currentAnswered = items.every(item => answers[item.id] !== undefined);
  const completed = isAssessmentComplete(QUESTIONNAIRE_ITEMS, answers);

  const preview = useMemo(() => {
    return completed ? computeAssessment(QUESTIONNAIRE_ITEMS, answers) : null;
  }, [answers, completed]);

  const handleNext = () => {
    const missing = items.filter(item => answers[item.id] === undefined).map(item => item.id);
    if (missing.length > 0) {
      setMissingIds(missing);
      setValidationMessage(
        `Please answer all 10 questions in Rule ${currentRule.index} before moving to the next rule.`
      );
      const firstMissing = missing[0];
      const target = questionRefs.current[firstMissing];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setValidationMessage('');
    setMissingIds([]);
    setStep(s => s + 1);
  };

  const handleFinish = () => {
    const missing = items.filter(item => answers[item.id] === undefined).map(item => item.id);
    if (missing.length > 0) {
      setMissingIds(missing);
      setValidationMessage(
        `Please answer all 10 questions in Rule ${currentRule.index} before finishing the assessment.`
      );
      const firstMissing = missing[0];
      const target = questionRefs.current[firstMissing];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const result = computeAssessment(QUESTIONNAIRE_ITEMS, answers);
    saveAssessment(result);
    router.push('/results');
  };

  const totalAnswered = QUESTIONNAIRE_ITEMS.filter(item => answers[item.id] !== undefined).length;
  const startNumber = step * 10 + 1;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="card p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Assessment progress</p>
        <div className="mt-4 h-2 rounded-full bg-pli-border">
          <div
            className="h-2 rounded-full bg-pli-teal"
            style={{ width: `${((step + 1) / RULES.length) * 100}%` }}
          />
        </div>
        <p className="mt-4 text-sm text-pli-slate">
          Rule {currentRule.index} of {RULES.length}. {totalAnswered} of {QUESTIONNAIRE_ITEMS.length} questions answered.
        </p>

        <div className="mt-6 rounded-2xl bg-pli-bg p-4">
          <p className="text-sm text-pli-slate">PLI preview</p>
          {preview ? (
            <>
              <p className="mt-2 text-4xl font-semibold text-pli-teal">{preview.pli.toFixed(2)}/10</p>
              <p className="mt-2 text-xs text-pli-slate">
                Final preview appears only after all 100 questions are answered.
              </p>
            </>
          ) : (
            <>
              <p className="mt-2 text-2xl font-semibold text-pli-slate">
                Complete all questions to see your final PLI
              </p>
            </>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-pli-border p-4 text-sm text-pli-slate">
          <p className="font-medium text-pli-ink">How reverse-worded items work</p>
          <p className="mt-2">
            Some questions describe difficulties, such as losing your temper or neglecting your health.
            For those items, the healthier answer is usually <strong className="text-pli-ink">Never</strong> or{' '}
            <strong className="text-pli-ink">Rarely</strong>.
          </p>
        </div>

        <div className="mt-4">
          <ClearDataButton label="Clear browser data and restart" />
        </div>
      </div>

      <div className="card p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Rule {currentRule.index}</p>
        <h1 className="mt-2 text-2xl font-semibold">{currentRule.title}</h1>
        <p className="mt-2 text-sm text-pli-slate">{currentRule.definition}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {currentRule.subdomains.map(tag => (
            <span key={tag} className="rounded-full bg-pli-bg px-3 py-1 text-xs text-pli-slate">
              {tag}
            </span>
          ))}
        </div>

        {validationMessage ? (
          <div className="mt-5 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-700">
            {validationMessage}
          </div>
        ) : null}

        <div className="mt-6 space-y-5">
          {items.map((item, idx) => {
            const absoluteNumber = startNumber + idx;
            const isMissing = missingIds.includes(item.id);

            return (
              <div
                key={item.id}
                ref={el => {
                  questionRefs.current[item.id] = el;
                }}
                className={`rounded-2xl border p-4 ${
                  isMissing ? 'border-red-400 bg-red-50' : 'border-pli-border'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">
                  Question {absoluteNumber} of {QUESTIONNAIRE_ITEMS.length} · Rule {currentRule.index}, item {idx + 1} of 10
                </p>
                <p className="mt-2 text-sm font-medium">{item.prompt}</p>
                {item.reverseCoded ? (
                  <p className="mt-2 text-xs text-pli-slate">
                    Reverse-worded item: a lower frequency usually indicates healthier functioning.
                  </p>
                ) : null}
                {isMissing ? (
                  <p className="mt-2 text-xs font-medium text-red-700">
                    This question still needs an answer before you can continue.
                  </p>
                ) : null}
                <div className="mt-4 grid gap-2 sm:grid-cols-5">
                  {RESPONSE_LABELS.map((label, responseIndex) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        setAnswers(prev => ({ ...prev, [item.id]: responseIndex }));
                        setMissingIds(prev => prev.filter(id => id !== item.id));
                        if (validationMessage) {
                          setValidationMessage('');
                        }
                      }}
                      className={`rounded-xl border px-3 py-2 text-sm ${
                        answers[item.id] === responseIndex
                          ? 'border-pli-teal bg-pli-teal text-white'
                          : isMissing
                            ? 'border-red-300 bg-white'
                            : 'border-pli-border bg-white'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep(s => Math.max(0, s - 1))}
            className="rounded-full border border-pli-border px-4 py-2 text-sm"
            disabled={step === 0}
          >
            Back
          </button>

          {step < RULES.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="rounded-full bg-pli-teal px-4 py-2 text-sm font-medium text-white"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleFinish}
              className="rounded-full bg-pli-gold px-5 py-2 text-sm font-medium text-white disabled:opacity-50"
              disabled={!completed && totalAnswered !== QUESTIONNAIRE_ITEMS.length}
            >
              Finish assessment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

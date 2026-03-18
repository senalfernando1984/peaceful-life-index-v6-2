'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { QUESTIONNAIRE_ITEMS } from '@/data/questionnaire';
import { RULES } from '@/data/rules';
import { computeAssessment, isAssessmentComplete } from '@/lib/scoring';
import { purgeLegacyPliStorage, saveAssessment } from '@/lib/storage';
import { ClearDataButton } from '@/components/clear-data-button';

export function AssessmentRunner() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [validationMessage, setValidationMessage] = useState('');
  const [missingIds, setMissingIds] = useState<string[]>([]);
  const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    purgeLegacyPliStorage();
  }, []);

  useEffect(() => {
    setValidationMessage('');
    setMissingIds([]);

    const doScroll = () => {
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
      try {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch {}
    };

    doScroll();
    const timeout = setTimeout(doScroll, 50);
    return () => clearTimeout(timeout);
  }, [step]);

  const currentRule = RULES[step];
  const items = QUESTIONNAIRE_ITEMS.filter(item => item.ruleId === currentRule.id);
  const completed = isAssessmentComplete(QUESTIONNAIRE_ITEMS, answers);

  const preview = useMemo(() => {
    return completed ? computeAssessment(QUESTIONNAIRE_ITEMS, answers) : null;
  }, [answers, completed]);

  const totalAnswered = QUESTIONNAIRE_ITEMS.filter(item => answers[item.id] !== undefined).length;
  const totalQuestions = QUESTIONNAIRE_ITEMS.length;
  const startNumber = step * 4 + 1;
  const unansweredInCurrentRule = items.filter(item => answers[item.id] === undefined).length;

  const focusMissing = (missing: string[]) => {
    setMissingIds(missing);
    const firstMissing = missing[0];
    const target = questionRefs.current[firstMissing];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
    }
  };

  const handleNext = () => {
    const missing = items.filter(item => answers[item.id] === undefined).map(item => item.id);
    if (missing.length > 0) {
      setValidationMessage(
        `You still have ${missing.length} unanswered scenario${missing.length > 1 ? 's' : ''} in Rule ${currentRule.index}. Please answer the highlighted scenario${missing.length > 1 ? 's' : ''} before moving to the next rule.`
      );
      focusMissing(missing);
      return;
    }
    setValidationMessage('');
    setMissingIds([]);
    setStep(prev => Math.min(prev + 1, RULES.length - 1));
  };

  const handleFinish = () => {
    const missing = items.filter(item => answers[item.id] === undefined).map(item => item.id);
    if (missing.length > 0) {
      setValidationMessage(
        `You still have ${missing.length} unanswered scenario${missing.length > 1 ? 's' : ''} in Rule ${currentRule.index}. Please answer the highlighted scenario${missing.length > 1 ? 's' : ''} before finishing the assessment.`
      );
      focusMissing(missing);
      return;
    }
    const result = computeAssessment(QUESTIONNAIRE_ITEMS, answers);
    saveAssessment(result);
    router.push('/results');
  };

  return (
    <div ref={topRef} className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="card p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">Assessment progress</p>
        <div className="mt-4 h-2 rounded-full bg-pli-border">
          <div
            className="h-2 rounded-full bg-pli-teal"
            style={{ width: `${((step + 1) / RULES.length) * 100}%` }}
          />
        </div>
        <p className="mt-4 text-sm text-pli-slate">
          Rule {currentRule.index} of {RULES.length}. {totalAnswered} of {totalQuestions} scenarios answered.
        </p>

        <div className="mt-6 rounded-2xl border border-pli-border bg-pli-bg p-4 text-sm text-pli-slate">
          <p className="font-medium text-pli-ink">How this scenario-based assessment works</p>
          <p className="mt-2">
            Each rule contains <strong className="text-pli-ink">4 real-life story scenarios</strong>. Read each story carefully,
            imagine yourself in that situation over the <strong className="text-pli-ink">last 30 days</strong>, and select the
            answer that best matches how you would most likely respond.
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-pli-bg p-4">
          <p className="text-sm text-pli-slate">PLI preview</p>
          {preview ? (
            <>
              <p className="mt-2 text-4xl font-semibold text-pli-teal">{preview.pli.toFixed(2)}/10</p>
              <p className="mt-2 text-xs text-pli-slate">Final preview appears only after all 40 scenarios are answered.</p>
            </>
          ) : (
            <p className="mt-2 text-2xl font-semibold text-pli-slate">Complete all scenarios to see your final PLI</p>
          )}
        </div>

        <div className="mt-6 rounded-2xl border border-pli-border p-4 text-sm text-pli-slate">
          <p className="font-medium text-pli-ink">Current rule completion</p>
          <p className="mt-2">{4 - unansweredInCurrentRule} of 4 scenarios answered in Rule {currentRule.index}.</p>
          {unansweredInCurrentRule > 0 ? (
            <p className="mt-2 text-red-700">
              {unansweredInCurrentRule} scenario{unansweredInCurrentRule > 1 ? 's remain' : ' remains'} unanswered in this rule.
            </p>
          ) : (
            <p className="mt-2 text-pli-teal">All 4 scenarios in this rule are answered.</p>
          )}
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
                className={`rounded-2xl border p-5 ${isMissing ? 'border-red-400 bg-red-50 shadow-sm' : 'border-pli-border'}`}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-pli-gold">
                  Rule {currentRule.index} · Scenario {idx + 1} of 4
                </p>
                <p className="mt-2 text-sm font-semibold text-pli-ink">{item.subdomain}</p>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-pli-slate">{item.story}</p>
                {isMissing ? (
                  <p className="mt-3 text-xs font-medium text-red-700">Please choose one response before you continue.</p>
                ) : null}

                <div className="mt-4 space-y-3">
                  {item.options.map((option, optionIndex) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => {
                        setAnswers(prev => ({ ...prev, [item.id]: optionIndex }));
                        setMissingIds(prev => prev.filter(id => id !== item.id));
                        setValidationMessage('');
                      }}
                      className={`w-full rounded-2xl border px-4 py-3 text-left text-sm ${
                        answers[item.id] === optionIndex
                          ? 'border-pli-teal bg-pli-teal text-white'
                          : isMissing
                            ? 'border-red-300 bg-white'
                            : 'border-pli-border bg-white text-pli-ink'
                      }`}
                    >
                      <span className="mr-2 font-semibold">{option.key}.</span>
                      {option.text}
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
            onClick={() => setStep(prev => Math.max(0, prev - 1))}
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
              className="rounded-full bg-pli-gold px-5 py-2 text-sm font-medium text-white"
            >
              Finish assessment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

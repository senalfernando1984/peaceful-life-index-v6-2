export type MonthlyPracticeRichEntry = {
  domain: string;
  subdomain: string;
  title: string;
  whatToDo: string;
  whyItHelps: string;
  howOften: string;
  weeklyCheck: string;
  monthlyGoal: string;
};

export const MONTHLY_PRACTICE_RICH: MonthlyPracticeRichEntry[] = [
  {
    "domain": "Assessment Month",
    "subdomain": "Weakest Domain",
    "title": "Weakest Subdomain",
    "whatToDo": "Chosen Activity",
    "whyItHelps": "Why I chose it",
    "howOften": "This Week I practiced it on...",
    "weeklyCheck": "What I noticed",
    "monthlyGoal": "Next step"
  }
];

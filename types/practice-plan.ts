export interface PracticeActivity {
  id: string;
  domain: string;
  subdomain: string;
  title: string;
  whatToDo: string;
  whyItHelps: string;
  frequency: string;
  weeklyCheckLabel: string;
}

export interface PracticePlan {
  generatedAt: string;
  nextAssessmentDate: string;
  weakestDomain: string;
  weakestSubdomains: string[];
  activities: PracticeActivity[];
  reflectionPrompt: string;
}

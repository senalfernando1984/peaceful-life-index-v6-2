export type RuleId='do-good'|'do-right-thing'|'do-no-harm'|'treat-equally'|'love-yourself-and-all'|'eat-healthy-live-healthy'|'financial-freedom'|'be-humble'|'stay-calm'|'accept-change';
export type ScoreBand='very-low'|'low'|'emerging'|'moderate'|'good'|'strong'|'flourishing';

export interface RuleDefinition{
  index:number;
  id:RuleId;
  slug:string;
  title:string;
  shortTitle:string;
  weight:number;
  definition:string;
  whyItMatters:string;
  subdomains:string[];
}

export interface DomainScore{
  ruleId:RuleId;
  raw:number;
  interaction:number;
  adjusted:number;
  band:ScoreBand;
  answeredCount:number;
}

export type AssessmentCharacter='nimal'|'maya';

export interface AssessmentResult{
  id:string;
  createdAt:string;
  pli:number;
  pli100:number;
  pliBase:number;
  balanceFactor:number;
  profileSpread:number;
  selectedCharacter?:AssessmentCharacter;
  domainScores:DomainScore[];
}

export interface ScenarioAnswerOption{
  key:'A'|'B'|'C'|'D'|'E';
  text:string;
  score:0|1|2|3|4;
}

export interface QuestionnaireItem{
  id:string;
  ruleId:RuleId;
  title:string;
  story:string;
  stories?:Record<AssessmentCharacter,string>;
  subdomain:string;
  scenario?:boolean;
  evidenceTag?:string;
  options:ScenarioAnswerOption[];
}

export interface InterventionEntry{
  id:string;
  ruleId:RuleId;
  scoreBand:'very-low'|'low'|'moderate'|'maintenance';
  title:string;
  whatToDo:string;
  whyItHelps:string;
  quickAction:string;
  weeklyPractice:string;
  longerHabit:string;
  mechanism?:string;
  evidenceStatus?:'placeholder'|'mapped';
}

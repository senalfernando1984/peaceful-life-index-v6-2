export type TailoredSbccEntry = {
  ruleId: string;
  domain: string;
  subdomain: string;
  scorePattern: string;
  whenToUse: string;
  recommendedFocus: string;
  activities: string[];
  whyTheseFit: string;
  monthlyUse: string;
};

export const TAILORED_SBCC: TailoredSbccEntry[] = [
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Spontaneous helping",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "One helpful act today: Do one small practical helpful act for a person near you today.",
      "Notice and step in: When I see a manageable need, I will pause and ask whether I can help.",
      "Weekly kindness log: Write down three small helpful acts each week.",
      "Helping routine anchor: Attach one helpful act to an existing routine, such as leaving work or finishing dinner."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Spontaneous helping. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Spontaneous helping",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "One helpful act today: Do one small practical helpful act for a person near you today.",
      "Notice and step in: When I see a manageable need, I will pause and ask whether I can help.",
      "Weekly kindness log: Write down three small helpful acts each week.",
      "Helping routine anchor: Attach one helpful act to an existing routine, such as leaving work or finishing dinner."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Spontaneous helping. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Spontaneous helping",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "One helpful act today: Do one small practical helpful act for a person near you today.",
      "Notice and step in: When I see a manageable need, I will pause and ask whether I can help.",
      "Weekly kindness log: Write down three small helpful acts each week.",
      "Helping routine anchor: Attach one helpful act to an existing routine, such as leaving work or finishing dinner."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Spontaneous helping. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Spontaneous helping",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "One helpful act today: Do one small practical helpful act for a person near you today.",
      "Notice and step in: When I see a manageable need, I will pause and ask whether I can help.",
      "Weekly kindness log: Write down three small helpful acts each week.",
      "Helping routine anchor: Attach one helpful act to an existing routine, such as leaving work or finishing dinner."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Spontaneous helping. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Emotional support",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Two-minute check-in: Send one sincere check-in message to someone each week.",
      "Listen before solving: In one conversation, focus on listening before giving advice.",
      "Support phrase practice: Use a simple phrase such as 'That sounds difficult - I’m here with you.'",
      "Quiet follow-up: Check back the next day with one supportive follow-up message."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Emotional support. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Emotional support",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Two-minute check-in: Send one sincere check-in message to someone each week.",
      "Listen before solving: In one conversation, focus on listening before giving advice.",
      "Support phrase practice: Use a simple phrase such as 'That sounds difficult - I’m here with you.'",
      "Quiet follow-up: Check back the next day with one supportive follow-up message."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Emotional support. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Emotional support",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Two-minute check-in: Send one sincere check-in message to someone each week.",
      "Listen before solving: In one conversation, focus on listening before giving advice.",
      "Support phrase practice: Use a simple phrase such as 'That sounds difficult - I’m here with you.'",
      "Quiet follow-up: Check back the next day with one supportive follow-up message."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Emotional support. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Emotional support",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Two-minute check-in: Send one sincere check-in message to someone each week.",
      "Listen before solving: In one conversation, focus on listening before giving advice.",
      "Support phrase practice: Use a simple phrase such as 'That sounds difficult - I’m here with you.'",
      "Quiet follow-up: Check back the next day with one supportive follow-up message."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Emotional support. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Contribution at home",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "One task before rest: Complete one household task before sitting down for the evening.",
      "Shared-space reset: Spend 5 minutes improving a shared space each day.",
      "No-praise contribution: Do one useful home task without announcing it.",
      "Visible task board: Use a small board or note to clarify shared tasks fairly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Contribution at home. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Contribution at home",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "One task before rest: Complete one household task before sitting down for the evening.",
      "Shared-space reset: Spend 5 minutes improving a shared space each day.",
      "No-praise contribution: Do one useful home task without announcing it.",
      "Visible task board: Use a small board or note to clarify shared tasks fairly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Contribution at home. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Contribution at home",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "One task before rest: Complete one household task before sitting down for the evening.",
      "Shared-space reset: Spend 5 minutes improving a shared space each day.",
      "No-praise contribution: Do one useful home task without announcing it.",
      "Visible task board: Use a small board or note to clarify shared tasks fairly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Contribution at home. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Contribution at home",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "One task before rest: Complete one household task before sitting down for the evening.",
      "Shared-space reset: Spend 5 minutes improving a shared space each day.",
      "No-praise contribution: Do one useful home task without announcing it.",
      "Visible task board: Use a small board or note to clarify shared tasks fairly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Contribution at home. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Kindness without recognition",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Anonymous kindness: Do one unseen act that makes life easier for someone else.",
      "Prepare for tomorrow: Set up one helpful thing the night before for someone else.",
      "No-credit challenge: Choose one good act each week that you will not tell anyone about.",
      "Kindness reflection: At the end of the week, write one unseen good act you chose."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Kindness without recognition. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Kindness without recognition",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Anonymous kindness: Do one unseen act that makes life easier for someone else.",
      "Prepare for tomorrow: Set up one helpful thing the night before for someone else.",
      "No-credit challenge: Choose one good act each week that you will not tell anyone about.",
      "Kindness reflection: At the end of the week, write one unseen good act you chose."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Kindness without recognition. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Kindness without recognition",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Anonymous kindness: Do one unseen act that makes life easier for someone else.",
      "Prepare for tomorrow: Set up one helpful thing the night before for someone else.",
      "No-credit challenge: Choose one good act each week that you will not tell anyone about.",
      "Kindness reflection: At the end of the week, write one unseen good act you chose."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Kindness without recognition. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-good",
    "domain": "Do Good",
    "subdomain": "Kindness without recognition",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Anonymous kindness: Do one unseen act that makes life easier for someone else.",
      "Prepare for tomorrow: Set up one helpful thing the night before for someone else.",
      "No-credit challenge: Choose one good act each week that you will not tell anyone about.",
      "Kindness reflection: At the end of the week, write one unseen good act you chose."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Kindness without recognition. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Honesty",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Error correction rule: If I notice a mistake, I will correct it within 24 hours.",
      "Truthful pause: Before speaking in a difficult situation, pause and ask: is this accurate and fair?",
      "Integrity review: Reflect once a week on one moment when honesty was tested.",
      "Small truth practice: Choose one small area where you stop avoiding truthful communication."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Honesty. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Honesty",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Error correction rule: If I notice a mistake, I will correct it within 24 hours.",
      "Truthful pause: Before speaking in a difficult situation, pause and ask: is this accurate and fair?",
      "Integrity review: Reflect once a week on one moment when honesty was tested.",
      "Small truth practice: Choose one small area where you stop avoiding truthful communication."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Honesty. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Honesty",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Error correction rule: If I notice a mistake, I will correct it within 24 hours.",
      "Truthful pause: Before speaking in a difficult situation, pause and ask: is this accurate and fair?",
      "Integrity review: Reflect once a week on one moment when honesty was tested.",
      "Small truth practice: Choose one small area where you stop avoiding truthful communication."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Honesty. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Honesty",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Error correction rule: If I notice a mistake, I will correct it within 24 hours.",
      "Truthful pause: Before speaking in a difficult situation, pause and ask: is this accurate and fair?",
      "Integrity review: Reflect once a week on one moment when honesty was tested.",
      "Small truth practice: Choose one small area where you stop avoiding truthful communication."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Honesty. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Fairness",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Share credit openly: In one group setting this week, name others who contributed.",
      "Fairness check question: Ask: would this still feel fair if our roles were reversed?",
      "Balanced recognition note: Keep a short note of who else helped in team tasks.",
      "Avoid hidden advantage: Pause before taking a benefit that others did not receive fairly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Fairness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Fairness",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Share credit openly: In one group setting this week, name others who contributed.",
      "Fairness check question: Ask: would this still feel fair if our roles were reversed?",
      "Balanced recognition note: Keep a short note of who else helped in team tasks.",
      "Avoid hidden advantage: Pause before taking a benefit that others did not receive fairly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Fairness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Fairness",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Share credit openly: In one group setting this week, name others who contributed.",
      "Fairness check question: Ask: would this still feel fair if our roles were reversed?",
      "Balanced recognition note: Keep a short note of who else helped in team tasks.",
      "Avoid hidden advantage: Pause before taking a benefit that others did not receive fairly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Fairness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Fairness",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Share credit openly: In one group setting this week, name others who contributed.",
      "Fairness check question: Ask: would this still feel fair if our roles were reversed?",
      "Balanced recognition note: Keep a short note of who else helped in team tasks.",
      "Avoid hidden advantage: Pause before taking a benefit that others did not receive fairly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Fairness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Value-based action",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Three-value card: Write three values that should guide my behaviour this month.",
      "Pressure response plan: Prepare one sentence for moments of peer pressure.",
      "Daily values check: At the end of the day, ask whether one action matched my values.",
      "Difficult choice rehearsal: Mentally rehearse saying no to a value-conflicting situation."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Value-based action. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Value-based action",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Three-value card: Write three values that should guide my behaviour this month.",
      "Pressure response plan: Prepare one sentence for moments of peer pressure.",
      "Daily values check: At the end of the day, ask whether one action matched my values.",
      "Difficult choice rehearsal: Mentally rehearse saying no to a value-conflicting situation."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Value-based action. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Value-based action",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Three-value card: Write three values that should guide my behaviour this month.",
      "Pressure response plan: Prepare one sentence for moments of peer pressure.",
      "Daily values check: At the end of the day, ask whether one action matched my values.",
      "Difficult choice rehearsal: Mentally rehearse saying no to a value-conflicting situation."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Value-based action. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Value-based action",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Three-value card: Write three values that should guide my behaviour this month.",
      "Pressure response plan: Prepare one sentence for moments of peer pressure.",
      "Daily values check: At the end of the day, ask whether one action matched my values.",
      "Difficult choice rehearsal: Mentally rehearse saying no to a value-conflicting situation."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Value-based action. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Keeping commitments",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Promise diary: Record commitments as soon as I make them.",
      "24-hour confirmation: Confirm one important commitment 24 hours before it is due.",
      "Say less, honour more: Reduce casual promises and keep the ones I make.",
      "Repair after delay: If I cannot keep a commitment, tell the person early and offer a repair."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Keeping commitments. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Keeping commitments",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Promise diary: Record commitments as soon as I make them.",
      "24-hour confirmation: Confirm one important commitment 24 hours before it is due.",
      "Say less, honour more: Reduce casual promises and keep the ones I make.",
      "Repair after delay: If I cannot keep a commitment, tell the person early and offer a repair."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Keeping commitments. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Keeping commitments",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Promise diary: Record commitments as soon as I make them.",
      "24-hour confirmation: Confirm one important commitment 24 hours before it is due.",
      "Say less, honour more: Reduce casual promises and keep the ones I make.",
      "Repair after delay: If I cannot keep a commitment, tell the person early and offer a repair."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Keeping commitments. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-right-thing",
    "domain": "Do the Right Thing",
    "subdomain": "Keeping commitments",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Promise diary: Record commitments as soon as I make them.",
      "24-hour confirmation: Confirm one important commitment 24 hours before it is due.",
      "Say less, honour more: Reduce casual promises and keep the ones I make.",
      "Repair after delay: If I cannot keep a commitment, tell the person early and offer a repair."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Keeping commitments. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Self-protection / self-damaging behaviour",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Stress-signal check: Notice one early sign of overload in my body or mind each day.",
      "Protective pause: When overload is high, delay non-essential decisions for 30 minutes.",
      "Basic recovery anchor: Restore one basic protective habit: food, rest, water, or support.",
      "Support reach-out rule: If warning signs persist, contact one trusted person."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Self-protection / self-damaging behaviour. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Self-protection / self-damaging behaviour",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Stress-signal check: Notice one early sign of overload in my body or mind each day.",
      "Protective pause: When overload is high, delay non-essential decisions for 30 minutes.",
      "Basic recovery anchor: Restore one basic protective habit: food, rest, water, or support.",
      "Support reach-out rule: If warning signs persist, contact one trusted person."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Self-protection / self-damaging behaviour. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Self-protection / self-damaging behaviour",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Stress-signal check: Notice one early sign of overload in my body or mind each day.",
      "Protective pause: When overload is high, delay non-essential decisions for 30 minutes.",
      "Basic recovery anchor: Restore one basic protective habit: food, rest, water, or support.",
      "Support reach-out rule: If warning signs persist, contact one trusted person."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Self-protection / self-damaging behaviour. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Self-protection / self-damaging behaviour",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Stress-signal check: Notice one early sign of overload in my body or mind each day.",
      "Protective pause: When overload is high, delay non-essential decisions for 30 minutes.",
      "Basic recovery anchor: Restore one basic protective habit: food, rest, water, or support.",
      "Support reach-out rule: If warning signs persist, contact one trusted person."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Self-protection / self-damaging behaviour. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Harm to others",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Three-breath pause: Take three slow breaths before answering when irritated.",
      "Name the feeling: Silently label the emotion before speaking.",
      "Gentle-first sentence: Begin difficult replies with a calmer first sentence.",
      "Repair quickly: If I hurt someone, I will repair within the same day."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Harm to others. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Harm to others",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Three-breath pause: Take three slow breaths before answering when irritated.",
      "Name the feeling: Silently label the emotion before speaking.",
      "Gentle-first sentence: Begin difficult replies with a calmer first sentence.",
      "Repair quickly: If I hurt someone, I will repair within the same day."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Harm to others. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Harm to others",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Three-breath pause: Take three slow breaths before answering when irritated.",
      "Name the feeling: Silently label the emotion before speaking.",
      "Gentle-first sentence: Begin difficult replies with a calmer first sentence.",
      "Repair quickly: If I hurt someone, I will repair within the same day."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Harm to others. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Harm to others",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Three-breath pause: Take three slow breaths before answering when irritated.",
      "Name the feeling: Silently label the emotion before speaking.",
      "Gentle-first sentence: Begin difficult replies with a calmer first sentence.",
      "Repair quickly: If I hurt someone, I will repair within the same day."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Harm to others. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Environmental harm",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Carry-to-bin rule: If I create waste, I will carry it until I can dispose of it properly.",
      "Reuse one item: Replace one single-use item this week.",
      "Visible responsibility: In group settings, model proper disposal without making a scene.",
      "Leave-place-better habit: Before leaving a place, improve it slightly if practical."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Environmental harm. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Environmental harm",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Carry-to-bin rule: If I create waste, I will carry it until I can dispose of it properly.",
      "Reuse one item: Replace one single-use item this week.",
      "Visible responsibility: In group settings, model proper disposal without making a scene.",
      "Leave-place-better habit: Before leaving a place, improve it slightly if practical."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Environmental harm. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Environmental harm",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Carry-to-bin rule: If I create waste, I will carry it until I can dispose of it properly.",
      "Reuse one item: Replace one single-use item this week.",
      "Visible responsibility: In group settings, model proper disposal without making a scene.",
      "Leave-place-better habit: Before leaving a place, improve it slightly if practical."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Environmental harm. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Environmental harm",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Carry-to-bin rule: If I create waste, I will carry it until I can dispose of it properly.",
      "Reuse one item: Replace one single-use item this week.",
      "Visible responsibility: In group settings, model proper disposal without making a scene.",
      "Leave-place-better habit: Before leaving a place, improve it slightly if practical."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Environmental harm. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Smoking / substance use",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Refusal sentence ready: Prepare one clear sentence for declining substances.",
      "Delay and leave: If pressured, delay the decision and step away briefly.",
      "Social trigger map: List places or people that increase pressure to use.",
      "Healthy substitute plan: Pair risky moments with tea, gum, water, or a walk."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Smoking / substance use. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Smoking / substance use",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Refusal sentence ready: Prepare one clear sentence for declining substances.",
      "Delay and leave: If pressured, delay the decision and step away briefly.",
      "Social trigger map: List places or people that increase pressure to use.",
      "Healthy substitute plan: Pair risky moments with tea, gum, water, or a walk."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Smoking / substance use. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Smoking / substance use",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Refusal sentence ready: Prepare one clear sentence for declining substances.",
      "Delay and leave: If pressured, delay the decision and step away briefly.",
      "Social trigger map: List places or people that increase pressure to use.",
      "Healthy substitute plan: Pair risky moments with tea, gum, water, or a walk."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Smoking / substance use. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "do-no-harm",
    "domain": "Do No Harm",
    "subdomain": "Smoking / substance use",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Refusal sentence ready: Prepare one clear sentence for declining substances.",
      "Delay and leave: If pressured, delay the decision and step away briefly.",
      "Social trigger map: List places or people that increase pressure to use.",
      "Healthy substitute plan: Pair risky moments with tea, gum, water, or a walk."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Smoking / substance use. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Dignity",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Equal greeting practice: Use the same respectful greeting across status differences.",
      "Name and eye-contact rule: Learn and use names with respectful eye contact.",
      "Respect audit: Notice one moment where I changed tone based on status.",
      "Dignity first phrase: Ask: am I treating this person as fully worthy of respect?"
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Dignity. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Dignity",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Equal greeting practice: Use the same respectful greeting across status differences.",
      "Name and eye-contact rule: Learn and use names with respectful eye contact.",
      "Respect audit: Notice one moment where I changed tone based on status.",
      "Dignity first phrase: Ask: am I treating this person as fully worthy of respect?"
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Dignity. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Dignity",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Equal greeting practice: Use the same respectful greeting across status differences.",
      "Name and eye-contact rule: Learn and use names with respectful eye contact.",
      "Respect audit: Notice one moment where I changed tone based on status.",
      "Dignity first phrase: Ask: am I treating this person as fully worthy of respect?"
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Dignity. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Dignity",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Equal greeting practice: Use the same respectful greeting across status differences.",
      "Name and eye-contact rule: Learn and use names with respectful eye contact.",
      "Respect audit: Notice one moment where I changed tone based on status.",
      "Dignity first phrase: Ask: am I treating this person as fully worthy of respect?"
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Dignity. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Fairness in discussion",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Invite one quiet voice: In a group, ask one quieter person for their view.",
      "No interruption minute: Allow one full minute before interrupting during discussion.",
      "Round-robin method: Use a turn-taking order in group conversations when possible.",
      "Summarize and include: Briefly summarise a quieter person’s point to keep it in the discussion."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Fairness in discussion. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Fairness in discussion",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Invite one quiet voice: In a group, ask one quieter person for their view.",
      "No interruption minute: Allow one full minute before interrupting during discussion.",
      "Round-robin method: Use a turn-taking order in group conversations when possible.",
      "Summarize and include: Briefly summarise a quieter person’s point to keep it in the discussion."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Fairness in discussion. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Fairness in discussion",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Invite one quiet voice: In a group, ask one quieter person for their view.",
      "No interruption minute: Allow one full minute before interrupting during discussion.",
      "Round-robin method: Use a turn-taking order in group conversations when possible.",
      "Summarize and include: Briefly summarise a quieter person’s point to keep it in the discussion."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Fairness in discussion. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Fairness in discussion",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Invite one quiet voice: In a group, ask one quieter person for their view.",
      "No interruption minute: Allow one full minute before interrupting during discussion.",
      "Round-robin method: Use a turn-taking order in group conversations when possible.",
      "Summarize and include: Briefly summarise a quieter person’s point to keep it in the discussion."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Fairness in discussion. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Bias awareness",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Catch the first thought: Notice one quick judgement without automatically trusting it.",
      "Replace assumption with question: Ask what evidence I actually have.",
      "Different-person practice: Have one respectful interaction with someone outside my usual group.",
      "Bias journal line: Write one bias moment and one fairer alternative response."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Bias awareness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Bias awareness",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Catch the first thought: Notice one quick judgement without automatically trusting it.",
      "Replace assumption with question: Ask what evidence I actually have.",
      "Different-person practice: Have one respectful interaction with someone outside my usual group.",
      "Bias journal line: Write one bias moment and one fairer alternative response."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Bias awareness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Bias awareness",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Catch the first thought: Notice one quick judgement without automatically trusting it.",
      "Replace assumption with question: Ask what evidence I actually have.",
      "Different-person practice: Have one respectful interaction with someone outside my usual group.",
      "Bias journal line: Write one bias moment and one fairer alternative response."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Bias awareness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Bias awareness",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Catch the first thought: Notice one quick judgement without automatically trusting it.",
      "Replace assumption with question: Ask what evidence I actually have.",
      "Different-person practice: Have one respectful interaction with someone outside my usual group.",
      "Bias journal line: Write one bias moment and one fairer alternative response."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Bias awareness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Equal respect despite disagreement",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Respectful disagreement script: Use a sentence like: I see it differently, but I want to understand your view.",
      "No contempt rule: Avoid sarcasm, mockery, or insults during disagreement.",
      "Issue vs person: Remind myself to separate the topic from the person.",
      "Cool-down option: Pause difficult conversations before they become disrespectful."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Equal respect despite disagreement. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Equal respect despite disagreement",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Respectful disagreement script: Use a sentence like: I see it differently, but I want to understand your view.",
      "No contempt rule: Avoid sarcasm, mockery, or insults during disagreement.",
      "Issue vs person: Remind myself to separate the topic from the person.",
      "Cool-down option: Pause difficult conversations before they become disrespectful."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Equal respect despite disagreement. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Equal respect despite disagreement",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Respectful disagreement script: Use a sentence like: I see it differently, but I want to understand your view.",
      "No contempt rule: Avoid sarcasm, mockery, or insults during disagreement.",
      "Issue vs person: Remind myself to separate the topic from the person.",
      "Cool-down option: Pause difficult conversations before they become disrespectful."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Equal respect despite disagreement. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "treat-equally",
    "domain": "Treat Everyone Equally",
    "subdomain": "Equal respect despite disagreement",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Respectful disagreement script: Use a sentence like: I see it differently, but I want to understand your view.",
      "No contempt rule: Avoid sarcasm, mockery, or insults during disagreement.",
      "Issue vs person: Remind myself to separate the topic from the person.",
      "Cool-down option: Pause difficult conversations before they become disrespectful."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Equal respect despite disagreement. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Self-compassion",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Kind self-talk line: Use one kind sentence toward myself after a mistake.",
      "Hand-on-heart pause: Take 20 seconds to slow and soften when self-critical thoughts rise.",
      "Mistake = human reminder: Say: making mistakes is part of being human.",
      "Compassion note: Write one supportive note to myself each week."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Self-compassion. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Self-compassion",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Kind self-talk line: Use one kind sentence toward myself after a mistake.",
      "Hand-on-heart pause: Take 20 seconds to slow and soften when self-critical thoughts rise.",
      "Mistake = human reminder: Say: making mistakes is part of being human.",
      "Compassion note: Write one supportive note to myself each week."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Self-compassion. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Self-compassion",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Kind self-talk line: Use one kind sentence toward myself after a mistake.",
      "Hand-on-heart pause: Take 20 seconds to slow and soften when self-critical thoughts rise.",
      "Mistake = human reminder: Say: making mistakes is part of being human.",
      "Compassion note: Write one supportive note to myself each week."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Self-compassion. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Self-compassion",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Kind self-talk line: Use one kind sentence toward myself after a mistake.",
      "Hand-on-heart pause: Take 20 seconds to slow and soften when self-critical thoughts rise.",
      "Mistake = human reminder: Say: making mistakes is part of being human.",
      "Compassion note: Write one supportive note to myself each week."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Self-compassion. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Warmth to others",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Warm first response: Start one daily interaction with a softer tone.",
      "Patience under stress: Delay correcting someone when they are visibly distressed.",
      "Small caring act: Do one brief caring act each day.",
      "Supportive phrase practice: Use one simple validating phrase in a hard interaction."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Warmth to others. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Warmth to others",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Warm first response: Start one daily interaction with a softer tone.",
      "Patience under stress: Delay correcting someone when they are visibly distressed.",
      "Small caring act: Do one brief caring act each day.",
      "Supportive phrase practice: Use one simple validating phrase in a hard interaction."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Warmth to others. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Warmth to others",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Warm first response: Start one daily interaction with a softer tone.",
      "Patience under stress: Delay correcting someone when they are visibly distressed.",
      "Small caring act: Do one brief caring act each day.",
      "Supportive phrase practice: Use one simple validating phrase in a hard interaction."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Warmth to others. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Warmth to others",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Warm first response: Start one daily interaction with a softer tone.",
      "Patience under stress: Delay correcting someone when they are visibly distressed.",
      "Small caring act: Do one brief caring act each day.",
      "Supportive phrase practice: Use one simple validating phrase in a hard interaction."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Warmth to others. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Forgiveness",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Release statement: Write one sentence about what I want to stop carrying.",
      "Perspective exercise: Describe the other person’s possible pressures without excusing harm.",
      "Anger check scale: Rate resentment from 0–10 once a week and note changes.",
      "Boundary plus release: Practice forgiving while still keeping needed boundaries."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Forgiveness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Forgiveness",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Release statement: Write one sentence about what I want to stop carrying.",
      "Perspective exercise: Describe the other person’s possible pressures without excusing harm.",
      "Anger check scale: Rate resentment from 0–10 once a week and note changes.",
      "Boundary plus release: Practice forgiving while still keeping needed boundaries."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Forgiveness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Forgiveness",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Release statement: Write one sentence about what I want to stop carrying.",
      "Perspective exercise: Describe the other person’s possible pressures without excusing harm.",
      "Anger check scale: Rate resentment from 0–10 once a week and note changes.",
      "Boundary plus release: Practice forgiving while still keeping needed boundaries."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Forgiveness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Forgiveness",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Release statement: Write one sentence about what I want to stop carrying.",
      "Perspective exercise: Describe the other person’s possible pressures without excusing harm.",
      "Anger check scale: Rate resentment from 0–10 once a week and note changes.",
      "Boundary plus release: Practice forgiving while still keeping needed boundaries."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Forgiveness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Balanced care",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Energy budget: Rate my available energy before taking on extra care tasks.",
      "One-for-me, one-for-you: Pair one self-care act with one caring act for another.",
      "Boundary sentence: Prepare one gentle sentence for saying no when needed.",
      "Weekly care review: Check whether I am neglecting myself or others too much."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Balanced care. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Balanced care",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Energy budget: Rate my available energy before taking on extra care tasks.",
      "One-for-me, one-for-you: Pair one self-care act with one caring act for another.",
      "Boundary sentence: Prepare one gentle sentence for saying no when needed.",
      "Weekly care review: Check whether I am neglecting myself or others too much."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Balanced care. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Balanced care",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Energy budget: Rate my available energy before taking on extra care tasks.",
      "One-for-me, one-for-you: Pair one self-care act with one caring act for another.",
      "Boundary sentence: Prepare one gentle sentence for saying no when needed.",
      "Weekly care review: Check whether I am neglecting myself or others too much."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Balanced care. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "love-yourself-and-all",
    "domain": "Love Yourself and All",
    "subdomain": "Balanced care",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Energy budget: Rate my available energy before taking on extra care tasks.",
      "One-for-me, one-for-you: Pair one self-care act with one caring act for another.",
      "Boundary sentence: Prepare one gentle sentence for saying no when needed.",
      "Weekly care review: Check whether I am neglecting myself or others too much."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Balanced care. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Food",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Healthy default swap: Choose one healthier default meal option this week.",
      "Meal plan cue: Decide one main meal before hunger is high.",
      "Fruit/veg anchor: Add one fruit or vegetable to one routine meal daily.",
      "Convenience redesign: Keep one healthier quick option readily available."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Food. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Food",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Healthy default swap: Choose one healthier default meal option this week.",
      "Meal plan cue: Decide one main meal before hunger is high.",
      "Fruit/veg anchor: Add one fruit or vegetable to one routine meal daily.",
      "Convenience redesign: Keep one healthier quick option readily available."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Food. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Food",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Healthy default swap: Choose one healthier default meal option this week.",
      "Meal plan cue: Decide one main meal before hunger is high.",
      "Fruit/veg anchor: Add one fruit or vegetable to one routine meal daily.",
      "Convenience redesign: Keep one healthier quick option readily available."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Food. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Food",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Healthy default swap: Choose one healthier default meal option this week.",
      "Meal plan cue: Decide one main meal before hunger is high.",
      "Fruit/veg anchor: Add one fruit or vegetable to one routine meal daily.",
      "Convenience redesign: Keep one healthier quick option readily available."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Food. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Sleep",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "30-minute wind-down: Create a short wind-down routine before sleep.",
      "Screen-off cue: Set one fixed time to stop scrolling at night.",
      "Consistent bedtime target: Aim for a similar sleep time on most nights.",
      "Sleep trigger note: Notice what most often steals my sleep and plan around it."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Sleep. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Sleep",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "30-minute wind-down: Create a short wind-down routine before sleep.",
      "Screen-off cue: Set one fixed time to stop scrolling at night.",
      "Consistent bedtime target: Aim for a similar sleep time on most nights.",
      "Sleep trigger note: Notice what most often steals my sleep and plan around it."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Sleep. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Sleep",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "30-minute wind-down: Create a short wind-down routine before sleep.",
      "Screen-off cue: Set one fixed time to stop scrolling at night.",
      "Consistent bedtime target: Aim for a similar sleep time on most nights.",
      "Sleep trigger note: Notice what most often steals my sleep and plan around it."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Sleep. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Sleep",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "30-minute wind-down: Create a short wind-down routine before sleep.",
      "Screen-off cue: Set one fixed time to stop scrolling at night.",
      "Consistent bedtime target: Aim for a similar sleep time on most nights.",
      "Sleep trigger note: Notice what most often steals my sleep and plan around it."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Sleep. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Hydration",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Visible water bottle: Keep water within sight during the day.",
      "Drink-on-transition rule: Drink water at regular transitions like meals or meetings.",
      "Refill challenge: Refill my bottle a set number of times per day.",
      "Hydration check: Notice tiredness or headache as prompts to check water intake."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Hydration. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Hydration",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Visible water bottle: Keep water within sight during the day.",
      "Drink-on-transition rule: Drink water at regular transitions like meals or meetings.",
      "Refill challenge: Refill my bottle a set number of times per day.",
      "Hydration check: Notice tiredness or headache as prompts to check water intake."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Hydration. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Hydration",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Visible water bottle: Keep water within sight during the day.",
      "Drink-on-transition rule: Drink water at regular transitions like meals or meetings.",
      "Refill challenge: Refill my bottle a set number of times per day.",
      "Hydration check: Notice tiredness or headache as prompts to check water intake."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Hydration. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Hydration",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Visible water bottle: Keep water within sight during the day.",
      "Drink-on-transition rule: Drink water at regular transitions like meals or meetings.",
      "Refill challenge: Refill my bottle a set number of times per day.",
      "Hydration check: Notice tiredness or headache as prompts to check water intake."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Hydration. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Physical activity",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Ten-minute movement block: Add one short walk or movement block daily.",
      "Movement if-then plan: If I feel too tired for exercise, I will still do 5 minutes.",
      "Step-count cue: Use a step or distance target as a simple tracker.",
      "Activity buddy: Do one weekly movement session with another person."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Physical activity. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Physical activity",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Ten-minute movement block: Add one short walk or movement block daily.",
      "Movement if-then plan: If I feel too tired for exercise, I will still do 5 minutes.",
      "Step-count cue: Use a step or distance target as a simple tracker.",
      "Activity buddy: Do one weekly movement session with another person."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Physical activity. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Physical activity",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Ten-minute movement block: Add one short walk or movement block daily.",
      "Movement if-then plan: If I feel too tired for exercise, I will still do 5 minutes.",
      "Step-count cue: Use a step or distance target as a simple tracker.",
      "Activity buddy: Do one weekly movement session with another person."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Physical activity. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "eat-healthy-live-healthy",
    "domain": "Eat Healthy, Live Healthy",
    "subdomain": "Physical activity",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Ten-minute movement block: Add one short walk or movement block daily.",
      "Movement if-then plan: If I feel too tired for exercise, I will still do 5 minutes.",
      "Step-count cue: Use a step or distance target as a simple tracker.",
      "Activity buddy: Do one weekly movement session with another person."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Physical activity. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Impulse spending",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "24-hour pause: Delay non-essential purchases for 24 hours.",
      "Cart but don’t buy: Place items in a cart and revisit later rather than buying immediately.",
      "Spending trigger note: Track what moods or situations trigger impulse buys.",
      "Goal reminder card: Look at one savings goal before making optional purchases."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Impulse spending. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Impulse spending",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "24-hour pause: Delay non-essential purchases for 24 hours.",
      "Cart but don’t buy: Place items in a cart and revisit later rather than buying immediately.",
      "Spending trigger note: Track what moods or situations trigger impulse buys.",
      "Goal reminder card: Look at one savings goal before making optional purchases."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Impulse spending. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Impulse spending",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "24-hour pause: Delay non-essential purchases for 24 hours.",
      "Cart but don’t buy: Place items in a cart and revisit later rather than buying immediately.",
      "Spending trigger note: Track what moods or situations trigger impulse buys.",
      "Goal reminder card: Look at one savings goal before making optional purchases."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Impulse spending. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Impulse spending",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "24-hour pause: Delay non-essential purchases for 24 hours.",
      "Cart but don’t buy: Place items in a cart and revisit later rather than buying immediately.",
      "Spending trigger note: Track what moods or situations trigger impulse buys.",
      "Goal reminder card: Look at one savings goal before making optional purchases."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Impulse spending. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Facing money issues",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Weekly money check: Review bills, balances, and urgent items once a week.",
      "Open one message: If I avoid money, I will still open one bill or statement today.",
      "Money stress naming: Name the specific problem instead of feeling one vague stress cloud.",
      "One-step plan: After reviewing finances, decide one next action only."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Facing money issues. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Facing money issues",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Weekly money check: Review bills, balances, and urgent items once a week.",
      "Open one message: If I avoid money, I will still open one bill or statement today.",
      "Money stress naming: Name the specific problem instead of feeling one vague stress cloud.",
      "One-step plan: After reviewing finances, decide one next action only."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Facing money issues. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Facing money issues",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Weekly money check: Review bills, balances, and urgent items once a week.",
      "Open one message: If I avoid money, I will still open one bill or statement today.",
      "Money stress naming: Name the specific problem instead of feeling one vague stress cloud.",
      "One-step plan: After reviewing finances, decide one next action only."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Facing money issues. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Facing money issues",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Weekly money check: Review bills, balances, and urgent items once a week.",
      "Open one message: If I avoid money, I will still open one bill or statement today.",
      "Money stress naming: Name the specific problem instead of feeling one vague stress cloud.",
      "One-step plan: After reviewing finances, decide one next action only."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Facing money issues. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Budgeting",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Three-bucket budget: Use simple buckets: essentials, future, and optional spending.",
      "Track one week first: Record spending for just one week to build awareness.",
      "Payday plan ritual: Make a short plan on the day money arrives.",
      "Visible monthly cap: Set one visible spending cap for a known weak area."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Budgeting. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Budgeting",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Three-bucket budget: Use simple buckets: essentials, future, and optional spending.",
      "Track one week first: Record spending for just one week to build awareness.",
      "Payday plan ritual: Make a short plan on the day money arrives.",
      "Visible monthly cap: Set one visible spending cap for a known weak area."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Budgeting. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Budgeting",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Three-bucket budget: Use simple buckets: essentials, future, and optional spending.",
      "Track one week first: Record spending for just one week to build awareness.",
      "Payday plan ritual: Make a short plan on the day money arrives.",
      "Visible monthly cap: Set one visible spending cap for a known weak area."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Budgeting. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Budgeting",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Three-bucket budget: Use simple buckets: essentials, future, and optional spending.",
      "Track one week first: Record spending for just one week to build awareness.",
      "Payday plan ritual: Make a short plan on the day money arrives.",
      "Visible monthly cap: Set one visible spending cap for a known weak area."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Budgeting. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Value-based money decisions",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Why am I buying this?: Ask what value this spending serves.",
      "Needs before wants rule: Check whether core responsibilities are covered first.",
      "Regret test: Ask whether I would still approve this purchase next week.",
      "Goal-linked spending: Tie one saving or repayment action to each payday."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Value-based money decisions. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Value-based money decisions",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Why am I buying this?: Ask what value this spending serves.",
      "Needs before wants rule: Check whether core responsibilities are covered first.",
      "Regret test: Ask whether I would still approve this purchase next week.",
      "Goal-linked spending: Tie one saving or repayment action to each payday."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Value-based money decisions. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Value-based money decisions",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Why am I buying this?: Ask what value this spending serves.",
      "Needs before wants rule: Check whether core responsibilities are covered first.",
      "Regret test: Ask whether I would still approve this purchase next week.",
      "Goal-linked spending: Tie one saving or repayment action to each payday."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Value-based money decisions. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "financial-freedom",
    "domain": "Achieving Financial Freedom",
    "subdomain": "Value-based money decisions",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Why am I buying this?: Ask what value this spending serves.",
      "Needs before wants rule: Check whether core responsibilities are covered first.",
      "Regret test: Ask whether I would still approve this purchase next week.",
      "Goal-linked spending: Tie one saving or repayment action to each payday."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Value-based money decisions. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Receiving praise",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Share credit sentence: Name at least one other contributor when praised.",
      "Gratitude pause: Pause and feel gratitude instead of expanding ego.",
      "Team acknowledgment habit: Include others in success summaries regularly.",
      "Private reflection: Ask what helped me succeed beyond my own effort."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Receiving praise. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Receiving praise",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Share credit sentence: Name at least one other contributor when praised.",
      "Gratitude pause: Pause and feel gratitude instead of expanding ego.",
      "Team acknowledgment habit: Include others in success summaries regularly.",
      "Private reflection: Ask what helped me succeed beyond my own effort."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Receiving praise. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Receiving praise",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Share credit sentence: Name at least one other contributor when praised.",
      "Gratitude pause: Pause and feel gratitude instead of expanding ego.",
      "Team acknowledgment habit: Include others in success summaries regularly.",
      "Private reflection: Ask what helped me succeed beyond my own effort."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Receiving praise. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Receiving praise",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Share credit sentence: Name at least one other contributor when praised.",
      "Gratitude pause: Pause and feel gratitude instead of expanding ego.",
      "Team acknowledgment habit: Include others in success summaries regularly.",
      "Private reflection: Ask what helped me succeed beyond my own effort."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Receiving praise. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Accepting feedback",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Pause before defending: Wait five seconds before answering feedback.",
      "Repeat back the point: Summarize the feedback before responding.",
      "Find one useful piece: Identify one part of the feedback I can use.",
      "Feedback journal: Record one learning point from feedback each week."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Accepting feedback. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Accepting feedback",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Pause before defending: Wait five seconds before answering feedback.",
      "Repeat back the point: Summarize the feedback before responding.",
      "Find one useful piece: Identify one part of the feedback I can use.",
      "Feedback journal: Record one learning point from feedback each week."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Accepting feedback. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Accepting feedback",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Pause before defending: Wait five seconds before answering feedback.",
      "Repeat back the point: Summarize the feedback before responding.",
      "Find one useful piece: Identify one part of the feedback I can use.",
      "Feedback journal: Record one learning point from feedback each week."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Accepting feedback. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Accepting feedback",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Pause before defending: Wait five seconds before answering feedback.",
      "Repeat back the point: Summarize the feedback before responding.",
      "Find one useful piece: Identify one part of the feedback I can use.",
      "Feedback journal: Record one learning point from feedback each week."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Accepting feedback. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Admitting wrong",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Say it clearly: Use a direct sentence: I was wrong about that.",
      "Repair step: After admitting error, add one concrete repair action.",
      "No self-justification minute: Avoid over-explaining immediately after admitting wrong.",
      "Mistake review: Reflect on one benefit of admitting mistakes honestly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Admitting wrong. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Admitting wrong",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Say it clearly: Use a direct sentence: I was wrong about that.",
      "Repair step: After admitting error, add one concrete repair action.",
      "No self-justification minute: Avoid over-explaining immediately after admitting wrong.",
      "Mistake review: Reflect on one benefit of admitting mistakes honestly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Admitting wrong. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Admitting wrong",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Say it clearly: Use a direct sentence: I was wrong about that.",
      "Repair step: After admitting error, add one concrete repair action.",
      "No self-justification minute: Avoid over-explaining immediately after admitting wrong.",
      "Mistake review: Reflect on one benefit of admitting mistakes honestly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Admitting wrong. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Admitting wrong",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Say it clearly: Use a direct sentence: I was wrong about that.",
      "Repair step: After admitting error, add one concrete repair action.",
      "No self-justification minute: Avoid over-explaining immediately after admitting wrong.",
      "Mistake review: Reflect on one benefit of admitting mistakes honestly."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Admitting wrong. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Learning from anyone",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Idea before status rule: Evaluate the idea before the person’s role.",
      "Ask one junior voice: Seek one idea from someone lower in hierarchy.",
      "Useful idea log: Write down helpful ideas regardless of source.",
      "Curiosity sentence: Use: tell me more about what you mean."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Learning from anyone. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Learning from anyone",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Idea before status rule: Evaluate the idea before the person’s role.",
      "Ask one junior voice: Seek one idea from someone lower in hierarchy.",
      "Useful idea log: Write down helpful ideas regardless of source.",
      "Curiosity sentence: Use: tell me more about what you mean."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Learning from anyone. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Learning from anyone",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Idea before status rule: Evaluate the idea before the person’s role.",
      "Ask one junior voice: Seek one idea from someone lower in hierarchy.",
      "Useful idea log: Write down helpful ideas regardless of source.",
      "Curiosity sentence: Use: tell me more about what you mean."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Learning from anyone. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "be-humble",
    "domain": "Be Humble",
    "subdomain": "Learning from anyone",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Idea before status rule: Evaluate the idea before the person’s role.",
      "Ask one junior voice: Seek one idea from someone lower in hierarchy.",
      "Useful idea log: Write down helpful ideas regardless of source.",
      "Curiosity sentence: Use: tell me more about what you mean."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Learning from anyone. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Early awareness",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Body-signal scan: Notice shoulders, jaw, breath, or heart rate when irritated.",
      "Emotion label: Name the emotion before acting.",
      "Trigger list: Identify my top three anger triggers.",
      "Scale it 0–10: Rate rising anger quickly to catch escalation early."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Early awareness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Early awareness",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Body-signal scan: Notice shoulders, jaw, breath, or heart rate when irritated.",
      "Emotion label: Name the emotion before acting.",
      "Trigger list: Identify my top three anger triggers.",
      "Scale it 0–10: Rate rising anger quickly to catch escalation early."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Early awareness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Early awareness",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Body-signal scan: Notice shoulders, jaw, breath, or heart rate when irritated.",
      "Emotion label: Name the emotion before acting.",
      "Trigger list: Identify my top three anger triggers.",
      "Scale it 0–10: Rate rising anger quickly to catch escalation early."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Early awareness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Early awareness",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Body-signal scan: Notice shoulders, jaw, breath, or heart rate when irritated.",
      "Emotion label: Name the emotion before acting.",
      "Trigger list: Identify my top three anger triggers.",
      "Scale it 0–10: Rate rising anger quickly to catch escalation early."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Early awareness. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Response delay",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Three-breath rule: Take three breaths before replying when upset.",
      "Water pause: Take one sip of water before speaking in conflict.",
      "Step back physically: Move back or sit down before answering.",
      "Delay phrase: Use: let me answer this in a moment."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Response delay. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Response delay",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Three-breath rule: Take three breaths before replying when upset.",
      "Water pause: Take one sip of water before speaking in conflict.",
      "Step back physically: Move back or sit down before answering.",
      "Delay phrase: Use: let me answer this in a moment."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Response delay. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Response delay",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Three-breath rule: Take three breaths before replying when upset.",
      "Water pause: Take one sip of water before speaking in conflict.",
      "Step back physically: Move back or sit down before answering.",
      "Delay phrase: Use: let me answer this in a moment."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Response delay. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Response delay",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Three-breath rule: Take three breaths before replying when upset.",
      "Water pause: Take one sip of water before speaking in conflict.",
      "Step back physically: Move back or sit down before answering.",
      "Delay phrase: Use: let me answer this in a moment."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Response delay. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "De-escalation",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Lower voice first: Deliberately reduce volume before content.",
      "Use one calm sentence: Start with a sentence that lowers threat.",
      "Time-out agreement: Pause the conversation if intensity rises too far.",
      "Focus on one issue: Avoid adding past grievances during conflict."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for De-escalation. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "De-escalation",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Lower voice first: Deliberately reduce volume before content.",
      "Use one calm sentence: Start with a sentence that lowers threat.",
      "Time-out agreement: Pause the conversation if intensity rises too far.",
      "Focus on one issue: Avoid adding past grievances during conflict."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for De-escalation. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "De-escalation",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Lower voice first: Deliberately reduce volume before content.",
      "Use one calm sentence: Start with a sentence that lowers threat.",
      "Time-out agreement: Pause the conversation if intensity rises too far.",
      "Focus on one issue: Avoid adding past grievances during conflict."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for De-escalation. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "De-escalation",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Lower voice first: Deliberately reduce volume before content.",
      "Use one calm sentence: Start with a sentence that lowers threat.",
      "Time-out agreement: Pause the conversation if intensity rises too far.",
      "Focus on one issue: Avoid adding past grievances during conflict."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for De-escalation. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Recovery",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Post-stress walk: Take a brief walk after conflict or upset.",
      "Reset breath + posture: Use one minute of slower breathing and relaxed posture.",
      "Do not spread the stress: Pause before carrying the mood into another interaction.",
      "Reconnection step: If appropriate, reconnect calmly after settling."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Recovery. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Recovery",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Post-stress walk: Take a brief walk after conflict or upset.",
      "Reset breath + posture: Use one minute of slower breathing and relaxed posture.",
      "Do not spread the stress: Pause before carrying the mood into another interaction.",
      "Reconnection step: If appropriate, reconnect calmly after settling."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Recovery. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Recovery",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Post-stress walk: Take a brief walk after conflict or upset.",
      "Reset breath + posture: Use one minute of slower breathing and relaxed posture.",
      "Do not spread the stress: Pause before carrying the mood into another interaction.",
      "Reconnection step: If appropriate, reconnect calmly after settling."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Recovery. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "stay-calm",
    "domain": "Stay Calm and Eliminate Anger",
    "subdomain": "Recovery",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Post-stress walk: Take a brief walk after conflict or upset.",
      "Reset breath + posture: Use one minute of slower breathing and relaxed posture.",
      "Do not spread the stress: Pause before carrying the mood into another interaction.",
      "Reconnection step: If appropriate, reconnect calmly after settling."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Recovery. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Flexibility",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Plan A / Plan B: Make one backup route for important plans.",
      "Change phrase: Use: this changed, now what is the next workable step?",
      "Small adaptability practice: Deliberately vary one minor routine sometimes.",
      "Reframe delay: Treat disruption as a problem to solve, not proof of failure."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Flexibility. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Flexibility",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Plan A / Plan B: Make one backup route for important plans.",
      "Change phrase: Use: this changed, now what is the next workable step?",
      "Small adaptability practice: Deliberately vary one minor routine sometimes.",
      "Reframe delay: Treat disruption as a problem to solve, not proof of failure."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Flexibility. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Flexibility",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Plan A / Plan B: Make one backup route for important plans.",
      "Change phrase: Use: this changed, now what is the next workable step?",
      "Small adaptability practice: Deliberately vary one minor routine sometimes.",
      "Reframe delay: Treat disruption as a problem to solve, not proof of failure."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Flexibility. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Flexibility",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Plan A / Plan B: Make one backup route for important plans.",
      "Change phrase: Use: this changed, now what is the next workable step?",
      "Small adaptability practice: Deliberately vary one minor routine sometimes.",
      "Reframe delay: Treat disruption as a problem to solve, not proof of failure."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Flexibility. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Acceptance",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Control-circle note: Write what I can and cannot control in this situation.",
      "Reality sentence: Use: I do not like this, but it is what is here now.",
      "Stop replay cue: Set a limit on mental replay and return to the next action.",
      "One acceptance breath: Take one breath while naming the fact I cannot change."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Acceptance. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Acceptance",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Control-circle note: Write what I can and cannot control in this situation.",
      "Reality sentence: Use: I do not like this, but it is what is here now.",
      "Stop replay cue: Set a limit on mental replay and return to the next action.",
      "One acceptance breath: Take one breath while naming the fact I cannot change."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Acceptance. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Acceptance",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Control-circle note: Write what I can and cannot control in this situation.",
      "Reality sentence: Use: I do not like this, but it is what is here now.",
      "Stop replay cue: Set a limit on mental replay and return to the next action.",
      "One acceptance breath: Take one breath while naming the fact I cannot change."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Acceptance. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Acceptance",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Control-circle note: Write what I can and cannot control in this situation.",
      "Reality sentence: Use: I do not like this, but it is what is here now.",
      "Stop replay cue: Set a limit on mental replay and return to the next action.",
      "One acceptance breath: Take one breath while naming the fact I cannot change."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Acceptance. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Recovery after disappointment",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "What now? question: After setback, ask what the next helpful step is.",
      "Setback reflection: Write what happened, what hurt, and what remains possible.",
      "Resume one small action: Restart momentum with one tiny task.",
      "Support after disappointment: Tell one trusted person what happened."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Recovery after disappointment. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Recovery after disappointment",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "What now? question: After setback, ask what the next helpful step is.",
      "Setback reflection: Write what happened, what hurt, and what remains possible.",
      "Resume one small action: Restart momentum with one tiny task.",
      "Support after disappointment: Tell one trusted person what happened."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Recovery after disappointment. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Recovery after disappointment",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "What now? question: After setback, ask what the next helpful step is.",
      "Setback reflection: Write what happened, what hurt, and what remains possible.",
      "Resume one small action: Restart momentum with one tiny task.",
      "Support after disappointment: Tell one trusted person what happened."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Recovery after disappointment. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Recovery after disappointment",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "What now? question: After setback, ask what the next helpful step is.",
      "Setback reflection: Write what happened, what hurt, and what remains possible.",
      "Resume one small action: Restart momentum with one tiny task.",
      "Support after disappointment: Tell one trusted person what happened."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Recovery after disappointment. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Plan B mindset",
    "scorePattern": "very low",
    "whenToUse": "Use when both domain score and this subdomain score are clearly weak, or when this is one of the lowest subdomains in the profile.",
    "recommendedFocus": "Start with the smallest and easiest actions. Build safety, consistency, and basic awareness first.",
    "activities": [
      "Obstacle map: List the main obstacle and two alternative routes.",
      "Backup-by-default: For important goals, decide a second option in advance.",
      "Purpose over method reminder: Remind myself that the goal matters more than one exact route.",
      "Weekly Plan B review: Review one stuck area and design a next alternative path."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Plan B mindset. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Plan B mindset",
    "scorePattern": "low",
    "whenToUse": "Use when the main domain is weak or emerging and this subdomain needs direct strengthening.",
    "recommendedFocus": "Use simple repeatable actions that strengthen the weak habit without overwhelming the participant.",
    "activities": [
      "Obstacle map: List the main obstacle and two alternative routes.",
      "Backup-by-default: For important goals, decide a second option in advance.",
      "Purpose over method reminder: Remind myself that the goal matters more than one exact route.",
      "Weekly Plan B review: Review one stuck area and design a next alternative path."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Plan B mindset. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Plan B mindset",
    "scorePattern": "moderate",
    "whenToUse": "Use when the domain is moderate but this subdomain still limits growth.",
    "recommendedFocus": "Use maintenance-plus-improvement actions to make the response more stable and more reflective.",
    "activities": [
      "Obstacle map: List the main obstacle and two alternative routes.",
      "Backup-by-default: For important goals, decide a second option in advance.",
      "Purpose over method reminder: Remind myself that the goal matters more than one exact route.",
      "Weekly Plan B review: Review one stuck area and design a next alternative path."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Plan B mindset. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  },
  {
    "ruleId": "accept-change",
    "domain": "Accept Change, Embrace Impermanence",
    "subdomain": "Plan B mindset",
    "scorePattern": "good/strong but uneven",
    "whenToUse": "Use when the person is generally doing well but this subdomain is lower than the rest.",
    "recommendedFocus": "Use a light-touch action plan to fine-tune this subdomain and reduce imbalance inside the domain.",
    "activities": [
      "Obstacle map: List the main obstacle and two alternative routes.",
      "Backup-by-default: For important goals, decide a second option in advance.",
      "Purpose over method reminder: Remind myself that the goal matters more than one exact route.",
      "Weekly Plan B review: Review one stuck area and design a next alternative path."
    ],
    "whyTheseFit": "These activities were selected from the evidence-based library for Plan B mindset. They prioritise low-friction daily actions, repetition, and behaviour cues that can be practiced over one month and reflected on at the next PLI.",
    "monthlyUse": "Choose 2 activities in week 1, add a 3rd in week 2, continue practice in weeks 3–4, then review before the next monthly PLI."
  }
];

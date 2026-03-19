# Peaceful Life Index — Version 6.1 final patched browser edition

This is a patched browser-based PLI edition designed for easy Vercel deployment.

## What this patch fixes
- fixes a real TypeScript syntax error in `lib/storage.ts`
- uses a fresh browser storage version key
- improves legacy data cleanup
- updates header, footer, and metadata text
- keeps the Version 6 assessment structure, dashboard, and interventions

## What it includes
- 10 domains based on the 10 Golden Rules
- 10 questions per domain
- browser-saved profile and assessment history
- clear-data reset button
- radar profile, progress chart, and interaction grid
- practical SBCC growth actions

## Important
This is still a browser-storage edition.
It does not include true email-auth sign-in or a backend database.

## Deployment
- upload to a new GitHub repo
- import into Vercel
- no environment variables required


## Version 6.2 patch

- fixes the Next.js 15 dynamic route `params` typing in `app/rules/[ruleId]/page.tsx`


## Version 6.3 patch

- fixes a React hook-order bug in the results dashboard that caused a client-side crash after completing the assessment


## Version 6.4 patch

- scrolls to the top automatically when moving to the next rule
- highlights missed questions and explains why Next does not proceed
- uses clearer numbering: absolute question number plus rule item number


## Version 6.5 patch

- strengthens automatic top scroll on rule change
- adds explicit current-rule completion messaging
- makes unanswered-question highlighting and messaging more forceful
- keeps absolute numbering across all 100 questions


## Version 6.6 patch

- removes Browser Edition wording from visible homepage branding
- removes the Version 6 homepage sentence
- adds clear monthly 30-day assessment instructions before the questionnaire starts
- adds more tailored SBCC guidance by domain and score band


## Version 6.7 patch

- keeps the Version 6.6 homepage and monthly 30-day instruction changes
- refines question wording so every rule contains clearer practical daily-life scenario items
- ensures at least 4 scenario-style items per domain while keeping 10 items per domain


## Version 6.8 patch

- replaces the evidence note card with an About the Book and Developer section
- adds two buttons: About the book and About the developer
- adds dedicated pages for both buttons


## Version 6.9 patch

- replaces the frequency-style questionnaire with a story-based situational assessment
- uses 4 scenarios per domain and 40 scenarios in total
- each scenario has 5 tailored I-form answer options scored from 0 to 4
- updates scoring so each domain is scaled from raw 0–16 to 0–10 before PLI weighting and interaction adjustment
- keeps the existing dashboard structure and PLI visualization model
\n\n## Version 6.10 patch\n\n- simplifies the scenario numbering on the assessment cards\n- removes the Evidence note from each rule detail page\n- adds a Happiness Blueprint message card for each Golden Rule domain\n- keeps the Version 6.9 scenario-based structure and dashboard layout\n

## Version 6.11 patch

- updates all 40 questionnaire scenarios to the realistic named-character story set
- aligns all answer choices to the specific people, tasks, and events in each story
- keeps the Version 6.10 dashboard, numbering, and book-message structure


## Version 6.12 patch

- adds a Nimal/Maya assessment character selector before the questionnaire starts
- keeps the same domain structure, scoring, dashboard, and result logic
- swaps story text according to the selected character pathway while preserving score comparability
- shows the selected story pathway on the assessment and results screens


## Version 6.13 patch

- adds a Practice Plan page
- builds a monthly SBCC plan from the latest PLI result
- shows weakest domain and subdomain focus
- provides an intervention table for the next 30 days
- suggests the next PLI assessment date automatically


## Version 6.14 patch

- adds lightweight Nimal and Maya character visuals
- adds domain hero visuals for each Golden Rule
- adds subdomain badges and gentle motion styling
- refreshes homepage, character selection, assessment, results, and rule detail pages with more engaging visuals


## Version 6.14.2 patch

- fixes results dashboard chart prop mismatches
- PliRadarChart now receives `scores`
- InteractionGrid is rendered without unsupported props

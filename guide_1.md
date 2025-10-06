# Flowreview (aka “ReviewFlow”) — Product & Technical Guide  
**Version:** 1.0 • **Date:** 07.10.2025 • **Status:** Inception  
**Owner:** Gal Sasson • **Contact:** Gal@Joya-tech.net  

> 🇮🇱 מסמך זה מיועד גם לשוק הישראלי. כותרות עיקריות כוללות תרגום (בעברית) בסוגריים.

---

## Table of Contents
1. [Executive Summary (תקציר מנהלים)](#1-executive-summary-תקציר-מנהלים)  
2. [Vision & Mission (חזון ומטרה)](#2-vision--mission-חזון-ומטרה)  
3. [Target Audience & Personas (קהל יעד ופרסונות)](#3-target-audience--personas-קהל-יעד-ופרסונות)  
4. [Core Features by Phase (פיצ'רים ותכולות)](#4-core-features-by-phase-פיצרים-ותכולות)  
5. [Acceptance Criteria & NFRs (קריטריוני קבלה ואיכות)](#5-acceptance-criteria--nfrs-קריטריוני-קבלה-ואיכות)  
6. [Architecture & System Design (ארכיטקטורה)](#6-architecture--system-design-ארכיטקטורה)  
7. [Security, Privacy & Compliance (אבטחה ורגולציה)](#7-security-privacy--compliance-אבטחה-ורגולציה)  
8. [Data Model & Schema (סכמת נתונים)](#8-data-model--schema-סכמת-נתונים)  
9. [API Design (ממשק API)](#9-api-design-ממשק-api)  
10. [AI & Automation (בינה מלאכותית)](#10-ai--automation-בינה-מלאכותית)  
11. [Integrations (אינטגרציות)](#11-integrations-אינטגרציות)  
12. [UX Flows & Content (חוויית משתמש ותכנים)](#12-ux-flows--content-חוויית-משתמש-ותכנים)  
13. [Observability & SLOs (ניטור ויעדים)](#13-observability--slos-ניטור-ויעדים)  
14. [Testing Strategy (בדיקות)](#14-testing-strategy-בדיקות)  
15. [Deployment & Ops (פריסה ותפעול)](#15-deployment--ops-פריסה-ותפעול)  
16. [Roadmap & Milestones (מפת דרכים)](#16-roadmap--milestones-מפת-דרכים)  
17. [Glossary (מילון מונחים)](#17-glossary-מילון-מונחים)  
18. [Appendix (נספחים)](#18-appendix-נספחים)

---

## 1. Executive Summary (תקציר מנהלים)
**Flowreview** הוא פתרון SaaS לאוטומציה וניהול ביקורות לקוחות עבור SMBs בישראל. ה”Smart Review Funnel” מגדיל את כמות הביקורות החיוביות בפלטפורמות ציבוריות (למשל Google), ומנתב משוב שלילי לערוץ פרטי לצורך טיפול ושיפור חוויית הלקוח. המוצר מתפתח למרכז מצוינות: ניהול מוניטין, אינטליגנציה עסקית, ואוטומציית שיווק מבוססת משוב.

> **Important:** Google אינו מאפשר קביעת דירוג מראש (prefill) בלינק הביקורת. אנו מפנים למסך כתיבת ביקורת; הלקוח בוחר דירוג ותוכן בעצמו.

---

## 2. Vision & Mission (חזון ומטרה)
- **Vision:** להיות פלטפורמת ניהול המוניטין ואינטליגנציית הלקוחות המובילה בישראל.  
- **Mission:** לספק כלי אינטואיטיבי ואוטומטי לאיסוף וניהול ביקורות, הפקת תובנות אופרטיביות, והעמקת הקשר עם לקוחות.

---

## 3. Target Audience & Personas (קהל יעד ופרסונות)
1) **Dana Levi — Busy Owner (בעלת עסק עסוקה):** קפה בת”א; צריכה “שגר ושכח”, ניהול תלונות בדיסקרטיות, והבנה מה גרם ללקוחות לשמוח/לכעוס.  
2) **Tomer Cohen — Agency Manager (מנהל סוכנות):** מנהל 15 לקוחות; רוצה דאשבורד מרוכז, White-Label, ודוחות ROI.  
3) **Yair Avraham — Franchise Owner (בעל רשת):** 8 מרפאות; צריך השוואת ביצועים בין סניפים ותובנות ברמת מותג.

---

## 4. Core Features by Phase (פיצ'רים ותכולות)

### Phase 1 — MVP: Smart Funnel
- Onboarding Wizard (חיבור Google Business Profile, הגדרות ראשוניות).  
- Manual Sender: שליחת בקשת ביקורת ב-SMS/Email.  
- **Smart Funnel Logic:**  
  - בקשת משוב פנימי (1–5 ⭐ / 😊😞).  
  - **4–5⭐** → הפניה למסך כתיבת ביקורת ב-Google.  
  - **1–3⭐** → טופס פנימי פרטי + התראה במייל לבעל העסק.  
- Basic Dashboard (בקשות שנשלחו, פתיחות, משובים).

### Phase 2 — Automation & Intelligence
- Multi-Channel: WhatsApp, QR.  
- Triggers & Integrations: API, Zapier.  
- Centralized Review Inbox (Google).  
- **AI Reply Assistant:** 2–3 טיוטות תגובה מקצועיות; אישור בלחיצה.  
- Website Widget: “Best Reviews”.

### Phase 3 — Growth Suite
- Multi-Platform: Facebook, Easy, Zap.  
- Sentiment Dashboard: נושאים מרכזיים (“שירות”, “מחיר”, “ניקיון”).  
- Referral Engine: קופון אחרי 5⭐.  
- List Building: opt-in דוא"ל/ווטסאפ.

### Phase 4 — Scale (Agency/Enterprise)
- White-Label לאייג'נסיז.  
- Multi-Location/Franchise Analytics.  
- Advanced Reporting: PDF דוחות מגמות ודירוג.

---

## 5. Acceptance Criteria & NFRs (קריטריוני קבלה ואיכות)

### MVP Acceptance (high-level)
- [ ] יצירת קמפיין והגדרת תבניות הודעה.  
- [ ] שליחת בקשת ביקורת ללקוח (SMS/Email) וניטור סטטוס.  
- [ ] לוגיקת Funnel: חיובי→Google, שלילי→טופס פנימי + התראה.  
- [ ] דאשבורד בסיסי עם KPI: Requests Sent, Open Rate, Internal Feedback.  
- [ ] הצגת ביקורות Google ב-Inbox ותיוג “Needs Reply”.

### Non-Functional Requirements
- **Availability:** ≥ 99.5% (MVP), יעד 99.9% לאחר GA.  
- **Performance:** p95 API < 400ms (read), < 800ms (write).  
- **Security:** OAuth 2.0 (Google), JWT, הצפנת data-at-rest.  
- **Privacy:** מינימום PII, שמירה לפי חוק הגנת הפרטיות ו-GDPR.  
- **Accessibility:** WCAG 2.1 AA.  
- **Localization:** EN/HE.

---

## 6. Architecture & System Design (ארכיטקטורה)

### Current Prototype (Vite + React + TS)
- Client-only demo for fast iteration.  
- AI calls via **Gemini** (dev only, key ב-client — לא לפרודקשן).  

### Target Production
- **Frontend:** Next.js + TS, Tailwind/Shadcn.  
- **Backend:** Node.js (Express/NestJS).  
- **DB:** PostgreSQL.  
- **Auth:** NextAuth.js (Google OAuth), JWT.  
- **AI:** Server-side calls (OpenAI/Gemini).  
- **Messaging:** SMS/WhatsApp providers.  
- **Infra:** Vercel (FE), AWS/GCP (API+DB).

#### High-Level Diagram
```mermaid
flowchart LR
  subgraph Client[Web App (Next.js)]
    UI[UI + Router] --> SDK[API Client]
    UI --> Widget[Reviews Widget]
  end

  subgraph Server[API]
    Auth[Auth & Sessions]
    Funnel[Smart Funnel Service]
    Reviews[Reviews Inbox + AI Reply]
    Notify[Notifications]
    Integrations[Integrations Hub]
  end

  DB[(PostgreSQL)]
  MQ[[Queue/Jobs]]
  GBPAI[Google Business Profile API]
  SMS[SMS/Email/WhatsApp Providers]
  LLM[(LLM Provider)]
  Zap[Zapier/Webhooks]

  SDK --> Server
  Server --> DB
  Server --> MQ
  Funnel --> SMS
  Reviews --> GBPAI
  Reviews --> LLM
  Integrations --> Zap
  Widget --> Server
7. Security, Privacy & Compliance (אבטחה ורגולציה)
PII minimization: שומרים רק מה שחייבים (שם, טלפון/אימייל).

Secrets: Server-side only (Vault/SSM). אין מפתחות ב-client בפרודקשן.

OAuth scopes: קריאה/תגובה לביקורות בלבד.

Data retention: ברירת מחדל 24 חודשים, opt-out למחיקה מוקדמת.

DPA & Consent: הסכמת לקוח למשלוח הודעות (SMS/WhatsApp/Email).

Audit: שמירת לוגים לשנה + Immutable logs לאירועי גישה/שינויים.

8. Data Model & Schema (סכמת נתונים)
ER Diagram (Mermaid)
mermaid
Copy code
erDiagram
  USERS ||--o{ BUSINESSES : owns
  BUSINESSES ||--o{ CAMPAIGNS : has
  CAMPAIGNS ||--o{ REVIEW_REQUESTS : sends
  REVIEW_REQUESTS ||--o| INTERNAL_FEEDBACK : creates
  BUSINESSES ||--o{ PUBLIC_REVIEWS : receives
  BUSINESSES ||--o{ API_KEYS : configures

  USERS {
    uuid id PK
    text email UK
    text password_hash
    text name
    text role  // business_owner|agency|franchise_admin|admin
    timestamptz created_at
  }

  BUSINESSES {
    uuid id PK
    uuid owner_id FK
    text name
    text google_place_id
    text address
    timestamptz created_at
  }

  CAMPAIGNS {
    uuid id PK
    uuid business_id FK
    text name
    text channel  // sms|email|whatsapp
    jsonb message_template
    timestamptz created_at
  }

  REVIEW_REQUESTS {
    uuid id PK
    uuid campaign_id FK
    text customer_name
    text customer_contact
    text status // sent|opened|clicked|completed
    int initial_rating  // 1-5 or null
    timestamptz created_at
  }

  INTERNAL_FEEDBACK {
    uuid id PK
    uuid request_id FK
    text feedback_text
    int rating // 1-5
    timestamptz received_at
  }

  PUBLIC_REVIEWS {
    uuid id PK
    uuid business_id FK
    text platform // google|facebook|easy|zap
    text author_name
    int rating // 1-5
    text review_text
    text review_url
    bool needs_reply
    timestamptz created_at
    timestamptz replied_at
  }

  API_KEYS {
    uuid id PK
    uuid business_id FK
    text provider // sms|whatsapp|email|openai|gemini
    text key_ref // reference in secret store
    timestamptz created_at
  }
9. API Design (ממשק API)
Base URL: https://api.flowreview.example.com/v1
Auth: Authorization: Bearer <JWT>

Endpoints (selected)
POST /auth/login — email/password → JWT.

POST /auth/oauth/callback/google — OAuth callback.

GET /businesses/:id/reviews — list public reviews (filters: platform, needs_reply, since).

POST /businesses/:id/campaigns — create campaign.

POST /campaigns/:id/requests — create review request.

POST /funnel/ingest — webhook for internal feedback (signed).

POST /reviews/:id/replies — post reply via GBP API.

POST /ai/suggest-replies — generate 2–3 drafts (server-side LLM).

Example Schemas (abridged)
json
Copy code
// POST /campaigns/:id/requests
{
  "customer_name": "John Doe",
  "customer_contact": { "type": "sms", "value": "+972501234567" },
  "locale": "he-IL",
  "metadata": { "order_id": "A12345" }
}
json
Copy code
// POST /ai/suggest-replies
{
  "review": {
    "platform": "google",
    "rating": 2,
    "text": "Service was slow. Coffee was cold.",
    "context": { "business_name": "Café Dana" }
  },
  "count": 3,
  "tone": "empathetic-professional"
}
10. AI & Automation (בינה מלאכותית)
Models: GPT-4o/GPT-4.1 (responses), Gemini 1.5 (fast drafts), sentiment model (topic extraction).

Guardrails: length ≤ 80 words; polite; no promises; no personal data echo.

Fallbacks: if LLM fails → template-based reply; if rate-limited → queue + retry.

Prompting: include business name, policy constraints, and localized tone (HE/EN).

Storage: replies & prompts saved for audit; no raw customer PII sent when unnecessary.

11. Integrations (אינטגרציות)
Google Business Profile API: משיכת ביקורות ופרסום תגובות (OAuth).

SMS/Email/WhatsApp: Twilio / 360dialog / local provider.

Zapier: Triggers (new review, low rating) + Actions (send request).

Webhooks: חתימה (HMAC) + replay protection.

12. UX Flows & Content (חוויית משתמש ותכנים)
Smart Review Funnel — Flow
mermaid
Copy code
flowchart TD
  A[Send Request] --> B{Customer feedback?}
  B -->|4-5⭐ / 😊| C[Open Google Review Composer]
  B -->|1-3⭐ / 😞| D[Internal Feedback Form]
  D --> E[Notify Business Owner]
  C --> F[Public Review in Inbox]
  F --> G[AI Suggests 2–3 Replies]
  G --> H[Approve & Post]
Key Screens
Onboarding Wizard • Campaigns • Review Requests • Inbox • Internal Feedback • Dashboard • Settings.

Accessibility: keyboard-first, RTL for HE, color-contrast AA.

Copy Templates (abridged)
SMS (HE): “✅ היי {{first_name}}, נשמח למשוב קצר… {{funnel_link}}”

WhatsApp (HE): “שלום {{first_name}}, דעתך חשובה לנו! …”

Email (EN): “We’d love your feedback — it only takes 30s…”

13. Observability & SLOs (ניטור ויעדים)
Metrics: request_sent, open_rate, click_rate, reviews_imported, ai_latency_ms.

Logs: structured JSON, PII redaction.

Tracing: OpenTelemetry; spans for funnel and AI calls.

Dashboards: API latency, error rate, deliverability.

SLOs: 99.5% availability; p95 AI suggest < 2.5s; delivery success ≥ 97%.

Alerts: error_rate>1%, queue lag>60s, provider failures.

14. Testing Strategy (בדיקות)
Unit: services (funnel, templates, sentiment).

Integration: API ↔ DB, OAuth, provider sandboxes.

E2E: critical flows (onboarding, send request, reply post).

Load: 1k requests/min spike; warm queues; LLM timeout fallbacks.

Security: authZ, JWT tamper, webhook signature, SSRF/DOS.

QA Checklists: accessibility, RTL, localization, phone formats (IL).

15. Deployment & Ops (פריסה ותפעול)
Environments
Dev: feature branches, ephemeral DB.

Staging: masked data, full integrations (sandbox).

Prod: change-managed releases, blue-green (or canary).

CI/CD
Lint → Test → Build → DB Migrate → Deploy → Smoke tests.

Rollback scripted; migrations reversible.

Configuration & Env Vars
Name	Scope	Example	Notes
DATABASE_URL	API	postgres://...	SSL required
JWT_SECRET	API	***	256-bit
GOOGLE_CLIENT_ID/SECRET	API	***	OAuth
OPENAI_API_KEY	API	sk-...	server-side only
GEMINI_API_KEY	API	***	server-side only
SMS_PROVIDER_*	API	***	tokens/ids
WHATSAPP_PROVIDER_*	API	***	BSP config
ZAPIER_SIGNING_SECRET	API	***	webhook verify
VITE_GEMINI_API_KEY	Dev demo only	***	client; avoid in prod

16. Roadmap & Milestones (מפת דרכים)
Q4 2025 — Foundation & MVP
 UI/UX finalization

 Core infra (DB, Auth, Deploy)

 Smart Funnel (SMS & Email)

 Basic Dashboard & Notifications

 5 beta customers

Q1 2026 — Launch & Intelligence
 WhatsApp & QR

 Centralized Inbox (Google)

 AI Reply Assistant

 Website Widget

Q2 2026 — Growth
 Sentiment Analysis

 Referral Engine

 Additional review platforms

Q3 2026 — Scale
 White-Label

 Multi-Location dashboard

 Advanced PDF reports

17. Glossary (מילון מונחים)
GBP: Google Business Profile

Funnel: משפך משוב/ביקורות

Inbox: תיבת ביקורות מרוכזת

LLM: Large Language Model

NFR: Non-Functional Requirement

18. Appendix (נספחים)
A. Local Development (Prototype Repo)
bash
Copy code
# Frontend demo
npm i
cp .env.example .env.local   # set VITE_GEMINI_API_KEY (dev only)
npm run dev
B. Sample Internal Feedback Form (HE)
markdown
Copy code
דירוג: ⭐⭐⭐⭐⭐  
מה אהבת? מה אפשר לשפר?  
נשמח לשמוע — תודה!  
C. AI Prompt Guardrails (EN)
Reply ≤ 80 words, empathetic, professional, neutral tone.

Never mention internal processes; avoid promises; no personal data echo.

Offer remediation steps and direct contact channel when rating ≤ 3.

D. Legal & Platform Notes
אין לקבוע דירוג מראש בלינק ל-Google.

Opt-in messaging only; honor unsubscribe/stop keywords.

Respect provider ToS and local regulations (IL + GDPR).

Changelog

1.0 (07.10.2025): Initial guide.

pgsql
Copy code

**a.** Want me to tailor this guide to your repo structure (scripts, paths) and add a Mermaid ERD → Prisma schema?  
**b.** Should I generate a Next.js API skeleton (auth/campaigns/funnel/replies) matching these endpoints?
::contentReference[oaicite:0]{index=0}







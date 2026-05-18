---
name: v0-prompt-advisor
description: Claude Advisor workflow for V0.dev prompts on Centennial Hills real estate sites. Use when the user says v0, v0 this, continue v0, claude advisor, or wants UI mockups managed through advisor-reviewed prompts before generation.
---

# V0 Prompt Advisor (Claude Advisor Pattern)

Mirrors [Anthropic's advisor tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool): **Advisor** plans and reviews prompts; **Executor** (v0.dev) generates UI; **Integrator** (Cursor agent) ports to Qwik.

## Roles

| Role | Who | Responsibility |
|------|-----|----------------|
| **Advisor** | This skill (high-intelligence pass) | Intake, constraints, prompt draft, review gate, version registry |
| **Executor** | v0.dev | Generate React + Tailwind UI from approved prompt only |
| **Integrator** | Cursor agent on repo | Port to Qwik `component$()`, match `src/global.css` tokens, no scope creep |

## Registry (source of truth)

Read and update: `prompts/v0/registry.json`

Canonical prompt files live in `prompts/v0/*.md`. Legacy root files `V0-*.md` are aliases—prefer `prompts/v0/` for new work.

## Workflow

### 1. INTAKE (Advisor)

Gather before writing any V0 prompt:

- **Target**: homepage | header | contact | page path (e.g. `/sell-a-home`)
- **Stack**: Qwik + TypeScript + Tailwind; v0 outputs React first
- **Brand**: Dr. **Jan** Duffy (NEVER "Janet"), (702) 903-1952, ZIPs 89135/89138/89144
- **Colors**: `#1e3a8a`, `#1e40af`, `#f59e0b`, stat gold `#fcd34d`
- **Read**: `src/global.css`, `src/components/navigation/header.css`, target route if exists
- **Live site**: https://www.centennialhillshomesforsale.com/

### 2. ADVISOR PLAN (≤80 words internal)

Answer:

- What user problem does this UI solve?
- What must NOT change (RealScout slots, MLS disclaimers, NAP)?
- Known live-site bugs to fix in design (duplicate sections, map fallback)?

### 3. PROMPT DRAFT

Use XML sections in the prompt file:

```xml
<context>...</context>
<constraints>...</constraints>
<design_system>...</design_system>
<sections>...</sections>
<technical_output>...</technical_output>
<anti_patterns>...</anti_patterns>
```

**Hard constraints (always in `<constraints>`):**

- Agent name: Dr. Jan Duffy only
- RealScout: placeholder `{listingsSlot}` / `{searchSlot}`—do not mock MLS data
- IDX: never redesign `/components/idx/*` without explicit approval
- Mobile-first, WCAG AA, semantic HTML

### 4. REVIEW GATE (Advisor checklist)

Before handoff to v0.dev, verify:

- [ ] No "Janet" in prompt or examples
- [ ] Phone and NAP match GBP
- [ ] Single H1, no duplicate section titles
- [ ] Widget areas are placeholders with min-height
- [ ] Output format specified (React + Tailwind, port notes for Qwik)
- [ ] `registry.json` updated: status `ready`, version bumped

### 5. HANDOFF

Tell user:

1. Open `prompts/v0/<component>.md`
2. Copy full file → https://v0.dev
3. Paste v0 link or export here for **v2 advisor review** + Qwik integration

### 6. REFINE LOOP

When v0 output returns:

- Advisor compares against `<constraints>` and live site
- List deltas: branding, spacing, missing states (map error, empty listings)
- Integrator implements only approved sections in repo

## Commands (user phrases)

| User says | Advisor action |
|-----------|----------------|
| `v0 this` | Prompt from current file/route → draft in `prompts/v0/` |
| `continue v0` | Next `pending` item in registry |
| `claude advisor` / `advisor review` | Run REVIEW GATE on latest prompt |
| `v0 status` | Summarize `registry.json` |

## Anti-patterns

- Do NOT send raw chat dumps to v0—use canonical `prompts/v0/*.md` only
- Do NOT skip registry updates
- Do NOT let v0 invent agent name, phone, or address
- Do NOT duplicate Featured Listings sections on homepage

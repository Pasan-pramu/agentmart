<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the AgentMart TanStack Start application.

## Summary of changes

- **`src/routes/__root.tsx`** — Added `PostHogProvider` (from `posthog-js/react`) wrapping the app inside `ClerkProvider`, with a `PostHogClerkIdentify` component that calls `posthog.identify()` using the Clerk user's ID and email when they sign in, and `posthog.reset()` when they sign out.
- **`src/utils/posthog-server.ts`** — Created a server-side PostHog singleton (`getPostHogClient()`) using `posthog-node` for future API route instrumentation.
- **`src/components/SkillCard.tsx`** — Added `skill_install_command_copied` on the copy button and `skill_card_opened` on the Open link.
- **`src/routes/index.tsx`** — Added `browse_registry_clicked` on the Browse Registry CTA and `publish_skill_clicked` on the Publish Skill CTA.
- **`src/components/Navbar.tsx`** — Added `sign_in_button_clicked` on the Sign In button.
- **`vite.config.ts`** — Added PostHog reverse proxy routes (`/ingest/static`, `/ingest/array`, `/ingest`) for reliable event delivery and CORS-free ingestion.
- **`.env`** — Added `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` environment variables.

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `skill_install_command_copied` | User copies a skill's install command from a skill card | `src/components/SkillCard.tsx` |
| `skill_card_opened` | User clicks the Open link on a skill card | `src/components/SkillCard.tsx` |
| `browse_registry_clicked` | User clicks the Browse Registry CTA on the home page | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the Publish Skill CTA on the home page | `src/routes/index.tsx` |
| `sign_in_button_clicked` | Signed-out user clicks the Sign In button in the navbar | `src/components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://us.posthog.com/project/302965/dashboard/1659379)
- [Skill Engagement Over Time](https://us.posthog.com/project/302965/insights/s9IzTXJe) — daily skill opens and install command copies
- [Install Command Copies (Total)](https://us.posthog.com/project/302965/insights/UvTSljFz) — 30-day total copies, shown as a bold number
- [Homepage CTA Clicks](https://us.posthog.com/project/302965/insights/0CguN8ux) — Browse Registry vs Publish Skill clicks over time
- [Sign-In Conversion Funnel](https://us.posthog.com/project/302965/insights/sqPW4Sbo) — from clicking Sign In to completing Clerk authentication
- [Daily Active Users](https://us.posthog.com/project/302965/insights/u7WHkXJC) — unique users interacting with skills each day

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-tanstack-start/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

# Product

## Identity
Name: portfolio-website
Repository: JaredKlopstein/Portfolio-Website
Description: Personal site for Jared Klopstein — founder of Ascella Studios. A single-page,

## Status
Development

## Stack
Frontend:
Backend:
Database:
Infrastructure:

## Deployment
Provider:
Staging:
Production: TODO (cc onboard): fill this in.

## Monitoring
Provider:
Health check: TODO (cc onboard): fill this in.
Alerts:

## Agents
Research: Hermes (Grok) via `cc research`
Engineering: Claude Code via `cc issue-to-pr`
Operations: `cc monitor`, `cc preflight`
Local AI: Ollama, for `local-ok` / `size:S` issues

## Command Center
Issues labelled `ai-ready` are picked up and worked by an agent through
`cc issue-to-pr`, which clones the repo, runs the setup and test commands, and
opens a pull request. Every pull request is reviewed by a human before it is
merged — no agent change reaches `main` on its own.

## Permissions
Repository read: yes
Repository write: yes, through the Command Center loop; every PR is reviewed
Production read: TODO (cc onboard): fill this in.
Production write: no
Database read: TODO (cc onboard): fill this in.
Database write: no

## Approval Policy
Production deployment: owner approval required
Destructive actions: owner approval required
External communications: owner approval required
Permission changes: owner approval required

## Important Constraints
-
-
-

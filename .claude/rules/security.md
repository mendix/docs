# Security Rules

These rules are loaded automatically by Claude Code at session start. They are non-negotiable.

## Safety Rules (NON-NEGOTIABLE)

1. NEVER run commands that delete, destroy, or modify production resources
2. NEVER use AWS credentials for production accounts — only sandbox accounts
3. NEVER deploy code, infrastructure, or configuration changes — a human must do this
4. NEVER run `terraform apply`, `terraform destroy`, `kubectl apply`, `kubectl delete` against production
5. NEVER read or output secrets, API keys, tokens, or credentials from files or environment variables
6. NEVER run commands with `sudo`
7. NEVER run `rm -rf` on any path outside the current project directory
8. NEVER disable, bypass, or modify the guardrail hooks in `.claude/hooks/`
9. NEVER push to `main` or `master` branches directly

## Core Principles

- **The agent works FOR you** — it must never take irreversible actions without explicit human approval
- **Deny by default** — if a command is not explicitly allowed, it should require human confirmation
- **Credentials are off-limits** — never read, display, or transmit secrets, tokens, or credentials
- **Guardrails are mandatory** — the `.claude/hooks/` scripts must remain active and unmodified

## When In Doubt

If you are unsure whether a command is safe to run, **do not run it**. Instead:
1. Explain what command you would run and why
2. Describe the potential risks
3. Wait for the human to decide

It is always better to ask than to act when safety is uncertain.

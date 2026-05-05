---
name: evalguide-research
description: "Fetches and summarizes content from the Mendix Evaluation Guide to answer questions about platform capabilities, architecture, security, deployment, and governance."
user-invocable: true
disable-model-invocation: false
---

# Mendix Evaluation Guide Research

Fetch and summarize content from the Mendix Evaluation Guide at `https://www.mendix.com/evaluation-guide/`.

## Workflow

1. Identify relevant topic(s) from the topic map below.
2. Use WebFetch to fetch the full page(s). When a question spans multiple topics, fetch pages in parallel.
3. Read the entire fetched content to find passages relevant to the user's question.
4. Respond using the output format below.
5. Cite sources — End your response with a **Citations** section listing every source you consulted. This step is mandatory — never omit it.

If the topic map does not cover the user's question, report that no relevant content was found in the Evaluation Guide.

## Output Format

1. **Direct answer** — Begin with a concise answer to the user's question.
2. **Supporting details** — Provide relevant details, quoting key passages where helpful.
3. **Citations** (required) — You MUST end your response with a list of source links. Never omit this section.

If no relevant content is found, state that clearly and do not speculate.

### Citation Format

Cite each source as a markdown link using the page title and its full URL:

```
[Page Title](https://www.mendix.com/evaluation-guide/...)
```

For example:

```
[Runtime Security](https://www.mendix.com/evaluation-guide/security/runtime-security/)
```

## Topic Map

All URLs are relative to `https://www.mendix.com`. Prepend the base URL when fetching.

### Overview

| Topic | URL |
|-------|-----|
| Welcome to Mendix | /evaluation-guide/what-is-mendix/ |
| What You Can Build | /evaluation-guide/what-can-i-build/ |
| Why Choose Mendix | /evaluation-guide/mendix-difference/ |
| Industry Analysts | /evaluation-guide/gartner-forrester-mendix/ |
| Digital Execution Practice | /evaluation-guide/digital-execution-practice/ |

### Software Development Life Cycle

| Topic | URL |
|-------|-----|
| SDLC Overview | /evaluation-guide/app-lifecycle/ |
| Ideate | /evaluation-guide/app-lifecycle/ideate/ |
| Prioritize | /evaluation-guide/app-lifecycle/prioritize/ |
| Plan | /evaluation-guide/app-lifecycle/plan/ |
| Develop | /evaluation-guide/app-lifecycle/develop/ |
| Deploy | /evaluation-guide/app-lifecycle/deploy/ |
| Operate | /evaluation-guide/app-lifecycle/operate/ |
| Evaluate | /evaluation-guide/app-lifecycle/evaluate/ |

### Deployment

| Topic | URL |
|-------|-----|
| Deployment Overview | /evaluation-guide/deployment/ |
| Deployment Flexibility | /evaluation-guide/deployment/flexibility/ |
| Mendix Cloud Deployments | /evaluation-guide/deployment/mendix-cloud/ |
| Private Cloud Deployments | /evaluation-guide/deployment/private-cloud/ |
| Partner Cloud Deployments | /evaluation-guide/deployment/partner-cloud/ |

### Architecture

| Topic | URL |
|-------|-----|
| Architecture Overview | /evaluation-guide/architecture/ |
| Architecture Principles | /evaluation-guide/architecture/architecture-principles/ |
| Platform Architecture | /evaluation-guide/architecture/platform-architecture/ |
| Cloud Architecture | /evaluation-guide/architecture/cloud-architecture/ |
| Runtime Architecture | /evaluation-guide/architecture/runtime-architecture/ |
| Twelve-Factor Architecture | /evaluation-guide/architecture/twelve-factor-architecture/ |
| Openness & Extensibility | /evaluation-guide/architecture/openness-extensibility/ |

### Security

| Topic | URL |
|-------|-----|
| Security Overview | /evaluation-guide/security/ |
| Introduction to Mendix Security | /evaluation-guide/security/introduction-to-mendix-security/ |
| Organization & Compliance | /evaluation-guide/security/organization-compliance/ |
| Platform Security | /evaluation-guide/security/platform-security/ |
| Security Model | /evaluation-guide/security/security-model/ |
| Runtime Security | /evaluation-guide/security/runtime-security/ |
| Cloud Security | /evaluation-guide/security/cloud-security/ |
| Secure Development Lifecycle | /evaluation-guide/security/secure-development-lifecycle/ |
| Integrated Monitoring and Logging | /evaluation-guide/security/integrated-monitoring-and-logging/ |
| Data Security | /evaluation-guide/security/data-security/ |
| Governance, Risk, and Compliance | /evaluation-guide/security/governance-risk-and-compliance/ |

### Governance

| Topic | URL |
|-------|-----|
| Governance Overview | /evaluation-guide/governance/ |
| Investment Control | /evaluation-guide/governance/investment-control/ |
| Risk Control | /evaluation-guide/governance/risk-control/ |

### Strategic Partnerships

| Topic | URL |
|-------|-----|
| Strategic Partners Overview | /evaluation-guide/strategic-partners/ |
| AWS | /evaluation-guide/strategic-partners/aws/ |
| SAP | /evaluation-guide/strategic-partners/sap/ |
| Snowflake | /evaluation-guide/strategic-partners/snowflake/ |

### Getting Started

| Topic | URL |
|-------|-----|
| Getting Started Overview | /evaluation-guide/evaluation-learning/ |
| Try Mendix for Free | /evaluation-guide/evaluation-learning/try-mendix-for-free/ |
| Learning | /evaluation-guide/evaluation-learning/certification-talent/ |
| Company Onboarding | /evaluation-guide/evaluation-learning/company-onboarding/ |
| Community | /evaluation-guide/evaluation-learning/community/ |
| Support | /evaluation-guide/evaluation-learning/support/ |

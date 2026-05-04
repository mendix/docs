---
description: Locate content, resolve URLs to source files, and navigate the topic map to find relevant pages before editing or reviewing.
---

Locate content in the Mendix documentation repository using the topic map and search tools below. Return the source file path(s) and a brief summary of what each file contains.

## Finding Content

| Goal | Method |
|------|--------|
| URL → source file | Run `bash .claude/scripts/resolve-doc-url.sh "/refguide/security/"` |
| Find by filename | Glob `content/en/docs/**/*<keyword>*.md` |
| Search body text | Grep for the keyword in `content/en/docs/` |
| Resolve a link target | Check the `url:` field in the target file's front matter |

## Topic Map

### Studio Pro Reference (`refguide/`)

| Topic | Path | URL |
|-------|------|-----|
| App Modeling | `refguide/modeling/` | `/refguide/modeling/` |
| Pages & UI | `refguide/modeling/pages/` | `/refguide/pages/` |
| Domain Model | `refguide/modeling/domain-model/` | `/refguide/domain-model/` |
| Application Logic | `refguide/modeling/application-logic/` | `/refguide/application-logic/` |
| Security | `refguide/modeling/security/` | `/refguide/security/` |
| Integration (REST, OData) | `refguide/modeling/integration/` | `/refguide/integration/` |
| XPath | `refguide/modeling/xpath/` | `/refguide/xpath/` |
| Resources | `refguide/modeling/resources/` | `/refguide/resources/` |
| Consistency Errors | `refguide/modeling/consistency-errors/` | `/refguide/consistency-errors/` |
| Menus & Studio Pro UI | `refguide/modeling/menus/` | `/refguide/menus/` |
| AI Assistance (Maia) | `refguide/modeling/mendix-ai-assistance/` | `/refguide/mendix-ai-assistance/` |
| App Explorer | `refguide/modeling/app-explorer/` | `/refguide/app-explorer/` |
| Import/Export | `refguide/modeling/import-and-export/` | `/refguide/import-and-export/` |
| Best Practices | `refguide/modeling/best-practices/` | `/refguide/modeling-best-practices/` |
| Runtime | `refguide/runtime/` | `/refguide/runtime/` |
| Java Programming | `refguide/java-programming/` | `/refguide/java-programming/` |
| Version Control | `refguide/version-control/` | `/refguide/version-control/` |
| Installation | `refguide/installation/` | `/refguide/installation/` |
| Testing | `refguide/testing/` | `/refguide/testing/` |

### Mobile Development (`refguide/mobile/`)

| Topic | URL |
|-------|-----|
| Getting Started | `/refguide/mobile/getting-started-with-mobile/` |
| Intro to Technologies | `/refguide/mobile/introduction-to-mobile-technologies/` |
| Building Efficient Apps | `/refguide/mobile/building-efficient-mobile-apps/` |
| Mobile UI Design | `/refguide/mobile/designing-mobile-user-interfaces/` |
| Mobile Capabilities | `/refguide/mobile/using-mobile-capabilities/` |
| Build, Test, Distribute | `/refguide/mobile/distributing-mobile-apps/` |
| PWA Wrapper | `/refguide/mobile/pwa-wrapper/` |
| Mobile Best Practices | `/refguide/mobile/best-practices/` |

### How-Tos (`howto/`)

| Topic | URL |
|-------|-----|
| Data Models | `/howto/data-models/` |
| Front End (UI/UX) | `/howto/front-end/` |
| Securing Your Data | `/howto/security/` |
| Extensibility | `/howto/extensibility/` |

### Deployment (`deployment/`)

| Topic | URL |
|-------|-----|
| General | `/developerportal/deploy/general/` |
| Mendix Cloud | `/developerportal/deploy/mendix-cloud-deploy/` |
| Docker | `/developerportal/deploy/docker/` |
| Azure | `/developerportal/deploy/mendix-on-azure/` |
| Kubernetes / Private Cloud | `/developerportal/deploy/private-cloud/` |
| SAP BTP | `/developerportal/deploy/sap-cloud-platform/` |
| On-Premises | `/developerportal/deploy/on-premises-design/` |

### Developer Portal (`developerportal/`)

| Topic | URL |
|-------|-----|
| General | `/developerportal/general/` |
| App Insights | `/developerportal/app-insights/` |
| Project Management | `/developerportal/project-management/` |
| Repository / Team Server | `/developerportal/repository/` |
| Settings | `/developerportal/general-settings/` |

### Control Center (`control-center/`)

| Topic | URL |
|-------|-----|
| Apps | `/control-center/apps/` |
| Company | `/control-center/company/` |
| Content Curation | `/control-center/content-curation/` |
| Entitlements | `/control-center/entitlements/` |
| Marketplace | `/control-center/marketplace/` |
| People | `/control-center/people/` |
| Security | `/control-center/security/` |

### Marketplace (`marketplace/`)

| Topic | URL |
|-------|-----|
| Overview | `/appstore/overview/` |
| Using Content | `/appstore/use-content/` |
| Creating Content | `/appstore/creating-content/` |
| Uploading Content | `/appstore/submit-content/` |
| GenAI Capabilities | `/appstore/modules/genai/` |
| Platform-Supported Content | `/appstore/platform-supported-content/` |
| Partner Solutions | `/appstore/partner-solutions/` |

### Other Sections

| Section | URL |
|---------|-----|
| Catalog | `/catalog/` |
| APIs & SDK | `/apidocs-mxsdk/` |
| Release Notes | `/releasenotes/` |
| Quickstarts | `/quickstarts/` |
| Support | `/support/` |
| Private Platform | `/private-mendix-platform/` |
| Mendix Portal | `/portal/` |
| Community Tools / Style Guide | `/community-tools/` |
| Partners (AWS, SAP, Siemens, Snowflake) | `/partners/<name>/` |
| Workstation | `/workstation/` |

### Older Versions

`refguide10/`, `refguide9/`, `refguide8/`, `howto10/`, `howto9/`, `howto8/` — same structure as current, for Studio Pro 10, 9, and 8.

## Conventions

- All paths are relative to `content/en/docs/`
- `_index.md` = section landing page
- `url` field in front matter: starts/ends with `/`, lowercase, hyphens only
- Links use the `url` value, not the file path

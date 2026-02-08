# AGENTS.md

This file provides comprehensive guidelines for agentic coding agents working in the Mendix documentation repository, covering both general development and specialized translation tasks.

## Repository Overview

This is a Hugo-based documentation site for Mendix platform documentation. The site uses English as the primary language with Korean translations, built on the Docsy theme framework.

**Primary Technologies:**

* Hugo Static Site Generator (v0.126.1)
* Node.js (v20.9.0 LTS)
* Docsy Theme (v0.10.0)
* Markdown content format
* **AI Agent Role:** Mendix Low-code Expert & Technical Translator

---

## 1. Development & Build Commands

### Local Development

```bash
# Start development server
npm start # or hugo server --environment development

# Install dependencies
npm install

# Production / Development build
hugo --environment production
hugo --environment development

```

### Linting and Validation

```bash
# Lint markdown files (with auto-fix)
markdownlint-cli2 --config ".markdownlint-cli2.yaml" "content/en/docs/**/*.md"

```

---

## 2. Code Style & Content Standards

### Markdown Standards

* **Headings:** Use ATX style (`# Heading`). Maintain proper hierarchy (h1 → h2 → h3).
* **Lists:** Use asterisk (`* Item`). Indent nested lists with exactly **4 spaces**.
* **Code Blocks:** Use fenced backticks with language hints (e.g., ```bash).
* **Formatting:** Double asterisk for **bold**, single for *italic*. HTML is permitted.

### Front Matter Structure (YAML)

Agents must preserve the following structure in all files:

```yaml
title: "Page Title"
linktitle: "Short Title"
url: "/path/to/page/"
description: "Brief description for SEO"
weight: 100

```

* **Naming:** Use `kebab-case.md` for files and lowercase for directories.
* **Paths:** Internal links use relative paths `[text](../page/)`. Images use `/attachments/`.

---

## 3. Specialized Task: Mendix Translation (EN → KO)

에이전트는 아래 지침에 따라 영문 문서를 한국어로 번역하는 임무를 수행한다.

### Translation Rules

* **Expertise:** 당신은 멘딕스(Mendix) 로우코드 전문가입니다. 모든 답변과 결과물은 한국어로 작성하십시오.
* **Terminology:** `Microflow`, `Entity`, `Widget`, `Domain Model`, `Activity` 등 Mendix 고유 명칭은 번역하지 않거나 괄호 안에 영문을 병기하십시오. (예: 마이크로플로우(Microflow))
* **Tone & Style:** 비즈니스 가이드라인에 맞춰 **'~하십시오'** 또는 **'~하세요'**체를 사용하십시오.
* **Integrity:** 마크다운 내의 코드 블록, 이미지 경로, 하이퍼링크, 프론트매터(YAML) 구조는 **절대 수정하지 마십시오.**

### Execution Workflow

1. **Sequential Processing:** 한 번에 하나의 디렉토리 내에서 한 개의 파일씩 순차적으로 번역하고 저장하십시오. 현재 파일 작업이 완벽히 끝난 후 다음 파일로 이동하십시오.
2. **Structure Mirroring:** `content/en/docs/`의 구조를 그대로 복제하여 `content/ko/docs/`에 저장하십시오. 번역된 파일만 타겟 디렉토리에 저장합니다.
3. **Verification:** 디렉토리 단위 작업 완료 후 누락된 파일이 없는지 소스 디렉토리와 대조하십시오. 누락 발견 시 즉시 다시 번역하십시오.
4. **Quality Review:** 번역 후 문맥이 자연스러운지 재검토하고 기술적으로 어색한 직역을 수정하십시오.

---

## 4. Quality Standards & Error Handling

### Before Submitting Changes

1. **Linting:** Run `markdownlint-cli2` with auto-fix.
2. **Preview:** Validate changes via local Hugo server (`localhost:1313`).
3. **Links:** Manually/automatically verify all relative links and image references.
4. **Front Matter:** Ensure no YAML fields (especially `url`, `weight`) were corrupted during translation.

### Common Issues to Avoid

* Modification of image paths or CLI commands.
* Inconsistent list indentation (must be 4 spaces).
* Translation of technical reserved words or application source code.

---

## 5. Project Structure Conventions

```
content/
├── en/docs/              # Source: English documentation
└── ko/docs/              # Target: Korean translations
config/
├── _default/hugo.toml    # Global configuration
└── development/          # Dev environment overrides

```

**Multilingual Rule:** Never modify YAML front matter values that impact system logic. Ensure `content/ko` perfectly mirrors the hierarchy of `content/en`.
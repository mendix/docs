---
name: docs-accessibility
description: Analyzes a single documentation page and generates suggestions for writing with accessibility in mind, without making any edits. Use when you want to assess whether a page is compliant with accessibility guidelines.
user-invocable: true
disable-model-invocation: false
---

Analyze the open page(s) and identify any accessibility guideline breaches. Follow the [Google developer documentation style guide](https://developers.google.com/style/accessibility) on writing accessible documentation.    
Do not make changes automatically. Instead, list out all suggestions first.

## Comprehensive Accessibility Checklist

Systematically check the documentation page for the following accessibility issues:

### Directional Language

Search for and flag all instances of directional or spatial references:

* Vertical directions – above, below, over, under, top, bottom
* Horizontal directions – left, right, beside, next to
* Visual verbs – see, look, watch, view, visualize, observe
* Pointing language – here, there, this one, that one (without clear antecedent)

Screen reader users navigate non-linearly; content reflows on different devices; users with cognitive differences may process spatial information differently.

**Acceptable alternatives**:

* Use section names – "in the Widget Types section"
* Use demonstratives with clear antecedent – "this example", "these properties"
* Use descriptive references – "in the Toggle example", "in the JSON structure"
* Use specific labels – "the first code block", "Example 1"

### Image Alt Text

For every image (figure shortcode):

* Check presence – Does it have alt text?
* Check quality – Does the alt text describe what the image shows, not just where it is or what it's called?

Bad example: `alt="Toggle property in Studio Pro"` (locational only)    
Good example: `alt="Screenshot showing a toggle checkbox labeled 'My Toggle Property' with descriptive text below it in the Studio Pro properties panel"` (descriptive)

For decorative images, ensure `alt=""` is used (empty, not omitted).

### Link Text Quality

* Avoid "click here", "read more", "this link", "here".
* Ensure link text makes sense out of context.
* Check if link text describes the destination or action.
* Flag links embedded in parenthetical phrases that reduce discoverability.

### Code Examples Context

* Check if code blocks have sufficient introduction. This ensures screen reader users understand what the code demonstrates before encountering it.
* Flag bare "Here is an example" without specific context.
* Check if code comments explain non-obvious syntax (like ellipsis notation).

### Ableist or Exclusionary Language

* Avoid "simply", "just", "easy", "obvious", "clearly" (minimizes difficulty).
* Avoid "normal user", "regular workflow" (implies some users are abnormal).
* Avoid assumptions about physical ability (standing, walking, seeing, hearing).
* Check for gender-neutral language.

### Structural Accessibility

* Verify heading hierarchy (no skipped levels).
* Check if lists are properly formatted.
* Ensure tables have appropriate headers.
* Verify alert boxes are used appropriately for important information.

### Content Clarity

* Check for sufficient context before technical terms.
* Verify acronyms are defined on first use.
* Ensure instructions can be followed without visual cues alone.
* Flag time-based language without specific dates ("recently", "soon", "upcoming").

### Keyboard and Interaction Patterns

* Check if keyboard shortcuts use proper `<kbd>` tags.
* Ensure interactive instructions don't assume mouse usage.
* Verify multi-step procedures are numbered clearly.

## Output Format

For each issue found, display the following:

1. Line number and quote of problematic text
2. Issue type from the previous checklist
3. Specific problem explanation
4. Suggested fix with concrete alternative wording

Group findings by priority: High, Medium, Low.

Also list positive accessibility features already present in the document.

---
name: polish
description: Proofreads documentation and improves clarity, readability, and word choice without changing meaning or reorganizing structure. Simplifies complex sentences, applies style guide standards, and converts passive voice to active voice. Use when the user wants to polish, improve clarity, make more readable, or clean up documentation while preserving its structure.
user-invocable: true
disable-model-invocation: false
---

> **Skill progression:** This preserves structure. If only basic fixes are needed, use `/proofread`. For deeper reorganization, suggest `/enhance`.

First, use the Skill tool to invoke the `proofread` skill.

Then immediately continue: improve clarity and readability without changing meaning, structure, or paragraph order:

**Polish should**:
* Break up long, complex sentences for better readability
* Simplify wordy or awkward phrasing
* Improve word choice (more precise or accessible terms)
* Change passive voice to active voice where appropriate
* Make front matter descriptions more concise and action-oriented
* Apply all style standards from project instructions (tone, formatting, terminology)
* Remove bold and italics used for emphasis (reword or use alerts if needed)
* Ensure consistent application of Microsoft Writing Style Guide

**Polish should NOT**:
* Move paragraphs or restructure sections (that's `/enhance`)
* Change technical meaning or accuracy
* Significantly increase document length
* Modify code samples (flag issues instead)

Every edit should serve a clear purpose in making the text easier to read, scan, and understand.

Do not change any code samples directly, but flag any code issues or inconsistencies in the chat.

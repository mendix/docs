---
name: docs-alt-text
description: Generates W3C-compliant alt text for images in documentation pages. Analyzes each image's purpose and adds descriptive alt text for informative images or empty alt for decorative images, improving accessibility and SEO.
user-invocable: true
disable-model-invocation: false
---

> **Accessibility skill:** Generates alt text following W3C/WCAG 2.1 guidelines. Analyzes actual image content plus context to create concise, meaningful descriptions.

## Workflow

Follow this order for each image:

1. **STEP 1 - View the image file** (REQUIRED)
   - Extract image src path from figure shortcode
   - Convert path: `src="/attachments/path/file.png"` → `static/attachments/path/file.png`
   - Use Read tool to view the actual image
   - Understand what the image shows BEFORE reading context

2. **STEP 2 - Read surrounding context**
   - Read the heading, preceding/following text, list item, or numbered step
   - Understand the image's purpose within the documentation
   - Consider if context + image together make the image informative or decorative

3. **STEP 3 - Determine if informative or decorative**
   - **Technical docs assumption:** Images are informative unless obviously decorative
   - **Informative:** Images that convey information → write descriptive alt text
   - **Decorative:** Images where the information is already given in adjacent text, or pure visual styling with no informational value → use `alt=""`

4. **STEP 4 - Generate alt text**
   - **If decorative, use `alt=""`.** Never omit the alt attribute entirely.
   - **If informative, generate descriptive alt text:**
      - Focus on the information the image communicates, not what it looks like
      - Give the most concise description possible
      - Maximum 30 words (flag complex images needing longer descriptions for body text)
      - Don't include "screenshot of", "image of", or "picture of" (screen readers already announce it's an image)
      - Use Mendix terminology
      - Avoid redundancy with nearby text
      - **Based on surrounding context:**
         - In a procedure: emphasize the action/element relevant to the step (e.g., "Download button in Registration dialog")
         - Showing UI elements: name the relevant elements (e.g., "Properties pane")
         - Showing structure or relationships: describe what entities/components are connected (e.g., "Domain model with Customer and Order entities connected by one-to-many association")
         - Showing logic or process flow: describe what the flow accomplishes (e.g., "Microflow that retrieves FileDocument list and updates encryption keys")

5. **STEP 5 - Edit the figure shortcode**
   - Use Edit tool to add/update only the `alt` attribute
   - Preserve all other attributes: `class`, `width`, `max-width`, `link`
   - Maintain exact indentation and spacing

## Special Cases

- **Images in numbered lists:** Common in procedures—describe the procedural step shown
- **Before/after sequences:** Describe what changed or the state shown
- **Existing alt text:** May update if it's empty, generic, or poor quality (e.g., `alt=""`, `alt="button"`, `alt="before"`)
- **File format icons:** Use format name (e.g., "PDF", "ZIP", "Word document")
- **Complex diagrams:** If needs >30 words, flag to user and suggest adding description to body text

## What NOT to do

- Don't modify `src` path or attributes other than `alt`
- Don't change surrounding text or document structure
- Don't process images outside the determined scope
- Don't generate alt text based solely on filename—always view the image first

## After Processing

Report summary:
- How many images processed
- How many updated

**Always suggest user review:** Recommend that the user review the images themselves to confirm alt text accuracy, as AI-generated descriptions may miss important nuances or context-specific details.

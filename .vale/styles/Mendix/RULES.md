# Mendix Custom Vale Rules

This directory contains custom Vale rules specific to Mendix documentation.

## Current Rules

* **Acronyms.yml**: Validates acronym definitions and usage
* **AmericanSpelling.yml**: Enforces American English spelling
* **Capitalization.yml**: Enforces proper capitalization for Mendix terms
* **CompoundWords.yml**: Enforces proper compound word formatting
* **ConditionalAdverbs.yml**: Flags conditional adverbs that add uncertainty (would, could, should, might, etc.)
* **EmDashes.yml**: Removes spaces around em dashes (—)
* **Emphasis.yml**: Flags bold and italics around emphasis words (not, no, all, never, always, etc.)
* **HeadingPunctuation.yml**: Prohibits end punctuation in headings (except question marks)
* **HeadingTitleCase.yml**: Enforces title case in headings
* **HttpLinks.yml**: Flags links that use http instead of https
* **IconShortcodes.yml**: Suggests using icon shortcodes with tooltips instead of plain text icon descriptions
* **Inclusive.yml**: Flags non-inclusive language
* **Latin.yml**: Flags Latin abbreviations and phrases that should be replaced with plain English
* **LinkText.yml**: Prohibits generic link text like "click here"
* **ListIntroductions.yml**: Enforces a spaced en dash (–) in list item introductions (≤40 chars) by replacing em dashes, hyphens, and double hyphens, and by flagging en dashes that lack a space on one side
* **OxfordComma.yml**: Flags a missing comma before the last item in a series of three or more; extends Microsoft.OxfordComma (requires Vale 3.20 or later)
* **ParagraphBreaks.yml**: Suggests checking for a missing blank line when a sentence ends at the end of a line and the next line starts a new sentence
* **ProductNames.yml**: Enforces correct Mendix product names
* **Repetition.yml**: Flags repeated function words such as "the the"; replaces Vale.Repetition
* **Spelling.yml**: Flags unknown words; accepted words are filters in the file; replaces Vale.Spelling
* **Terminology.yml**: Enforces preferred terms from the terminology guide
* **Uppercase.yml**: Flags all-caps emphasis words (NEVER, NOT, ALWAYS, etc.); replaces Microsoft.Uppercase
* **Wordiness.yml**: Suggests simpler, more concise alternatives for wordy phrases; extends Microsoft.Wordiness (requires Vale 3.20 or later)

## Adding New Rules

Create a new `.yml` file in this directory, following [Vale's style documentation](https://vale.sh/docs/styles):

```yaml
# Mendix/MyRule.yml
extends: substitution
message: "Use '%s' instead of '%s'"
level: error
ignorecase: true
swap:
  'bad term': 'good term'
```

## Testing Rules

After you add or change a rule, open [sample.md](../../tests/sample.md) in VS Code, or run `vale .vale/tests/sample.md`, and check that the rule's section still behaves as its labels say. That file explains how its cases are labeled.

Keep sample.md small. Change it only to cover something important and new, or to document a conflict:

* A new rule, or a new kind of behavior in an existing rule, such as a new scope, guard, or exclusion.
* A conflict between rules, or a known gap or false positive that you cannot fix.

Do not add cases for individual terms in a list-based rule, such as a new swap entry in CompoundWords or a new filter in Spelling. The existing cases for the rule already show how it behaves. If an existing case can cover the change, edit that case instead of adding one.

## Overriding Microsoft Rules

In `.vale.ini`:

```ini
# Disable a Microsoft rule
Microsoft.Contractions = NO

# Change severity
Microsoft.Quotes = suggestion
```

# Mendix Custom Vale Rules

<!-- vale off -->

This directory contains custom Vale rules specific to Mendix documentation.

## Current Rules

* **Acronyms.yml**: Validates acronym definitions and usage
* **AmericanSpelling.yml**: Enforces American English spelling
* **Capitalization.yml**: Enforces proper capitalization for Mendix terms
* **ClickOn.yml**: Prohibits "click on" in favor of "click"
* **CompoundWords.yml**: Enforces proper compound word formatting
* **ConditionalAdverbs.yml**: Flags conditional adverbs that add uncertainty (would, could, should, might, etc.)
* **Dashes.yml**: Removes spaces around em dashes (—)
* **Directions.yml**: Enforces upper/lower instead of top/bottom for directional terms
* **HeadingPunctuation.yml**: Prohibits end punctuation in headings (except question marks)
* **HeadingTitleCase.yml**: Enforces title case in headings
* **IconShortcodes.yml**: Suggests using icon shortcodes with tooltips instead of plain text icon descriptions
* **Inclusive.yml**: Flags non-inclusive language
* **Latin.yml**: Flags Latin abbreviations and phrases that should be replaced with plain English
* **LinkText.yml**: Prohibits generic link text like "click here"
* **ListIntroductions.yml**: Enforces en dashes in list item introductions (≤40 chars)
* **ProductNames.yml**: Enforces correct Mendix product names
* **SignIn.yml**: Enforces "sign in/out" instead of "log in/out"

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

## Overriding Microsoft Rules

In `.vale.ini`:

```ini
# Disable a Microsoft rule
Microsoft.Contractions = NO

# Change severity
Microsoft.Wordiness = warning
```

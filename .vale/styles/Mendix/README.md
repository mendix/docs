# Mendix Custom Vale Rules

This directory contains custom Vale rules specific to Mendix documentation.

## Current Rules

- **AmericanSpelling.yml**: Enforces American English spelling (colour→color, organise→organize, etc.)
- **Acronyms.yml**: Validates acronym definitions and usage
- **Capitalization.yml**: Enforces proper capitalization for Mendix terms
- **ClickOn.yml**: Prohibits "click on" in favor of "click"
- **CompoundWords.yml**: Enforces proper compound word formatting
- **ConditionalAdverbs.yml**: Flags unnecessary conditional adverbs
- **Dashes.yml**: Enforces en dash usage in number ranges
- **Directions.yml**: Standardizes directional language
- **HeadingPunctuation.yml**: Prohibits end punctuation in headings (except question marks)
- **HeadingTitleCase.yml**: Enforces title case in headings
- **Inclusive.yml**: Flags non-inclusive language
- **LinkText.yml**: Prohibits generic link text like "click here"
- **ListIntroductions.yml**: Enforces en dashes in list item introductions (≤40 chars)
- **ProductNames.yml**: Enforces correct Mendix product names
- **SignIn.yml**: Standardizes "sign in" vs "sign-in" usage

## Rule Types

Vale supports several rule types (`extends`):

- **substitution**: Simple find-and-replace (case-sensitive or insensitive)
- **existence**: Check if patterns exist (for prohibited terms)
- **occurrence**: Limit how often a term appears
- **repetition**: Flag repeated words
- **consistency**: Ensure consistent usage (e.g., "app" vs "application")
- **conditional**: Complex logic (if X then Y must follow)
- **capitalization**: Enforce capitalization patterns
- **readability**: Check reading level
- **spelling**: Custom dictionary

## Severity Levels

- `error`: Must fix
- `warning`: Should review
- `suggestion`: Nice to have

## Adding New Rules

Create a new `.yml` file in this directory:

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

```bash
# Test against a specific file
.claude/bin/vale content/en/docs/path/to/file.md

# Test only Mendix rules
.claude/bin/vale --config=".vale.ini" --filter="\.Mendix\." file.md

# List all active rules
.claude/bin/vale ls-config
```

## Overriding Microsoft Rules

In `.vale.ini`:

```ini
# Disable a Microsoft rule
Microsoft.Contractions = NO

# Change severity
Microsoft.Wordiness = warning
```

## Documentation

- Vale docs: https://vale.sh/docs/
- Rule examples: https://vale.sh/docs/topics/styles/
- Microsoft package: https://github.com/errata-ai/Microsoft

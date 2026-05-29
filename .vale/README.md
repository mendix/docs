# Vale Configuration for Mendix Documentation

[Vale](https://vale.sh/docs/) lints the documentation with both Microsoft Writing Style Guide rules and custom Mendix rules to catch style violations, grammar issues, and terminology inconsistencies. It matches text against patterns and rules defined in the .vale/styles YAML files, providing deterministic feedback based on these configurable rules.

It applies in the following contexts:

* **GitHub PRs**: Runs automatically on PRs marked "Ready for review" and posts inline comments on changed lines. Only shows errors (warnings and suggestions are hidden).
* **Local**: Install Vale for immediate, offline feedback in VS Code while editing. Shows all levels: suggestions, warnings, and errors.

Need to install Vale? See [SETUP.md](/.vale/SETUP.md) for installation steps.

## File Structure

```
.vale.ini                      # Main configuration
.vale/
  styles/
    Microsoft/                 # Synced from vale.sh (gitignored)
    Mendix/                    # Custom rules (committed to Git)
      *.yml                    # Mendix-specific style rules
      RULES.md                 # Complete list of Mendix custom rules and overrides
  README.md                    # Rule documentation
```

## What the Rules Check

Vale is configured to enforce both general writing best practices and Mendix-specific standards:

* **Microsoft Style Guide rules**: Grammar, punctuation, readability, inclusive language, and general technical writing conventions
* **Mendix custom rules**: Product terminology, capitalization standards, forbidden phrases, link formatting, and documentation-specific patterns

Rules are categorized by severity:
* **Suggestions**: Recommendations that improve clarity but aren't mandatory
* **Warnings**: Style violations that should be fixed before merging
* **Errors**: Critical issues that must be resolved

Each rule uses an `action` type to define what it checks:

* `suggest`: Offers alternative phrasing or improvements
* `replace`: Identifies text to replace with specific alternatives
* `remove`: Flags text to delete (for example, redundant words)
* `existence`: Detects the presence of forbidden patterns or phrases
* `substitution`: Finds patterns and suggests substitutions
* `occurrence`: Checks for repeated or missing patterns
* `conditional`: Applies rules based on context

For a complete list of custom Mendix rules and overrides, see [Custom Mendix Rules](/.vale/styles/Mendix/RULES.md).

## Read More

* [Vale Documentation](https://vale.sh/docs/)
* [Microsoft Style Guide Package](https://github.com/errata-ai/Microsoft)
* [Vale Rule Syntax](https://vale.sh/docs/topics/styles/)
* [Custom Mendix Rules](/.vale/styles/Mendix/RULES.md)

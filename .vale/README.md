# Vale Configuration for Mendix Documentation

[Vale](https://vale.sh/docs/) lints the documentation with both Microsoft Writing Style Guide rules and custom Mendix rules.

It applies in the following contexts:

* **GitHub PRs**: Runs automatically on PRs marked "Ready for review" and posts inline comments on changed lines. Only shows errors (warnings and suggestions are hidden).
* **Local**: Install Vale for immediate feedback in VS Code while editing. Shows all levels: suggestions, warnings, and errors. Many Vale rules support automatic fixes—click the lightbulb icon next to flagged text in the Problems tab or hover over an underlined issue and click **Quick Fix**.

Need to install Vale? See [SETUP.md](./SETUP.md) for installation and verification steps.

## File Structure

```
.vale.ini                      # Main configuration
.vale/
  styles/
    Microsoft/                 # Synced from vale.sh (gitignored)
    Mendix/                    # Custom rules (committed to Git)
      *.yml                    # Mendix-specific style rules
  README.md                # Rule documentation
```

See [.vale/styles/Mendix/README.md](styles/Mendix/README.md) for the complete list of custom rules and overrides.

## Read More

* [Vale Documentation](https://vale.sh/docs/)
* [Microsoft Style Guide Package](https://github.com/errata-ai/Microsoft)
* [Vale Rule Syntax](https://vale.sh/docs/topics/styles/)
* [Custom Mendix Rules](.vale/styles/Mendix/README.md)

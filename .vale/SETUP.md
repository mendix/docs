# Vale Setup Guide

Vale is configured but not yet installed. This guide walks you through setup.

## Why Install Locally?

- **Immediate feedback** - See violations as you write, not after pushing
- **Faster iteration** - Fix issues before creating a PR
- **More feedback** - See suggestions and warnings locally; the GitHub Action is configured to only show errors

**Note:** Even without local installation, your PRs will be checked automatically by a GitHub Action: [.github/workflows/vale.yml](../.github/workflows/vale.yml).

## Installation (Choose One)

### For macOS

First, download Homebrew if you don't already have it: https://brew.sh/

```bash
brew install vale
```

### For Windows

1. On https://github.com/vale-cli/vale/releases, download the Windows version from Assets
2. Right-click the zip file and select **Extract All**
3. Open PowerShell and run:

   ```powershell
   # Create a bin directory for your tools
   mkdir $HOME\bin -Force
   
   # Move vale.exe there (adjust the path if you extracted it elsewhere)
   Move-Item $HOME\Downloads\vale_*_Windows_64-bit\vale.exe $HOME\bin\
   
   # Add to PATH
   $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
   [Environment]::SetEnvironmentVariable("Path", "$currentPath;$HOME\bin", "User")
   ```

## Post-Installation

After installing Vale:

1. **Verify the installation worked:**

   ```bash
   vale --version
   ```

2. **Sync the Microsoft Style Guide rules:**

   ```bash
   vale sync
   ```

   This downloads Microsoft's style pack to `.vale/styles/Microsoft/`.

3. **Install VS Code extension:**
   - Install the [Vale VS Code extension](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode).
   - Restart VS Code.
   - Open any `.md` file in `content/en/docs/`.
   - Violations show as squiggly underlines in the file and appear in the **Problems** tab.  Many Vale rules support automatic fixes—click the lightbulb icon next to flagged text in the Problems tab or hover over an underlined issue and click **Quick Fix**.
   - Save changes to rerun the linter.

4. **If you have open PRs:** Merge `development` into your branch to get the Vale configuration files.
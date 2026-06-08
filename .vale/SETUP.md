# Vale Setup Guide

<!-- vale off -->

Vale is configured but needs to be installed locally before you can use it in VS Code. This guide walks you through setup.

## Why Install Locally?

* **Immediate feedback** - See violations as you write, not after pushing
* **Faster iteration** - Fix issues before creating a PR
* **More feedback** - See suggestions and warnings locally on the entire file; the GitHub Action is configured to show only errors on changed lines.

**Note:** Even without local installation, your PRs will be checked automatically by a GitHub Action: [.github/workflows/vale.yml](../.github/workflows/vale.yml).

## Installation

### For macOS

1. Download [Homebrew](https://brew.sh/) if you don't already have it.
2. In your terminal, run the following command:
   
   ```bash
   brew install vale
   ```

### For Windows

1. On https://github.com/vale-cli/vale/releases, download the Windows version from Assets.
2. Right-click the zip file and select **Extract All**.
3. Open PowerShell and run:

   ```powershell
   # Create a bin directory for your tools
   mkdir $HOME\.local\bin -Force
   
   # Move vale.exe there (adjust the path if you extracted it elsewhere)
   Move-Item $HOME\Downloads\vale_*_Windows_64-bit\vale.exe $HOME\.local\bin
   
   # Add to PATH
   $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")
   [Environment]::SetEnvironmentVariable("Path", "$currentPath;$HOME\.local\bin", "User")
   ```

## Post-Installation

After installing Vale:

1. **Verify the installation worked:**

   ```bash
   vale --version
   ```

2. **Sync the Microsoft Style Guide rules:**

   Navigate to the root of your docs repository (for example, `cd ~/docs`), then run:

   ```bash
   vale sync
   ```

   This downloads Microsoft's style pack to `.vale/styles/Microsoft/`.

   If you get a `Runtime error: No sources provided` error, verify that there is a `.vale.ini` file in the root of the docs repository (and that you are also in the root of the docs repository).

3. **Install VS Code extension:**
   - Install the [Vale VS Code extension](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode).
   - Restart VS Code.
   - Open any `.md` file in `content/en/docs/`.
      - Violations show as squiggly underlines in the file and appear in the **Problems** tab in the bottom pane.
      - Many Vale rules support automatic fixes—hover over an underlined issue and click **Quick Fix** or click the lightbulb icon next to flagged text in the **Problems** tab.
      - Save changes to rerun the linter.
   - If desired, you can adjust the extension's settings in VS Code to show a different minimum alert level. For example, if you set `minAlertLevel` to `warning`, it will report only warnings and errors, not suggestions.

4. **If you have open PRs without the Vale configuration files:** Merge `development` into your branch.

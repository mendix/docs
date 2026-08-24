---
title: "Java Migration Tool"
url: /refguide/java-migration-tool/
weight: 47
description: "Describes the Java Migration Tool CLI for automatically rewriting deprecated and removed Mendix Java API calls."
---

## Introduction

The **Java Migration Tool** (`jmt`) is a command-line utility that automatically rewrites deprecated and removed Mendix Java API calls.

The tool complements the [Update Assistant (Beta)](/refguide/update-assistant/) pane: use the pane to identify deprecations, and the CLI to apply the fixes automatically.

## Installation {#installation}

Download the tool from Mendix CDN: https://cdn.mendix.com/mendix-java-migration-tool/jmt-1.0.1.jar

## Basic Usage {#basic-usage}

Run the tool from a command prompt. Use the same Java version that the version of Studio Pro you are migrating to uses. You can find the Java installation path in Studio Pro's preferences.

The following example rewrites all Java files in your app's  `javasource/` folder and its subfolders to the target Studio Pro version:

This example assumes:

* The Java executable is saved to `C:\Program Files\Eclipse Adoptium\jdk-21.0.5.11-hotspot\bin\java`
* `jmt-1.0.1.jar` is saved to the current folder
* Mendix 11.11.0 is installed at `C:\Program Files\Mendix\11.11.0`
* Your app folder is `C:\Users\YourName\Mendix\MyApp`

```cmd
"C:\Program Files\Eclipse Adoptium\jdk-21.0.5.11-hotspot\bin\java" -jar jmt-1.0.1.jar rewrite --to-version 11.11 --studio-pro "C:\Program Files\Mendix\11.11.0" --project-root "C:\Users\YourName\Mendix\MyApp"
```

Replace the paths and version number with the actual values for your installation. For all available commands and options, see [Commands](#commands) and [Options](#options).

## Commands {#commands}

Run the tool with `java -jar jmt-1.0.1.jar <COMMAND> [OPTIONS]`.

* If Java is on your `PATH`, call `java` directly. If not, provide the full path to the `java` executable.
* Run the command from the folder where you saved `jmt-1.0.1.jar`, or specify its full path in the command.

| Command | Description |
|---------|-------------|
| `version` | Display the tool version |
| `recipes` | List all available migration recipes |
| `rewrite <PATHS>` | Rewrites Java files that are in the given paths (files or folders) in the [selected Mendix version](#rewrite-options). If `<PATHS>` is omitted, all the Java files in `javasource/` and its subfolders are converted. |

## Options {#options}

### Global

* `-h, --help` – show usage information

### `recipes` Command

* `-o, --output <FORMAT>` – output format: `text` (default) or `json`

### `rewrite` Command {#rewrite-options}

* `-t, --to-version <VERSION>` – *(required)* target Studio Pro version, for example `11.2.0`
* `-n, --dry-run` – preview changes without writing files
* `-o, --output <FORMAT>` – output format: `text` (default) or `json`
* `-p, --project-root <PATH>` – root of the Mendix project. This enables classpath resolution via `javasource/`, `vendorlib/`, and `userlib/`
* `-s, --studio-pro <PATH>` – Studio Pro installation folder. This enables Mendix public Java API resolution via the runtime bundles

{{% alert color="warning" %}}
Using `-p` and `-s` is strongly recommended. The tool relies on type binding resolution to apply recipes correctly. For example, it only rewrites `getMember` calls when it can confirm the receiver is an `IMendixObject`. Without these options, type information may be incomplete and recipes may not be applied.

For the same reason, the Java code in your project must have been successfully compiled in an older version of Mendix before running the tool. This ensures that there are no missing imports, unresolved types, or variables declared without a fully qualified type name. These can prevent a recipe from recognizing a valid call site.
{{% /alert %}}

## Examples {#examples}

### Commands

```bash
# List available recipes
java -jar jmt-1.0.1.jar recipes

# Apply with full project context for accurate type resolution
java -jar jmt-1.0.1.jar rewrite javasource/ -t 11.2.0 \
  -p /path/to/mendix-project \
  -s "/path/to/Studio Pro 11.2.0"

# Preview changes without writing (dry run)
java -jar jmt-1.0.1.jar rewrite javasource/ -t 11.2.0 -n

# Apply all applicable recipes to the javasource folder
java -jar jmt-1.0.1.jar rewrite javasource/ -t 11.2.0

# Machine-readable output for CI/CD integration
java -jar jmt-1.0.1.jar rewrite javasource/ -t 11.2.0 -o json
```

### Output Formats {#output-formats}

**Text** (default) – human-readable summary:

```
[REWRITE] Target version: 11.2.0
Applied recipes:
  - Replace IMendixObject.getMember(...) (available from: 10.18)

Changed: javasource/myfirstmodule/actions/MyAction.java
  Replace IMendixObject.getMember(...): 2

Files processed: 1
Files changed: 1
Total changes: 2
```

**JSON** – machine-readable, suitable for CI/CD pipelines:

```json
{
  "status": "success",
  "dryRun": false,
  "filesProcessed": 1,
  "filesChanged": 1,
  "totalChanges": 2,
  "files": [
    {
      "file": "javasource/myfirstmodule/actions/MyAction.java",
      "changes": [
        {
          "recipe": "Replace IMendixObject.getMember(IContext, String) with IMendixObject.getMember(String)",
          "count": 2
        }
      ]
    }
  ],
  "warnings": []
}
```

## Release Notes

* v1.0.1 – Fixed a bug in `retrieveXPathQuery` replacement recipe where helper methods were not properly imported. The recipe now  generates helper methods with fully qualified class names.
* v1.0.0 – Initial release.

## Read More

* [Java Programming](/refguide/java-programming/)
* [Update Assistant (Beta)](/refguide/update-assistant/)
* [Java Version Migration](/refguide/java-version-migration/)

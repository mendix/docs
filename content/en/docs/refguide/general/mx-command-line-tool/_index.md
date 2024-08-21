---
title: "mx Command-Line Tool"
url: /refguide/mx-command-line-tool/
weight: 50
description: "Describes the options of the mx command-line tool."
---

## Introduction

The mx tool is a Windows and Linux command-line tool that can be used to perform various actions on a Mendix app.

## Location

Mendix Studio Pro comes with the mx command-line tool. You can find the executable *mx.exe* file in the same folder that contains *studiopro.exe* (for example, *C:\Program Files\Mendix\10.0.0.5003\modeler\mx.exe*). It is also included if you download [mxbuild](/refguide/mxbuild/).

## Available Commands

{{% alert color="info" %}}
To see a list of commands, use the command `mx --help`.
{{% /alert %}}

### App Commands

These are the available [app commands](/refguide/mx-command-line-tool/app/):

| Command  | Description |
| --- | --- |
| [check](/refguide/mx-command-line-tool/app/#check) | Checks the app for issues. |
| [convert](/refguide/mx-command-line-tool/app/#convert) | Converts the Mendix app. |
| [create-project](/refguide/mx-command-line-tool/app/#create-project) | Creates a new Mendix app. |
| [show-version](/refguide/mx-command-line-tool/app/#show-version) | Shows the Studio Pro version that was last used to edit the app. |
| [show-java-version](/refguide/mx-command-line-tool/app/#show-java-version) | Show the configured Java version of the app. |

### Adaptable Solutions Commands

These are the available [adaptable solutions commands](/refguide/mx-command-line-tool/adaptable/):

| Command | Description|
| --- | --- |
| [show-app-version](/refguide/mx-command-line-tool/adaptable/#show-app-version) | Shows the application version of the app. |
| [set-app-version](/refguide/mx-command-line-tool/adaptable/#set-app-version) | Sets the application version of the app. |

### Module Commands

These are the available [module commands](/refguide/mx-command-line-tool/module/):

|  Command | Description |
|---|---|
| [show-module-version](/refguide/mx-command-line-tool/module/#show-module-version) | Shows the version of a module. |
| [set-module-version](/refguide/mx-command-line-tool/module/#set-module-version) | Sets the version of a module. |
| [module-import](/refguide/mx-command-line-tool/module/#module-import) | Import a module from an mpk package into an app. |

### Export Package Commands

These are the available [export package commands](/refguide/mx-command-line-tool/export/):

|  Command | Description |
| --- | --- |
| [create-project-package](/refguide/mx-command-line-tool/export/#create-project-package) | Exports an app package. |
| [create-solution-package](/refguide/mx-command-line-tool/export/#create-solution-package) | Exports a solution package. |
| [create-module-package](/refguide/mx-command-line-tool/export/#create-module-package) | Exports a module package. |

### Merging and Diffing Commands

These are the available [merging and diffing commands](/refguide/mx-command-line-tool/merge/):

|   Command | Description |
| --- | --- |
| [merge](/refguide/mx-command-line-tool/merge/#merge) | Merges the *.mpr* files. |
| [diff](/refguide/mx-command-line-tool/merge/#diff) | Shows the diff of the *.mpr* files. |
| [dump-mpr](/refguide/mx-command-line-tool/dump-mpr/) | Create a JSON description of the model of a Mendix App |

## Undocumented Options

The mx tool contains options that are not described in this document. These options are for internal Mendix usage and are not officially supported. This might change in the future, but these options are used at your own risk.

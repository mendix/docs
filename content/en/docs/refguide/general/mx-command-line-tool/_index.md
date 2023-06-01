---
title: "mx Command-Line Tool"
url: /refguide/mx-command-line-tool/
category: "General Info"
weight: 50
description: "Describes the options of the mx command-line tool."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux"]
---

## 1 Introduction

The **mx tool** is a Windows and Linux command-line tool that can be used to perform various actions on a Mendix app.

## 2 Location

Mendix Studio Pro comes with the mx command-line tool. The executable *mx.exe* file can be found in the same folder that contains `studiopro.exe` (for example, *C:\Program Files\Mendix\10.0.0.5003\modeler\mx.exe*).

## 3 Available commands

| [**App commands**](/refguide/mx-command-line-tool/app) | App commands |
| - | - |
| [check](/refguide/mx-command-line-tool/mx-check) | Check the app for issues |
| [convert](/refguide/mx-command-line-tool/mx-convert) | Convert Mendix app |
| [create-project](/refguide/mx-command-line-tool/mx-create-project) | Create a new Mendix app |
| [show-version](/refguide/mx-command-line-tool/mx-show-version) | Show the version of Studio Pro that was last used to edit the app |

| [**Adaptable solutions commands**](/refguide/mx-command-line-tool/adaptable) ||
| - | - |
| [show-app-version](/refguide/mx-command-line-tool/mx-show-version) | Show the Application Version of the app |
| [set-app-version](/refguide/mx-command-line-tool/mx-set-app-version) | Sets the Application Version of the app |

| [**Module commands**](/refguide/mx-command-line-tool/module) ||
|-|-|
| [show-module-version](/refguide/mx-command-line-tool/mx-show-module-version) | Show the version of the module specified |
| [set-module-version](/refguide/mx-command-line-tool/mx-set-module-version) | Set the version of the module specified |

| [**Export package commands**](/refguide/mx-command-line-tool/export) ||
| - | - |
| create-project-package | Export a project package |
| create-solution-package | Export a solution package |
| create-module-package | Export a module package |

| [**Merging and diffing**](/refguide/mx-command-line-tool/merge)  ||
| - | - |
| [merge](/refguide/mx-command-line-tool/mx-merge) | Merge mpr files |
| [diff](/refguide/mx-command-line-tool/mx-diff) | Diff mpr files |

## 4 mx Tool Options

The mx tool has `--help` option that outputs all the commands available.

## 5 Undocumented Options

The mx tool contains options that are not described in this document. Those are for internal Mendix usage and are not officially supported. This might change in the future, but these options can be used only at your own risk.
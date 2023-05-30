---
title: "Adaptable solution commands"
url: /refguide/mx-command-line-tool/adaptable
category: "General Info"
weight: 20
description: "Describes the commands related to adaptable solutions."
tags: ["mx", "command-line", "tool", "mx", "studio pro", "windows", "linux", "solution"]
---

The commands in this group are related to [Adaptable solutions](http://localhost:1313/appstore/creating-content/sol-solutions-guide/) . 

These commands use common format exit codes.

Commands return 0 in case of success.

In case of errors the exit code consists of three digits XYZ:

**X:** determines the error type:

 1: Parameter validation error.

 2: Output-related error.

 3: Errors related to the execution of the operation.

**Y:** is the number of the parameter the error is related to (if applicable).

**Z:** determines error details:

 1: File is not found.

 2: App is too old.

 3: Distribution is not enabled.

 4: Version is not in the SemVer format.

 5: App was not initialized from a solution package.

Please refer to the specific commands pages for exit code examples 
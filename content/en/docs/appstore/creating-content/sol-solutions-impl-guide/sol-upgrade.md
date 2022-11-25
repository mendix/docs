---
title: "Upgrade solution"
url: /appstore/creating-content/sol-upgrade
linktitle: "Upgrade solution"
weight: 10
description: "A properly set-up solution can be upgraded to a new version provided by ISV"
tags: [ "solutions", "upgrade solution", "startup", "adaptive solutions", "prescriptive solutions" ]
---

## 1 Introduction

Solution upgrade is a procedure of merging changes provided by ISV in the new version of the solution into an adapted solution.

To upgrade a solution, open Studio Pro and click File->Upgrade solution menu item.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-impl-guide/solution-upgrade.png" alt="Upgrade Solution" >}}

## 2 Solution Upgrade process

### 2.1. Prerequisites

The upgrade can be performed only if the following requirements are met:
- Solution package you want to upgrade to was created with exactly the same Studio Pro version as the one you have open.
- Version Control system is Git
- The App is currently on `Main` branch
- There is no uncommitted changes in your App
- There is no unresolved conflicts in your App
- `solution-releases` branch exists
- There is only one MPR file in the Solution package.
- The name of your App's MPR file is the same as the name of the MPR file in the Solution package
- The Solution you are trying to upgrade to is the same solution that was used to set-up your solution.


### 2.2. Process

Selected Solution package file (.mxsolution) provided by ISV and pressed OK. The process is automatic afterwards.

Once solution upgrade is completed, a new commit to `solution-releases` branch will be created. This commit contains the unchanged new version of a solution (as provided by ISV).
It is not allowed to make any changes in that branch as this will render the solution incompatible with the upgrades or will lead to unpredictable errors during upgrade.

### 2.3. See also

- The Set-up procedure for a solution is described in [Set-up section](/appstore/creating-content/sol-setup) 

---
title: "Set-up solution"
url: /appstore/creating-content/sol-setup
linktitle: "Set-up solution"
weight: 10
description: "A solution needs to be properly inbitialized in order to be compatible with the future upgrades"
tags: [ "solutions", "set-up solution", "startup", "adaptive solutions", "prescriptive solutions" ]
---

## 1 Introduction

Solution set-up is a procedure of creating your app from a Mendix Solution package and configuring it to be compatible with future upgrades.

To set-up a solution, open Studio Pro and [import](/refguide/import-and-export/) .mxsolution package.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-impl-guide/solution-import.png" alt="Import Solution" >}}

## 2 Solution Set-up process

### 2.1. Prerequisites

- Currently solution can be set-up only with the Studio Pro of exactly the same version that was used to create it.
- A solution must be version controlled and use Git. In order to be compatible with the upgrades an app has to be version controlled.
- It is impossible to initialize solution on a non-empty repository.

### 2.2. Process

Selected a target directory for your solution and pressed OK. The process is automatic afterwards.

Once a solution is initialized, a special `solution-releases` branch will be created. This branch contains the unchanged version of a solution (as provided by ISV).
It is not allowed to make any changes in that branch as this will render the solution incompatible with the upgrades or will lead to unpredictable errors during upgrade.

### 2.3. See also

- The Upgrade procedure of a correctly set-up solution is described in [Upgrade section](/appstore/creating-content/sol-upgrade) 

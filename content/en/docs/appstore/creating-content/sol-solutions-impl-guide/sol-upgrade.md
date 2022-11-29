---
title: "Upgrade a Solution"
url: /appstore/creating-content/sol-upgrade
linktitle: "Upgrade a Solution"
weight: 10
description: "Describes how to upgrade a properly set up solution with a new version provided by the ISV."
tags: ["solutions", "upgrade solution", "startup", "adaptive solutions", "prescriptive solutions"]
---

## 1 Introduction

Upgrading a solution is the process of merging changes provided by the ISV into a new version of an adaptive solution.

## 2 Prerequisites

To upgrade a Mendix solution, make sure the following prerequisites are met:

* You are using the same Studio Pro version as the version used to create the solution package (for example, if Studio Pro 9.6.0 was used to create the solution, only that version can be used to upgrade the solution)
* Your version control system is Git
* Your app is currently on the **main** branch line
* The **solution-releases** branch line exists
* There are no uncommitted changes or unresolved conflicts in your app
* There is only one MPR file in the solution package
* The name of your app's MPR file is the same as the name of the MPR file in the solution package
* The solution you are upgrading to is the same solution that was used to set up your adaptive solution

## 3 Upgrading Process

To upgrade a solution, follow these steps:

1. Open Studio Pro and click **File** > **Upgrade Solution**.

{{< figure src="/attachments/appstore/creating-content/sol-solutions-impl-guide/solution-upgrade.png" alt="Upgrade Solution" >}}

Selected Solution package file (.mxsolution) provided by ISV and pressed OK. The process is automatic afterwards.

Once solution upgrade is completed, a new commit to `solution-releases` branch will be created. This commit contains the unchanged new version of a solution (as provided by ISV).
It is not allowed to make any changes in that branch as this will render the solution incompatible with the upgrades or will lead to unpredictable errors during upgrade.

### 2.3. See also

- The Set-up procedure for a solution is described in [Set-up section](/appstore/creating-content/sol-setup) 

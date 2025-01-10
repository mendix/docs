---
title: "Set Up a Solution"
url: /appstore/creating-content/sol-set-up
linktitle: "Set Up a Solution"
weight: 10
description: "Describes properly initializing a Mendix solution to be compatible with future upgrades."
---

## Introduction

Setting up a Mendix solution is the process of creating your app from the solution package and configuring it to be compatible with future upgrades.

## Prerequisites

To set up a Mendix solution, make sure the following prerequisites are met:

* A solution can only be set up with the Studio Pro version that exactly matches the version used to create it (for example, if Studio Pro 10.0 was used to create the solution, only that version can be used to set up the solution), so make sure you are using the correct Studio Pro version
* The solution must be version-controlled with Git so that it is compatible with upgrades
* It is impossible to initialize a solution on a non-empty repository

## Setup Process

To set up a solution, follow these steps:

1. Open Studio Pro and [import](/refguide/import-and-export/) the *.mxsolution* package:

    {{< figure src="/attachments/appstore/create-content/implement-solutions/solution-import.png" alt="Import Solution" class="no-border" >}}

2. Select the target directory for your solution and click **OK**.
3. Once the solution is initialized, a special **solution-releases** branch is created. This branch contains the unchanged version of the solution (as provided by the ISV). You cannot make any changes in this branch, as that would render the solution incompatible with upgrades or lead to unpredictable errors during upgrades.

### Read More

* [Upgrade a Solution](/appstore/creating-content/sol-upgrade/) 

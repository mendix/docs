---
title: "Create Branch Line"
url: /refguide8/create-branch-line-dialog/
weight: 90
---

## Introduction

Use the **Create Branch Line** dialog box to create a new [branch line](/refguide8/version-control/#branches) via the **Branch Line Manager**:

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/branch-line-manager-dialog/create-branch-line-dialog/create-branch-line.png" class="no-border" >}}

To view the **Create Branch Line** dialog box, do the following:

1. Open **Version Control** > **Manage Branch Lines**.
2. In the **Branch Line Manager**, click **New**. 

The **Create Branch Line** dialog box is displayed.

For more information on how to manage branch lines, see [Branch Line Manager](/refguide8/branch-line-manager-dialog/). For information on the version control, see [Version Control](/refguide8/version-control/). 

## Create Branch From

**Create branch from** allows you to choose the development line you want to create the branch line from. You can choose one of the following options:

* <a id="main-line"></a>**Main line** – generally you would want to select *Main line* if you want to develop a large feature independently of the main line
* <a id="branch-line"></a>**Branch line** – allows you to create a branch line from another branch line
* <a id="tagged-version"></a>**Tagged version** – if you are doing maintenance on a deployed version you probably want to select a *tagged version*

## Revision 

This setting is only available when you select the [Main line](#main-line) or [Branch line](#branch-line) in **Create branch from**. 

Select from which revision of the main line or a branch line you want to create a branch line. Often, you would want to choose the most recent version.

## Branch Line 

This setting is only available when you select [Branch line](#branch-line) in **Create branch from**. 

Select from which branch line you want to create another branch line. Mendix recommends making branch lines only from the main line but in some cases branching a branch line can be useful.

## Tagged Version

This setting is only available when you select [Tagged version](#tagged-version) in **Create branch from**.  

Select from which tagged version you want to create a branch line. Every time you create a deployment archive a tag is created so that you can always refer back to that version of the project.

## Branch Name

Enter a name of the new branch line.

{{% alert color="warning" %}}
Branch names cannot include special characters (for example, `@`, `$`, `#`). 
{{% /alert %}}

## Existing Branch Lines

Since branch line names must be unique, this option shows the existing branch lines, so that you do not accidentally create a branch line with the same name.

## Read More

* [Version Control](/refguide8/version-control/)

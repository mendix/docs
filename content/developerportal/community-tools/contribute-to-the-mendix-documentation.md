---
title: "Contribute to the Documentation"
category: "Community Tools"
menu_order: 20
description: "Describes how to add and edit Mendix documentation as a Mendix community member."
tags: ["documentation", "community"]
#If moving or renaming this doc file, update the link in the site footer and links in the mendix/docs repo. See Mapping to Products for more details.
---

## 1 Introduction

All Mendix documentation is open to the Mendix community, which means you can make changes and add to it in ways that you see necessary. Do you see a how-to that is inaccurate or a section of the *Studio Pro Guide* that needs to be updated? You can easily help us improve the documentation for the whole Mendix community!

All the Mendix documentation is stored in a [GitHub repository](https://github.com/mendix/docs). With a GitHub account, you can edit all existing documentation. You can also write a new how-to on an awesome topic of your choice and submit it.

To work on the documentation in GitHub, use Markdown. For details on this easy-to-use syntax, see the [GitHub Guide to Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

{{% alert type="info" %}}
All documentation contributions may be edited to conform to our internal style guide.
{{% /alert %}}

{{% alert type="info" %}}
**Quick guide to making a documentation change**

1. Fork the **development** branch of the [mendix / docs](https://github.com/mendix/docs) repository.
2. Make your changes.
3. Create a pull request with our **development** branch as the base.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Add to and edit existing documentation
* Create new documentation

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a GitHub account (sign up [here](https://github.com/join))

You can create and edit files online within GitHub. If you want to work outside GitHub, we recommend using the following tools to contribute to the Mendix documentation:

* For writing, editing, and previewing documentation – [Typora](https://typora.io/) or [Visual Studio Code](https://code.visualstudio.com)
* For committing your documentation – [Sourcetree](https://www.sourcetreeapp.com/) or [GitHub Desktop](https://desktop.github.com/)

## 3 Editing the Documentation in GitHub

To edit existing documentation, follow these steps:

1. Click **Edit** in the upper-right corner of the specific Mendix documentation page that you want to work on.
2. Make your changes in GitHub (make sure the changes align with our [Documentation Writing Guidelines](documentation-writing-guidelines)).
3. Create a pull request that specifies our **development** branch as the base. For more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/) and [GitHub Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962).

{{% alert type="warning" %}}
If you need your pull request to be merged on a specific date (for example, for a specific release), specify that in the title of the pull request or as a comment. Otherwise, all pull requests are reviewed and merged under the assumption that the content can be published immediately. 
{{% /alert %}}

## 4 Writing New Documentation {#new-documentation}

The sections below present the key steps in writing new documentation for Mendix.

### 4.1 Using a Template

To submit a new how-to or *Studio Pro Guide* page to the Mendix documentation, start with a Mendix documentation template:

* To get the how-to template, right-click this link and save the file locally: [How-to Template](https://raw.githubusercontent.com/mendix/docs/development/templates/how-to-template.md)
* To get the *Studio Pro Guide* page template, right-click this link and save the file locally: [Mendix Studio Pro Guide Page Template](https://raw.githubusercontent.com/mendix/docs/development/templates/ref-guide-page-template.md)

### 4.2 Guidelines & Conventions {#naming}

Follow these guidelines and conventions when writing:

* Reference and use our [Documentation Writing Guidelines](documentation-writing-guidelines)
* Make sure the document files comply with these naming conventions:
	* Markdown file names should have the same name as the title of the page (for example, if the page is titled "Create Your Project," the filename should be `create-your-project.md`)
	* Document file names should always be lower-case with a hyphen (`-`) between each word
	* Do not use spaces or any other symbols in the file name (for example, `&`), as these will not be accepted
* Make sure the image files comply with these naming conventions:
	* Image file names should always be lower-case with a hyphen (`-`) between each word
	* Do not use spaces or any other symbols in the file name (for example, `&`), as these will not be accepted
	* Make sure the image files have names that make sense so it is easy to find them
	* Save the image files in a sub-folder in the **attachments** folder for the category in which the document is located (this sub-folder should have the same name as the document file name you are working on)
	* The following image extensions are allowed: *.png* (preferred), *.jpg*, *.gif*

### 4.3 Submitting Your Work

When you are ready to submit your work, follow these guidelines:

*  Commit new Markdown files via Sourcetree or via the **Create new file** button in the [Mendix GitHub repo](https://github.com/mendix/docs) (where you can copy-paste your text)
*  Commit new image files via Sourcetree or via the **Upload files** button in the GitHub repo (where you can drag and drop your image files)

Finally, create a pull request that specifies the Mendix **development** branch as the base (for more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/)).

{{% alert type="info" %}}
You may receive a response to your pull request asking for verification of specific issues. Do not panic! We just want to make sure your documentation submission fits well with what we have.
{{% /alert %}}

## 5 Signing the Contributor License Agreement

The first time you make a contribution to the Mendix documentation (via a pull request), you need to sign the [Contributor License Agreement for mendix/docs](https://www.clahub.com/agreements/mendix/docs) via CLAHub.

To access the license agreement, go to the **Conversation** tab of the pull request and click **Details** for **clahub**:

![](attachments/contribute-to-the-mendix-documentation/license_agreement.png)

This only needs to be done once.

## 6 Gaining Mendix Points {#GainingMendixPoints}

As you add knowledge to the documentation that will help your fellow Mendix developers, you will gain Mendix points for each contribution!

Before you can receive Mendix points for your documentation contributions, you must authorize the connection of your GitHub profile to your Mendix Community Profile. For more information, see the [Authorizing GitHub Connection](/developerportal/mendix-profile/index#github) section in *Mendix Profile*

The amount of points you gain depends on the size of the documentation contribution you make. This is calculated per pull request and is based on the number of lines changed:

* For a small contribution to the documentation – 5 points
* For a large contribution to the documentation – 15 points

The points are awarded when the pull request is merged.

## 7 Read More

* [Documentation Writing Guidelines](documentation-writing-guidelines)

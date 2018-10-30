---
title: "Contribute to the Mendix Documentation"
category: "Documentation"
menu_order: 10
frontpage_featured: true
---

## 1 Introduction

The documentation is open to the Mendix community, which means you can make changes and add to it in ways that you see necessary. Do you see a how-to that is inaccurate or a section of the reference guide that needs to be updated? Now you can help us improve the documentation for the whole Mendix community!

We believe community-generated documentation can cover new content and deal with the specific questions that you know need to be answered. The documentation is meant to address the needs of the Mendix community, and the community can play a key role in maintaining, improving, and expanding it.

All of the Mendix documentation is stored in a GitHub repository. With a GitHub account, you can edit all existing documentation. You can also write a new how-to on an awesome topic of your choice and submit it to our documentation.

To work on the documentation in GitHub, use Markdown. For details on this easy-to-use syntax, see the [GitHub Guide to Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

{{% alert type="info" %}}
All documentation contributions may undergo changes after editing according to our internal style guide.
{{% /alert %}}

{{% alert type="info" %}}
Quick guide to making a documentation change: fork the [mendix / docs](https://github.com/mendix/docs) repository and create a pull request with our **development** branch as the base.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Add to and edit existing documentation
* Create a new how-to or reference guide page using a template

## 2 Prerequisites

### 2.1 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a GitHub account (sign up [here](https://github.com/join))

### 2.2 Tools

We recommend the use of the following tools for contributing to the Mendix documentation:

* For writing and editing documentation – [Typora](https://typora.io/) or [Visual Studio Code](https://code.visualstudio.com) (with which you can preview your Markdown styling)
* For committing your documentation – [Sourcetree](https://www.sourcetreeapp.com/) or [GitHub Desktop](https://desktop.github.com/)

### 2.3 Contributor License Agreement

The first time you make a contribution to the Mendix documentation (via a pull request), you need to sign the [Contributor License Agreement for mendix/docs](https://www.clahub.com/agreements/mendix/docs) via CLAHub.

To access the license agreement, go to the **Conversation** tab of the pull request and click **Details** for **clahub**:

![](attachments/contribute-to-the-mendix-documentation/license_agreement.png)

This only needs to be done once.

## 3 Editing the Existing Documentation

To edit existing documentation, follow these steps:

1. Click **Edit** in the upper-right corner of the specific Mendix documentation page that you want to work on.
2. Make your changes in GitHub (make sure the changes align with our [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines)).
3. Create a pull request that specifies our **development** branch as the base. For more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/) and [GitHub Standard Fork & Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962).

{{% alert type="warning" %}}
If you need your pull request to be merged on a specific date (for example, for a specific release), specify that in the title of the pull request or as a comment. Otherwise, all pull requests are reviewed and merged under the assumption that the content can be published immediately. 
{{% /alert %}}

{{% alert type="info" %}}
Mendix supports documentation for three major versions at any one time.
{{% /alert %}}

## 4 Writing a New How-to or Reference Guide Page

To submit a new how-to or reference guide page to the Mendix documentation, follow these steps:

1. Save a copy of the [How-to Template](the-how-to-template-page) or [Reference Guide Page Template](the-reference-guide-page-template-page) locally to start writing.
2. Follow the guidelines in the template for writing your document, and make sure the text aligns with our [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines).
3. Add screenshots and other images to a new sub-folder in the **attachments** folder. For details on working with images, see the section [Naming New Files](#Naming) below.
4. To merge your new documentation, commit it to the GitHub repository:
    *  Commit new Markdown files via Sourcetree or via the **Create new file** button in the [Mendix GitHub repo](https://github.com/mendix/docs) (where you can copy-paste your text)
    *  Commit new image files via Sourcetree or via the **Upload files** button in the GitHub repo (where you can drag and drop your image files)
5. Create a pull request that specifies the Mendix **development** branch as the base. For more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/).

{{% alert type="info" %}}
You may receive a response to your pull request asking for verification of specific issues. Don’t panic! We just want to make sure your documentation submission fits well with what we have.
{{% /alert %}}

## <a name="Naming"></a>5 Naming New Files

When contributing to the documentation, make sure the document files comply with these naming conventions:

* Markdown file names should have the same name as the title of the page (for example, if the page is titled "Create Your Project," the filename should be `create-your-project.md`)
* Document file names should always be lower-case with a hyphen (`-`) between each word
* Do not use spaces or any other symbols in the file name (for example, `&`), as these will not be accepted

Make sure the image files comply with these naming conventions:

* Image file names should always be lower-case with a hyphen (`-`) between each word
 * Do not use spaces or any other symbols in the file name (for example, `&`), as these will not be accepted
* Make sure the image files have names that make sense so it is easy to find them
* Save the image files in a sub-folder in the **attachments** folder for the category in which the document is located; this sub-folder should have the same name as the document file name you are working on
* The following image file types are allowed: `.png` (preferred), `.jpg`,  `.gif`

## 6 Gaining Mendix Points<a name="GainingMendixPoints"></a>

As you add knowledge to the documentation that will help your fellow Mendix developers, you will gain Mendix points for each contribution!

Before you can receive Mendix points for your documentation contributions, you must authorize the connection of your GitHub profile to your Mendix Community Profile. For more information, see the [Authorizing GitHub Connection](/developerportal/general/mendix-profile#github) section in *Mendix Profile*

The amount of points you gain depends on the size of the documentation contribution you make. This is calculated per pull request and is based on the number of lines changed:

* For a small contribution to the documentation – 5 points
* For a large contribution to the documentation – 15 points

The points are awarded when the pull request is merged.

## 7 Related Content

* [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines)
* [How-to Template](the-how-to-template-page)
* [Reference Guide Page Template](the-reference-guide-page-template-page)

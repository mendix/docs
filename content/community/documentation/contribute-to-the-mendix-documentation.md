---
title: "Contribute to the Mendix Documentation"
category: "Documentation"
order: 10
---

## 1 Introduction

The documentation is open to the Mendix community, which means you can make changes and add to it in ways that you see necessary. Do you see a how-to that is inaccurate or a section of the reference guide that needs to be updated for UI changes? Now you can help us improve the documentation for the whole Mendix community!

We believe community-generated documentation can cover new areas of content and deal with the specific questions that only you know need to be answered. The documentation will address the needs of the community, and the community will play a key role in maintaining, improving, and expanding it.

All of the Mendix documentation is stored in GitHub. With a GitHub account, you can edit all of the existing documentation. You can also write a new how-to on an awesome topic of your choice and submit it to our documentation.

To work on the documentation in GitHub, you will be using Markdown. For details on this easy-to-use syntax, see the [GitHub Guide to Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

{{% alert type="info" %}}
All documentation contributions may undergo changes after editing according to our internal style guide.
{{% /alert %}}

{{% alert type="info" %}}
Quick guide to making a documentation change: fork the [mendix / docs](https://github.com/mendix/docs) repository and create a pull request with our **development** branch as the base.
{{% /alert %}}

**This how-to will teach you how to do the following:**

* Add to and edit existing documentation
* Create a new how-to or reference guide page using a template

## 2 Prerequisites and Other Information

### 2.1 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a GitHub account (sign up [here](https://github.com/join))

### 2.2 Tools

We recommend the use of the following tools for contributing to the Mendix documentation:

* For writing and editing documentation – [Visual Studio Code](https://code.visualstudio.com) (with which you can preview your Markdown styling)
* For committing your documentation – [Sourcetree](https://www.sourcetreeapp.com/) or [GitHub Desktop](https://desktop.github.com/)

### 2.3 Contributor License Agreement

The first time you make a contribution to the Mendix documentation (via a pull request), you will have to sign the [Contributor License Agreement for mendix/docs](https://www.clahub.com/agreements/mendix/docs) via CLAHub.

To access the license agreement, go to the **Conversation** tab of the pull request and click **Details** for **clahub**:

![](attachments/contribute-to-the-mendix-documentation/license_agreement.png)

This only needs to be done once.

## 3 Editing the Existing Documentation

To edit the existing documentation (for example, a how-to or reference guide page), follow these steps:

1. Click **Edit on GitHub** in the upper-right corner of the specific Mendix documentation page that you want to work on.
2. Make your changes in GitHub (make sure the changes align with our [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines)).
3. Create a pull request that specifies our **development** branch as the base. For more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/).

{{% alert type="info" %}}

You can add and edit the description and tags metadata in the header of the document so that the document is more searchable. For more information on the metadata, see the [How-to Template](the-how-to-template-page) and [Reference Guide Page Template](the-reference-guide-page-template-page).

{{% /alert %}}{{% alert type="warning" %}}

Mendix supports documentation for three major versions at any one time. This means that if you make a documentation change in one version, it is important to make that same change in the documentation for the two previous versions (if the change is applicable, of course). For example, you make a change for Mendix version 6 but these changes are also applicable to Mendix versions 5 and 4, so you should make the same change in the documentation for Mendix versions 5 and 4. You can submit all of these changes in the same pull request.

{{% /alert %}}

## 4 Writing a New How-to or Reference Guide Page

To submit a new how-to or reference guide page to our documentation, follow these steps:

1. Save a copy of the [How-to Template](the-how-to-template-page) or [Reference Guide Page Template](the-reference-guide-page-template-page) locally in order to use it.
2. Follow the guidelines in the template for writing your document, and make sure the text aligns with our [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines).
3. Take screenshots for the new document and add them to a new sub-folder in the **attachments** folder. For more details on working with images, see [5 Naming New Files and Images](#NamingNewFilesandImages).
4. To merge your new documention, commit it to the GitHub repository:
    *  You can commit new Markdown files via Sourcetree or via the **Create new file** button in the GitHub repo (where you can copy-paste your text)
    * You can only commit new image files via Sourcetree
5. Create a pull request that specifies our **development** branch as the base. For more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/).

{{% alert type="info" %}}

You may receive a response to your pull request asking for verification of specific issues. Don’t panic! We just want to make sure your documentation submission fits well with what we have. Do your best with the request so that we can incorporate your documentation in our repository.

{{% /alert %}}

## <a name="NamingNewFilesandImages"></a>5 Naming New Document Files, Image Files, and Attachment Sub-Folders

When contributing to the documentation, make sure the document files comply with these naming conventions:

* Markdown file names should have the same name as the title of the page (for example, if the page is titled "Set Up Your Project," the filename should be `setup-your-project.md`)
* Document file names should always be lower-case with a hyphen (`-`) between each word
* Do not use spaces or any other symbols in the file name (for example, `&`), as these will not be accepted

Make sure the image files comply with these naming conventions:

* Image file names should always be lower-case with a hyphen (`-`) between each word
 * Do not use spaces or any other symbols in the file name (for example, `&`), as these will not be accepted
* Make sure the image files have names that make sense, so it's easier to find them later on
* Save the image files in a sub-folder in the **attachments** folder for the category in which the document is located; this sub-folder should have the same name as the document file name you are working on
  * For example, the `project-setup` image file is located in the **new-project** sub-folder (named after the document) in the **attachments** folder of the **getting-started** how-to category folder
* The following image file types are allowed: `.jpg`, `.png`, `.gif`

## 6 Gaining Mendix Points<a name="GainingMendixPoints"></a>

As you add knowledge to the documentation that will help your fellow Mendix developers, for each contribution, you will gain Mendix points!

Before you can receive Mendix points for your documentation contributions, you must authorize the connection of your GitHub profile to your Mendix Community Profile. For more information, see [How to Set Up Your Community Profile](../tools/how-to-set-up-your-profile#github).

The amount of points you gain depends on the size of the documentation contribution you make. This is calculated per pull request and is based on the number of lines changed:

* For a small contribution to the documentation – 5 points
* For a large contribution to the documentation – 15 points

The points are awarded when the pull request is merged. For more details on Mendix points, see the [Points System FAQ](https://developer.mendixcloud.com/link/faq).

## 7 Related Content

* [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines)
* [How-to Template](the-how-to-template-page)
* [Reference Guide Page Template](the-reference-guide-page-template-page)

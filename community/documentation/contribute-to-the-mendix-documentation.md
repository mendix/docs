---
title: "Contribute to the Mendix Documentation"
space: "Community"
category: "Documentation"
---

## 1 Introduction

The documentation is open to the Mendix community, which means you can make changes and add to it in ways that you see necessary. Do you see a how-to that is inaccurate or a section of the reference guide that needs to be updated for UI changes? Now you can help us improve the documentation for the whole Mendix community!

We believe community-generated documentation can cover new areas of content and deal with the specific questions that only you know need to be answered. The documentation will address the needs of the community, and the community will play a key role in maintaining, improving, and expanding it.

All of the Mendix documentation is stored in GitHub. With a GitHub profile, you can edit all of the existing documentation. You can also write a new how-to on an awesome topic of your choice and submit it to our documentation.

To work on the documentation in GitHub, you will be using Markdown. For details on this easy-to-use syntax, see the [GitHub Guide to Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

<div class="alert alert-info">

All documentation contributions may undergo changes after editing according to our internal style guide.

</div>

**This how-to will teach you how to do the following:**

* Add to and edit existing documentation
* Create a new how-to or reference guide page using a template

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a GitHub account (sign up [here](https://github.com/join))

We recommend the use of the following tools for contributing to the Mendix documentation:

* For writing and editing documentation – [Visual Studio Code](https://code.visualstudio.com) (with which you can preview your Markdown styling)
* For committing your documentation – [SourceTree](https://www.sourcetreeapp.com/) or [GitHub Desktop](https://desktop.github.com/)

## 3 Editing the Existing Documentation

To edit the existing documentation (for example, a how-to or reference guide page), follow these steps:

1. Click **Edit on GitHub** in the upper-right corner of the specific Mendix documentation page that you want to work on.
2. Find the files in the repository and make your changes (make sure your changes align with our [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines)).
3. Create a pull request that specifies our **development** branch as the base. For more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/).

<div class="alert alert-info">

You can add and edit the description and tags metadata in the header of the document so that the document is more searchable. It is also possible to add how many table of contents levels you want to appear in the document. For more information on the metadata, see the [How-To Template](the-how-to-template-page) and [Reference Guide Page Template](the-reference-guide-page-template-page).

</div><div class="alert alert-warning">

Mendix supports documentation for three major versions at any one time. This means that if you make a documentation change in one version, it is important to make that same change in the documentation for the two previous versions (if the change is applicable, of course). For example, you make a change for Mendix version 6 but these changes are also applicable to Mendix versions 5 and 4, so you should make the same change in the documentation for Mendix versions 5 and 4. You can submit all of these changes in the same pull request.

</div>

## 4 Writing a New How-To or Reference Guide Page<a name="Writing"></a>

To submit a new how-to or reference guide page to our documentation, follow these steps:

1. Save a copy of the [How-To Template](the-how-to-template-page) or [Reference Guide Page Template](the-reference-guide-page-template-page) locally in order to use it.
2. Follow the guidelines in the template for writing your document, and make sure the text aligns with our [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines).
3. Take screenshots for the new document and add them to a new sub-folder in the **attachments** folder. For more details on working with images, see [5 Naming New Files and Images](#NamingNewFilesandImages).
4. To merge your new document files, fork the GitHub repository, and add your files.
5. Create a pull request that specifies our **development** branch as the base. For more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/).

<div class="alert alert-info">

You may receive a response to your pull request asking for verification of specific issues. Don’t panic! We just want to make sure your documentation submission fits well with what we have. Do your best with the request so that we can incorporate your documentation in our repository.

</div>

## <a name="NamingNewFilesandImages"></a>5 Naming New Files and Images

When writing a new how-to or contributing to the documentation, make sure the files comply with our naming conventions:

 * Markdown file names should have the same name as the title of the page (for example, if the page is titled "Set Up Your Project," the filename should be ``setup-your-project.md``)
 * File names should always be lower-case, with a hyphen (`-`) between each word
  * Do not use spaces or any other symbols in the file name (for example, `&`), as these will not be accepted
 * Images should be named in the same way: lower-case with a dash between each word
  * Make sure the image files have names that make sense, so it's easier to find them later on
 * The following image file types are allowed: `.jpg`, `.png`, `.gif`

## 6 Related Content

* [Content Writing and Formatting Guidelines](content-writing-and-formatting-guidelines)
* [How-To Template](the-how-to-template-page)
* [Reference Guide Page Template](the-reference-guide-page-template-page)

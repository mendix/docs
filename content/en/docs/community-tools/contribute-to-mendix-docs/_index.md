---
title: "Contribute to Mendix Docs"
url: /community-tools/contribute-to-mendix-docs/
weight: 10
description: "Describes how to add and edit Mendix documentation as a community member."
aliases:
    - /developerportal/community-tools/contribute-to-mendix-docs/
#If moving or renaming this doc file, update the link in the site footer and links in the mendix/docs repo. See Mapping to Products for more details.
---

## Introduction

All Mendix documentation is open to the Mendix community, which means you can make changes and add to it in ways that you see necessary. Do you see a how-to that is inaccurate or a section of the *Studio Pro Guide* that needs to be updated? You can easily help us improve the documentation for the whole Mendix community!

All the Mendix documentation is stored in a [GitHub repository](https://github.com/mendix/docs). With a GitHub account, you can edit all existing documentation. You can also write a new how-to on an awesome topic of your choice and submit it.

To work on the documentation in GitHub, use Markdown. For details on this easy-to-use syntax, see the [GitHub Guide to Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

{{% alert color="info" %}}
All documentation contributions may be edited to conform to our internal style guide.
{{% /alert %}}

{{% alert color="info" %}}
**Quick guide to making a documentation change:**

1. Fork the **development** branch of the [mendix/docs](https://github.com/mendix/docs) repository.
2. Make your changes.
3. Create a pull request with our **development** branch as the base.

For details on how to fork a repo and create a pull request, watch [How to Contribute to Someone's GitHub Repository (Fork/Pull Request)](https://www.youtube.com/watch?v=yr6IzOGoMsQ).
{{% /alert %}}

This how-to teaches you how to do the following:

* Edit existing documentation in GitHub
* Edit existing documentation locally and build local previews
* Leave feedback on existing documentation
* Create new documentation

## Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a GitHub account (sign up at [Join GitHub](https://github.com/join))

You can create and edit files directly online within GitHub, or outside GitHub using your preferred writing and committing tools.

In the [Editing the Documentation and Previewing Changes Locally](#local-build) section below, you will also learn how to fork and clone the [mendix/docs](https://github.com/mendix/docs) repository, edit documentation locally, and build local previews.

## Editing the Documentation in GitHub {#editing}

To edit existing documentation in GitHub, follow these steps:

1. Click **View on GitHub** ({{< icon name="notes-paper-edit" >}}) in the upper-right corner of the specific Mendix documentation page that you want to work on.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/view-on-github.png">}}

    The file of this doc opens on GitHub.

2. Click **Edit this file** ({{< icon name="pencil" >}}) in the upper-right corner.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/edit-file.png">}}

    * If you already have a fork of the **development** branch of the [mendix/docs](https://github.com/mendix/docs) repository, the doc opens in a web editor.
    
    * If you do not have a fork yet, the following page opens and tells you need to fork the repository to propose changes. Click **Fork this repository**.

        {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/fork-this-repository.png">}}

        The doc opens in a web editor.

3. Make your changes in the editor. Make sure the changes align with our [Documentation Writing Guidelines](/developerportal/community-tools/documentation-guidelines/).

4. Click **Commit changes** in the upper-right corner above the editor. The **Propose changes** dialog box opens.

5. Enter a commit message, add more description if needed, and then click **Propose changes**.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/propose-changes.png" max-width=60% >}}

    The **Open a pull request** page opens. 
    
6. Make sure the pull request uses our **development** branch as the base.

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/base-development.png">}}

     For more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/) and [GitHub Standard Fork and Pull Request Workflow](https://gist.github.com/Chaser324/ce0505fbed06b947d962).

7. Add a title for the pull request.

    {{% alert color="warning" %}}If you need your pull request to be merged on a specific date (for example, for a specific release), specify that in the title of the pull request or as a comment. Otherwise, all pull requests are reviewed and merged under the assumption that the content can be published immediately.{{% /alert %}}

8. Make sure that **Allow edits by maintainers** is selected.
9. Click **Create pull request**.

The pull request is created. the Mendix Docs team will review the pull request as soon as possible. After the review and if there are no questions, the pull request will be published and you will be able to see the changes on the Mendix Docs site!

## Editing the Documentation and Previewing Changes Locally {#local-build}

If you want to work outside GitHub, Mendix recommends using the following tools to contribute to the Mendix documentation:

* For writing, editing, and previewing documentation – [Typora](https://typora.io/), [Visual Studio Code](https://code.visualstudio.com), or [Visual Studio Code in the browser](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) (accessible by pressing <kbd>Period</kbd> after opening your fork of the **mendix/docs** repository)
* For committing your documentation – [GitHub Desktop](https://desktop.github.com/), [Visual Studio Code](https://code.visualstudio.com), or [Sourcetree](https://www.sourcetreeapp.com/)

You can clone a local copy of a forked repository, make documentation changes, and build local previews. To do so, follow these steps:

1. Fork the **development** branch of the [mendix/docs](https://github.com/mendix/docs) repository in GitHub. For more information, see [Fork a repository in GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository).
2. Clone the forked repository using your preferred Git client, such as Visual Studio Code, GitHub Desktop, or Sourcetree:

    * Clone using Visual Studio Code:
        1. In Visual Studio Code, open the Command Palette (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>, or <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on a Mac).
        2. Search for `clone`.
        3. Select **Git: Clone**.
        4. Enter the URL of the forked repository (example URL: https://github.com/YOUR-USERNAME/docs) and select a destination directory.
    * Or clone using GitHub Desktop:
        1. In GitHub Desktop, choose the option **File** > **Clone Repository** > **URL**.
        2. Enter the URL of the forked repository and select a destination directory.
    * Or clone using Sourcetree:
        1. In Sourcetree, click **Clone**. 
        2. Enter the URL of the forked repository and select a destination directory.

     The repo is cloned into a folder called **docs** in the location you selected. You can rename it afterwards if you want to.

     {{% alert color="warning" %}}If you are running on Windows, avoid using a long directory path for the local directory; some files can reach the limits of Git’s file length. A base path of up to 50 characters works, but 64 characters is currently too long.{{% /alert %}}

3. Prepare the local repository with the Node package manager (npm) packages. You only need to do this once for this local repository. To do so, follow these steps:
    1. Download and install the [Node.js LTS version](https://nodejs.org/en/download/prebuilt-installer) (20.10 as of 2024). You do not need Chocolatey if that is offered.
    2. After the installation, make sure to verify the current Node.js version. You can do so by running the following command in a terminal: `node -v`.
    3. In the root directory of the local repository, run the following command in a terminal: `npm install`. 
    
        {{% alert color="warning" %}}If any new or changed files show up as uncommitted files, discard the changes. Do not commit them.{{% /alert %}}

4. Edit the documentation locally with your preferred editing tool (for example, open the repository folder with Visual Studio Code, find the file, and make changes). Remember to save your changes.
5. To run a local version of site, in the root directory of the local repository, run the following command in a terminal: `npm run build`. 
6. Once the site is built, you see a table indicating how many pages have been created:

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/table-of-built-pages.png" max-width=30% >}}

7. Wait until the server is set up before you can see the site:

    {{< figure src="/attachments/community-tools/contribute-to-mendix-docs/server-set-up.png" max-width=60% >}}

8. To see the local site preview, go to `http://localhost:1313/`.
9. Navigate in the left sidebar menu to the page that you just made changes to, and you can preview your changes locally! 

{{% alert color="info" %}}As long as the current local build is still running, each time after you save your changes, it will detect your changes and rebuild the site. Wait until the web server is available again, and you will be able to preview the changes you just saved!

If you do not see the changes you just saved, clear your browser cache, close and reopen the browser, and go to the local site again. Alternatively, in many browsers, such as Google Chrome, Firefox, and Microsoft Edge, you can perform a hard refresh on the current page by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>, or <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> on a Mac. This hard refresh ignores cached content.

If the above solutions do not work, stop the current running build in the terminal by pressing <kbd>Ctrl</kbd> + <kbd>C</kbd> and run the command `npm run build` again. {{% /alert %}}

## Leaving Feedback on the Documentation

If you find an issue with the documentation—whether it is a typo, a missing step, or a specific technical problem—we want to know about it so we can improve!

Click **Leave Feedback** ({{< icon name="message-bubble-typing" >}}) in the upper-right corner of the screen.

{{< figure src="/attachments/community-tools/contribute-to-mendix-docs/leave-feedback.png">}}

Then you will be brought to our GitHub repo's [Issues](https://github.com/mendix/docs/issues) page. Please include the following details in your feedback:

* The document you are working with
* A detailed description of what is wrong
* Details on what can be improved or what the fix is, if applicable
* Screenshots of your Mendix Platform usage, if applicable 

We look at all feedback and take it seriously, and we will be in contact about how to resolve it.

{{% alert color="info" %}}
You need to have a GitHub account to leave feedback. The good news is that, with that same GitHub account, you can also send a pull request with a direct [edit](#editing) of the documentation or even [new documentation](#new-documentation).
{{% /alert %}}

## Writing New Documentation {#new-documentation}

The sections below present the key steps in writing new documentation for Mendix.

### Using a Template

To submit a new how-to or *Studio Pro Guide* page to the Mendix documentation, start with a Mendix documentation template:

* To get the how-to template, right-click this link and save the file locally: [How-to Template](https://raw.githubusercontent.com/mendix/docs/development/templates/how-to-template.md)
* To get the reference page template, right-click this link and save the file locally: [Mendix Studio Pro Guide Page Template](https://raw.githubusercontent.com/mendix/docs/development/templates/reference-template.md)

### Guidelines and Conventions {#naming}

Follow these guidelines and conventions when writing:

* Reference and use our [Documentation Writing Guidelines](/developerportal/community-tools/documentation-guidelines/)
* Make sure the Markdown file name reflects the title of the page (for example, if the page is titled "Create Your App," the file name should be *create-your-app.md*)
* Name the Markdown and image files in lower-case with a hyphen (`-`) between each word, and do not use spaces or any other symbols in the file name (for example, `&`), as these will not be accepted
* When creating screenshots:
    * Make sure the resolution of your screen is 100% (or a multiple thereof) so that your images are sharp
    * Focus on the part of screen that contains the information you need so that the browser does not have to shrink the image when it displays it, and crop the image closely
    * Make sure the image file has a name that makes sense so it is easy to find it
    * Save the image as a *.png* (preferred), *.jpg*, or *.gif* file
    * Save the image file in a sub-folder in the [attachments](https://github.com/mendix/docs/tree/development/static/attachments) folder for the location of the document (this sub-folder should have the same name as the document file name you are working on)

### Submitting Your Work

When you are ready to submit your work, follow these guidelines:

* Commit new Markdown files via your preferred Git client or via the **Create new file** button in the [Mendix GitHub repo](https://github.com/mendix/docs) (where you can copy-paste your text)
* Commit new image files via your preferred Git client or via the **Upload files** button in the GitHub repo (where you can drag and drop your image files)

Finally, create a pull request that specifies the Mendix **development** branch as the base (for more information, see [Creating a Pull Request](https://help.github.com/articles/creating-a-pull-request/)).

{{% alert color="info" %}}
You may receive a response to your pull request asking for verification of specific issues. Do not panic! We just want to make sure your documentation submission fits well with what we have.
{{% /alert %}}

## Signing the Contributor License Agreement

The first time you make a contribution to the Mendix documentation (via a pull request), you need to sign the [Contributor License Agreement for mendix/docs](https://cla-assistant.io/mendix/docs).

To access the license agreement, go to the **Checks** section of the pull request's **Conversation** tab and click **Details** for **license/cla**.

This only needs to be done once.

## Read More

* [Documentation Writing Guidelines](/developerportal/community-tools/documentation-guidelines/)

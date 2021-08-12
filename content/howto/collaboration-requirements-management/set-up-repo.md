---
title: "Set Up a GitHub Repo to Publish a Marketplace Item"
category: "Collaboration"
menu_order: 30
tags: ["studio pro", "GitHub", "repository", "repo"]
---

## 1 Introduction

In this document, you will learn best practices in how to set up a GitHub repository to publish an Marketplace item. The repository will contain your development content and can be shared for others to contribute to an application or [Marketplace component](/appstore/general/share-app-store-content).

## 2 Prerequisites

Before starting with this how-to, make sure you have completed the following prerequisites:

* Have a [GitHub account](https://github.com/join)
* Familiarize yourself with the [Create a Repo](https://help.github.com/articles/create-a-repo) in the GitHub Docs

## 3 Creating Your Repo

First of all, your repo needs a name. You should use the same name that will be used for the item published in the [Mendix Marketplace](https://marketplace.mendix.com/). Use UpperCamelCase to replace the spaces (for example, *My first app* becomes *Mendix/MyFirstApp* on GitHub).

The description should say what the item does. This description can also be used in the Mendix Marketplace.

Add a *.gitignore* file to make sure you keep your repo clean.

## 4 Marketplace Widget Boilerplate

When making a new widget, use the [Widget Boilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate) from GitHub. This has everything you need to start developing a Mendix widget.

## 5 Releases

If you want to make a new release for the Mendix Marketplace, start with a new tag on the appropriate commit on the master or release branch. From these tags, you can create a [new release in GitHub](https://help.github.com/articles/creating-releases). In this release, set your release notes (which you can then use for the Marketplace release as well) and provide an official name. If you add the *.mpk* file as a binary file to the release tag, the Mendix Marketplace will automatically sync the *.mpk* to your new draft:

![](attachments/18448643/18580533.png)

You should link this to the upcoming Mendix Marketplace release by mentioning that release number in the description.

## 6 Read More

*   [Contributing to a GitHub repository](contribute-to-a-github-repository)
*   [Version Control](/refguide/version-control)
*   [Sharing the Development Database](sharing-the-development-database)

---
title: "Start Your Own GitHub Repository"
category: "Collaboration"
menu_order: 30
tags: ["studio pro"]
---

## 1 Introduction

In this how-to, you will learn how to set up a GitHub repository. The repository will contain your development content and can be shared for others to contribute to an application or [App Store component](/appstore/general/share-app-store-content).

## 2 Preparation

* Have a [GitHub account](https://github.com/join)
* Read the [Create a Repo](https://help.github.com/articles/create-a-repo) GitHub guide

## 3 Creating Your Repo

First of all, your repo needs a name. You should use the same name that will be used for the item published in the [Mendix App Store](https://appstore.home.mendix.com/index3.html). Use UpperCamelCase to replace the spaces (for example, *My first app* becomes *Mendix/MyFirstApp* on GitHub).

The description should say what the item does. This description can also be used in the Mendix App Store.

Add a *.gitignore* file to make sure you keep your repo clean.

## 4 App Store Widget Boilerplate

When making a new widget, use the [App Store Widget Boilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate) from GitHub. This has everything you need to get started developing a Mendix widget.

## 5 Releases

If you want to make a new release for the Mendix App Store, start with a new tag on the appropriate commit on the master or release branch. From these tags, you can create a [new release in GitHub](https://help.github.com/articles/creating-releases). In this release, set your release notes (which you can then use for the App Store release as well) and provide an official name. If you add the *.mpk* file as a binary file to the release tag, the Mendix App Store will automatically sync the *.mpk* to your new draft:

![](attachments/18448643/18580533.png)

You should link this to the upcoming Mendix App Store release by mentioning that release number in the description.

## 6 Read More

*   [Contributing to a GitHub repository](contribute-to-a-github-repository)
*   [Version Control](/refguide/version-control)
*   [Sharing the Development Database](sharing-the-development-database)

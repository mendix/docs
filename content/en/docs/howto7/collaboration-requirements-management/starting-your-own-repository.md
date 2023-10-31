---
title: "Start Your Own Repository"
url: /howto7/collaboration-requirements-management/starting-your-own-repository/
category: "Collaboration and Requirements Management"
weight: 30
tags: []
---

## 1 Introduction

In this how-to you will learn how to set up a GitHub repository. The repository will contain your development content and can be shared with others, in order to contribute to the application.

## 2 Preparation

* Make sure you have a [GitHub account](https://github.com/join)
* Make sure you have a [Mendix account](https://developers.mendix.com/start-for-free/)
* Read the [GitHub - Create a repo](https://help.github.com/articles/create-a-repo) guide

## 3 Creating Your Repo

First of all, your repo needs a name. We advise you use the same name that it is/will be published under in the Marketplace, and then using UpperCamelCase to replace spaces. For example: "My first app" would be "Mendix/MyFirstApp" on GitHub.

Same as with the description. It should say what the App does, so it would be easiest to keep this in line with the App on the Marketplace.

(Add the Mendix .gitignore to make sure you keep your repo clean.)

## 4 Folder Structure

When making a new widget, Mendix suggests you use the [App Store Widget Boilerplate](https://github.com/mendix/AppStoreWidgetBoilerplate), available on GitHub.

It's a set-up with everything you need to get started developing a Mendix widget.

## 5 Releases

If you want to make a new release for the Marketplace, we advise you start off with a new tag on the appropriate commit on the production or release branch. From these tags, you can create a [new Release in GitHub](https://help.github.com/articles/creating-releases). In this release you can set your release notes (which you can then use for the Marketplace release as well) and give it a more official name. If you add the .mpk as a binary file to the release tag (see image blow) the Marketplace will automatically sync the .mpk to your new draft. Mendix suggests also linking this to the upcoming Marketplace release by mentioning that release number in the description.

{{< figure src="/attachments/howto7/collaboration-requirements-management/starting-your-own-repository/18580533.png" >}}

## 6 Read More

* [Contributing to a GitHub repository](/howto7/collaboration-requirements-management/contribute-to-a-github-repository/)
* [Version Control](/refguide7/version-control/)
* [Sharing the Development Database](/howto7/collaboration-requirements-management/sharing-the-development-database/)

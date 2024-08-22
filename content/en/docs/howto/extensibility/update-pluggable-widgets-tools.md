---
title: "Update Pluggable Widgets Tools"
url: /howto/extensibility/update-pluggable-widgets-tools/
description: "Follow this guide to update the Pluggable Widgets Tools package used by your pluggable widget to a newer version.
"
weight: 10
---

## Introduction

Follow this guide to update the Pluggable Widgets Tools package used by your pluggable widget to a newer version.

## Prerequisites

* Install the latest LTS version of [Node.js](https://nodejs.org)
* Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))

## Updating a Pluggable Widgets Tools Package

To update a specific widget's Pluggable Widget Tools package, run the following commands at the root of the widget's directory:

1. Open the widget with the IDE of your choice.
1. Run `npm install --save-dev @mendix/pluggable-widgets-tools@latest` to get the latest version.
   * You can use `npm install --save-dev @mendix/pluggable-widgets-tools@YOUR_VERSION` if you are targeting a specific version.
1. When the installation finishes, run `npm run start`.
   * It might prompt you about handling the old dependencies. You should enter `Y`(es). It will take some time before the update finishes.

{{% alert color="info" %}}
If you see type or package errors with TypeScript, you might need to close and re-open the widget's project after update finishes.
{{% /alert %}}

## Read More

* [Build a Pluggable Native Widget
](/howto/extensibility/build-native-widget/)
* [Build Pluggable Web Widgets](/howto/extensibility/pluggable-widgets/)

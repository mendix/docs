---
title: "Update Pluggable Widgets Tools"
url: /howto/extensibility/update-pluggable-widgets-tools/
category: "Extensibility"
description: "Describes how to update the pluggable widgets tools for a pluggable widget."
weight: 10
tags: ["widget", "pluggable", "JavaScript", "API", "JavaScript-API"]
---

## 1 Introduction

You can update the Pluggable Widgets Tools package used by your pluggable widget to a newer version following this guide.

## 2 Prerequisites

- Install the latest LTS version of [Node.js](https://nodejs.org)
- Install an integrated development environment (IDE) of your choice (Mendix recommends [Microsoft Visual Studio Code](https://code.visualstudio.com/))

## 3 Updating the Pluggable Widgets Tools Package for a Widget

All the commands listed here should be run at the root of the widget's directory:

1. Open the widget with the IDE of your choice.
2. Run `npm install --save-dev @mendix/pluggable-widgets-tools` to get the latest version.
   - You can use `npm install --save-dev @mendix/pluggable-widgets-tools@YOUR_VERSION` if you are targeting a specific version.
3. When the installation finishes, run `npm run start`.
   - It might prompt for handling the old dependencies. You can enter `Y`(es). It will take some time before the update finishes.

{{% alert color="info" %}}
If you see type or package related errors with TypeScript, you might need to close and re-open the widget's project after update finishes.
{{% /alert %}}

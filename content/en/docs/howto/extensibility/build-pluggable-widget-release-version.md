---
title: "Build a Pluggable Widget (Release Version)"
linktitle: "Build a Pluggable Widget (Release Version)"
url: /howto/extensibility/build-a-release-version-of-a-pluggable-widget/
weight: 45
description: "Describes how to create a release build of a pluggable widget that you can bundle with a module or publish to the Marketplace."
---

## Introduction

While you develop a pluggable widget, you will regularly use `npm start` or `npm run build`. These commands create a development build, which is meant for testing. Before you bundle your widget with a module or publish it to the Mendix Marketplace, you need to create a release build.

{{% alert color="warning" %}}
Do not distribute a development build. It includes source maps and unminified code, which makes the widget much larger and slower to load. Always use a release build for modules and Marketplace content.
{{% /alert %}}

This document explains how a release build differs from a development build, how to create a release build, and how to find and test your results. This document applies to both web and native pluggable widgets.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a pluggable widget created with the Pluggable Widget Generator. For more information, see [Build a Pluggable Web Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one/) or [Build a Pluggable Native Widget: Part 2](/howto/extensibility/build-native-widget/).

## Differences Between a Development Build and a Release Build

| | Development build | Release build |
| --- | --- | --- |
| Source maps | Included | Not included |
| Code | Not minified | Minified and transpiled |
| Third-party dependency list | Not included | Included in the *.mpk* file as *dependencies.txt* and *dependencies.json* |

## Creating a Release Build

To create a release build, run `npm run release` in the root directory of your widget. This command first checks your code for formatting and linting errors, and only creates the release build when no errors are found.

If errors are reported, fix them and run `npm run release` again.

## Finding the Release Build

The release build creates an *.mpk* file in the **dist** folder of your widget, in a subfolder named after the `version` in **package.json**:

```text
dist/{version}/{packagePath}.{widgetName}.mpk
```

Use this *.mpk* file to publish your widget to the Marketplace or to include it in your module.

The release build also copies the *.mpk* file to the **widgets** folder of your Mendix app, the same way a development build does.

{{% alert color="info" %}}
Copying the release build to your app requires Pluggable Widgets Tools 11.16.1 or above. If you are using an earlier version of Pluggable Widget Tools, you must copy the *.mpk* file to the **widgets** folder of your app manually. For more information on updating, see [Update Pluggable Widgets Tools](/howto/extensibility/update-pluggable-widgets-tools/).
{{% /alert %}}

## Testing the Release Build

To test the release build in your app, do the following:

1. In Studio Pro, synchronize the app directory by pressing <kbd>F4</kbd>, or select **App** > **Synchronize App Directory**.
1. Run your app and verify that the widget works as expected.

## Read More

* [Build a Pluggable Web Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one/)
* [Build a Pluggable Native Widget](/howto/extensibility/build-native-widget/)
* [Update Pluggable Widgets Tools](/howto/extensibility/update-pluggable-widgets-tools/)
* [Pluggable Widgets API](/apidocs-mxsdk/apidocs/pluggable-widgets/)

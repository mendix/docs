---
title: "Solve Load and Import Errors"
url: /refguide/solving-load-and-import-errors/
weight: 11
description: "Describes how to solve load and import errors that occur when opening an app in Studio Pro."
aliases:
    - /howto/solving-load-and-import-errors.html/
    - /howto/solving-load-and-import-errors/
    - /howto/monitoring-troubleshooting/solving-load-and-import-errors/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document describes how to solve problems that can occur when opening an app in Studio Pro.

One possible cause of errors that prevent loading is using the [Mendix Model SDK](/apidocs-mxsdk/mxsdk/) to create or edit the app. The Mendix Model SDK can edit your app so its format becomes invalid, which prevents Studio Pro from opening it. When this happens, the following message appears:

{{< figure src="/attachments/refguide/modeling/menus/file-menu/solving-load-and-import-errors/18580055.png" alt="" class="no-border" >}}

This document explains how to determine the origin of these errors and possible ways to solve them.

## Determining the Actual Problems

Click **Details** to show the actual errors that occurred while loading your app:

{{< figure src="/attachments/refguide/modeling/menus/file-menu/solving-load-and-import-errors/18580052.png" alt="" class="no-border" >}}

These detailed messages tell you the following:

* The module and document where the error occurred (for example, the domain model of the module *Transportation*)
* The model element that caused the error (for example, the entity *Vehicle*)
* What the actual problem is (for example, an index that does not contain any attributes, which is not permitted)

## Determining the Origin of Your App

Before trying to solve the problems, discover the origin of the app because someone else may have introduced the errors. Go through the following possibilities:

### Is This a Team Server App?

If your app is a [Team Server](/developerportal/repository/team-server/) app and you just did a [download or update](/refguide/using-version-control-in-studio-pro/) from the server, the problem may have been added in a revision that was recently committed to the Team Server. You can check who made the most recent commit on the [Team Server](/developerportal/repository/team-server/) page of your app in [Apps](https://sprintr.home.mendix.com).

If the latest change on your branch line was committed by someone other than yourself, please inform the person about the problem.

### Did You Obtain the Model from Someone Else?

If you received the model from someone else (for example, as an app package (*.mpk*) file), they may have created the model with the Mendix Model SDK. Inform them about the problem and ask them for a solution.

### Did You Create the App Yourself?

If you created or edited the app yourself, read the next section to find out how to solve the problem.

## Solving the Problems

The problems described in this document cannot be solved by editing the app in Studio Pro, because the app file format is invalid in a way that prevents Studio Pro from reading it. This also means the problems were probably not caused by working on the app with Studio Pro.

The most likely cause for these kinds of errors is a faulty script that was run on the Mendix Model SDK. If this is the case, you need to use the SDK to fix the problems. If you created or edited the model yourself using the Mendix Model SDK, carefully read the messages in the error dialog and locate the relevant part of your SDK code. Then change your SDK script to make the app valid again. For information about constructing or altering models with SDK scripts, see the [Mendix Model SDK documentation](/apidocs-mxsdk/mxsdk/).

## Read More

* [Clearing Warning Messages in Mendix](/howto/monitoring-troubleshooting/clear-warning-messages/)
* [Debugging Java Actions](/howto/monitoring-troubleshooting/debug-java-actions/)
* [Debugging Java actions remotely](/howto/monitoring-troubleshooting/debug-java-actions-remotely/)
* [Debugging Microflows and Nanoflows](/refguide/debug-microflows-and-nanoflows/)
* [Debugging Microflows Remotely](/refguide/debug-microflows-remotely/)
* [Finding the Root Cause of Runtime Errors](/howto/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
* [Log Levels](/howto/monitoring-troubleshooting/log-levels/)
* [Monitoring Mendix using JMX](/howto/monitoring-troubleshooting/monitoring-mendix-using-jmx/)

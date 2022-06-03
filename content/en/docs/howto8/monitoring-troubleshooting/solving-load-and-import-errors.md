---
title: "Solve Load & Import Errors"
url: /howto8/monitoring-troubleshooting/solving-load-and-import-errors/
category: "Monitoring & Troubleshooting"
weight: 11
tags: ["monitoring", "troubleshooting", "load", "import", "error"]
aliases:
    - /howto8/solving-load-and-import-errors.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

This how-to will help you to solve problems that may occur when opening a project in Mendix Studio Pro.

One possible cause of errors that prevent loading is the usage of the [Mendix Model SDK](/apidocs-mxsdk/mxsdk/) for creating or editing the project. With the Mendix Model SDK it's possible to edit your project in such a way that its format becomes invalid, and in the process preventing Studio Pro from opening it. When this happens the following message is shown:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/solving-load-and-import-errors/18580055.png" >}}

Read on to find out how to determine the origin of these errors, and possible ways to solve them.

## 2 Determining the Actual Problems

Click the **Details >>** button to show the actual errors that occurred while loading your project:

{{< figure src="/attachments/howto8/monitoring-troubleshooting/solving-load-and-import-errors/18580052.png" >}}

These detailed messages tell you the following:

* The module and document in which the error occurred (for example, the domain model of the module 'Transportation').
* The model element that caused the error (for example, the entity 'Vehicle').
* What the actual problem is (for example, there's an index that doesn't contain any attributes, which is not permitted).

## 3 Determining the Origin of Your Project

Before trying to solve the problems, it's useful to discover the origin of the project, because the errors may be introduced by someone else. Go through the following possibilities:

### 3.1 Is This a Team Server Project?

If your project is a [Team Server](/developerportal/collaborate/team-server/) project, and you just did a [download or update](/refguide8/using-version-control-in-studio-pro/) from the server, the problem may have been added in a revision that was recently committed to the Team Server. You can check who made the most recent commit via the [Team Server](/developerportal/collaborate/team-server/) menu item in the [Developer Portal](https://sprintr.home.mendix.com).

If the latest change on your branch line was committed by someone other than yourself, please inform the person about the problem.

### 3.2 Did You Obtain the Model from Someone Else?

If you received the model from someone else, for example as a [project package](/howto8/integration/importing-and-exporting-objects/) (.mpk) file, then it's possible they created the model with the Mendix Model SDK. Please inform the person about the problem and ask them for a solution.

### 3.3 Did You Create the Project Yourself?

If you created or edited the project yourself, you will want to read the next section of this how-to to find out what you can do to solve the problem.

## 4 Solving the Problems

The problems described in this how-to can't be solved by editing the project in Mendix Studio Pro, because the project's file format is invalid in a way that prevents Studio Pro from reading it. This also means the problems are probably not caused by working on the project with Studio Pro.

The most likely cause for these kinds of errors is a faulty script that was run on the Mendix Model SDK and, if this is the case, means you will also need to use the SDK to fix the problems. If you created or edited the model yourself using the Mendix Model SDK, you will probably know what to do to solve the problems by carefully reading the messages in the error dialog, and locating the relevant part of you SDK code, after which you can change your SDK script to make the project valid again. Be sure to check the [Mendix Model SDK documentation](/apidocs-mxsdk/mxsdk/) if you need information about constructing or altering models with SDK scripts.

## 5 Read More

*   [Clearing Warning Messages in Mendix](/howto8/monitoring-troubleshooting/clear-warning-messages/)
*   [Debug a Hybrid Mobile Application](/howto8/monitoring-troubleshooting/debug-a-hybrid-mobile-application/)
*   [Debugging Java Actions](/howto8/monitoring-troubleshooting/debug-java-actions/)
*   [Debugging Java actions remotely](/howto8/monitoring-troubleshooting/debug-java-actions-remotely/)
*   [Debugging Microflows](/howto8/monitoring-troubleshooting/debug-microflows/)
*   [Debugging Microflows Remotely](/howto8/monitoring-troubleshooting/debug-microflows-remotely/)
*   [Finding the Root Cause of Runtime Errors](/howto8/monitoring-troubleshooting/finding-the-root-cause-of-runtime-errors/)
*   [Log Levels](/howto8/monitoring-troubleshooting/log-levels/)
*   [Monitoring Mendix using JMX](/howto8/monitoring-troubleshooting/monitoring-mendix-using-jmx/)

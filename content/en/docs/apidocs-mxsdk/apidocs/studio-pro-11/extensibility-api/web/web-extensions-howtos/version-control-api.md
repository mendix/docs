---
title: "Show Version Control Information Using Web API"
linktitle: "Show Version Control Information"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/version-control-api/
---

## Introduction

This how-to describes how to display version control information in Studio Pro. The extension adds a menu item that, when clicked, shows details about the current version control system, branch, and last commit.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one. 
* Make sure you are familiar with creating menus, as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Showing Version Control Information

The extension creates a menu item named **Current version control system**. When the menu is activated, it fetches version control details (system type, branch, last commit) and displays them in a message box.

### Set Up the Extension Structure 

In the example below, you create one menu item that will show version control details in a message box.

It performs the following actions:

1. Creates a menu item named **Current version control system**
2. Listens for when the menu item is clicked
3. When clicked, it retrieves the version control information which includes:
   * The type of version control system (for example, Git)
   * Current branch name
   * Last commit details (SHA, author, message, and date)
4. Displays this information in a message box

Replace your `src/main/index.ts` file with the following:


```typescript
import { IComponent, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
        const menuId = "version-control-menu";

        await studioPro.ui.extensionsMenu.add({
            menuId,
            caption: "Current version control system"
        });

        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            async (args) => {
                if (args.menuId === menuId) {
                    const versionControlApi = studioPro.ui.versionControl;
                    const messageBoxApi = studioPro.ui.messageBoxes;
                    const versionControlSystemInfo = await versionControlApi.getVersionControlInfo();

                    if (versionControlSystemInfo == null) {
                        messageBoxApi.show("info", "This app is not version controlled");
                        return;
                    }

                    let message = `The system is ${versionControlSystemInfo.versionControlSystem}. Branch: ${versionControlSystemInfo.branch}.`;

                    if (versionControlSystemInfo.lastCommit == null) {
                        message += "\n\nLast Commit: No commit information available.";
                    } else {
                        message += "\n\nLast Commit:\n";
                        message += `SHA: ${versionControlSystemInfo.lastCommit.sha}\n`;
                        message += `Author: ${versionControlSystemInfo.lastCommit.author}\n`;
                        message += `Message: ${versionControlSystemInfo.lastCommit.message}\n`;
                        message += `Date: ${versionControlSystemInfo.lastCommit.date}`;
                    }

                    messageBoxApi.show("info", message);
                }
            }
        );
    }
}
```

## Extensibility Feedback

If you would like to provide us with additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.

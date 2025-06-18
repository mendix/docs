---
title: "Get Started with the Web Extensibility API"
linktitle: "Get Started"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/
weight: 2
---

## Introduction

Studio Pro extensions can be developed using typescript and use standard web development technologies to extend the Studio Pro development environment. This guide shows you how to set up a basic development environment for building an extension using the web extensibility API.

For more information, see the [Mendix Studio Pro Web Extensibility API](http://apidocs.rnd.mendix.com/11/extensions-api/index.html).

### Prerequisites

You will need the following prerequisites:

* Mendix Studio Pro version 10.21.0 or higher [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro). 
* Install the latest Studio Pro version from the Mendix [Marketplace](https://marketplace.mendix.com/link/studiopro/).
* A development IDE to develop your extensions. We recommend using [Visual Studio Code](https://code.visualstudio.com/).
* Install the latest version 22.x.x of Node: https://nodejs.org/en/download.

{{% alert color="info" %}}
Extensions can be built on any operating system as the underlying framework is cross-platform.
{{% /alert %}}

{{% alert color="info" %}}
Please note that extension development is only possible by starting Studio Pro with the `--enable-extension-development` feature flag.
{{% /alert %}}

## Creating Your First Extension

This section will show you how to build and test an extension.

### Create a Test App

1. Create a new app using the **Blank Web App** template.
1. Install the [Studio Pro Web Extension Template](https://github.com/mendix/web-extension-template) from GitHub using the instructions in the repository.

### Building the Extension

From within Visual Studio Code:

1. Select **File** -> **Open Folder**
1. Navigate to the folder you just extracted your extension source code to.
1. Click **Select Folder**.
1. Select **Yes** if you are asked whether you trust this folder.
1. Now open a Terminal by selecting **Terminal** -> **New Terminal** from the top menu.
1. From the Terminal type `npm install`. This installs all dependencies for the extension
1. Build your extension using the command `npm run build` in the terminal.

Once completed you should now have a build artifact which we can deploy to your Mendix app.

You can explore the extension a bit more to understand what it will do when it is installed. Do the following:

1. From the Explorer window navigate to `src/main/index.ts` select it to open the file.

    Reading through the source code you should see the following:

1. Line 7 adds a menu

    ```typescript
    await studioPro.ui.extensionsMenu.add({
    menuId: "myextension.MainMenu",
    caption: "MyExtension Menu",
    subMenus: [{ menuId: "myextension.ShowTabMenuItem", caption: "Show tab" }],
    });
    ```

1. Line 14 opens a tab

    ```typescript
    // Open a tab when the menu item is clicked
    studioPro.ui.extensionsMenu.addEventListener("menuItemActivated", (args) => {
      if (args.menuId === "myextension.ShowTabMenuItem") {
        studioPro.ui.tabs.open(
          {
            title: "My Extension Tab",
          },
          {
            componentName: "extension/myextension",
            uiEntrypoint: "tab",
          }
        );
      }
    });
    ```

When you install the extension you will see a new menu item within Studio Pro.

### Testing the Extension

To test the extension, do the following in File Explorer.

1. Navigate to the folder where you extracted the extension source code.
1. Open the `dist` folder.
1. Copy the `myextension` folder.
1. Navigate to the folder where you created your app.
1. Create a new folder called `extensions`.
1. Paste the `myextension` folder into the `extensions` folder you just created.

    The extension files have now been added to the app.
    
1. Start Studio Pro with the following command line parameter to tell it to use the extensions in the folder.

    `--enable-extension-development`

    This flag instructs Studio Pro to do the following:

    * Load extensions from the `extensions` folder
    * Enable web debugging tools which will be useful when developing your extension

1. In Studio Pro, open the new app. 

    You will see a new `Extensions` item in the top menu.

{{% alert color="warning" %}}
Extension names used in place of `myextension` must only contain digits, letters, dashes, and underscores. Extensions with an invalid name will not be loaded and will display an error.
{{% /alert %}}

## Conclusion

Using this guide we have:

* Created a new app
* Downloaded a new extension from GitHub
* Built the extension and installed it in our app
* Tested our extension from within Studio Pro.

## Extensibility Feedback

If you would like to provide us with some additional feedback you can complete a small [Survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is much appreciated.

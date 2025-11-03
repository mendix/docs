---
title: "Get Started with the Web Extensibility API"
linktitle: "Get Started"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/
weight: 2
---

## Introduction

Studio Pro extensions can be developed using TypeScript and use standard web development technologies to extend the Studio Pro development environment. This document describes how to set up a basic development environment for building an extension using the web extensibility API.

For more detailed information, see the [Mendix Studio Pro Web Extensibility API reference documentation](http://apidocs.rnd.mendix.com/11/extensions-api/index.html).

### Prerequisites

You will need the following prerequisites:

* [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro) version 11.2.0 or higher. 
* A development IDE to develop your extensions. Mendix recommends using [Visual Studio Code](https://code.visualstudio.com/).
* The latest version 22.x.x of Node: https://nodejs.org/en/download.

{{% alert color="info" %}}
Extensions can be built on any operating system, as the underlying framework is cross-platform.
{{% /alert %}}

{{% alert color="info" %}}
Extension development is only possible by starting Studio Pro with the `--enable-extension-development` feature flag.
{{% /alert %}}

## Creating Your First Extension

This section will show you how to build and test an extension.

### Create a Test App

Create a new app using the **Blank Web App** template.

You can also open the application directory containing the application `.mpr` file by clicking the **App** menu > **Show App Directory in Explorer** (or **Show App Directory in Finder**) in Studio Pro.

### Creating the Extension

To accelerate your extension development, Mendix provides an extension generator that creates a customizable sample extension.

To use the generator, navigate to your desired source code directory and run the command `npm create @mendix/extension`. You may be prompted by `npm` to grant permission to install the generator. After installation, you will be guided through a series of questions to help configure your extension.

You will be asked the following:

* Select the programming language (TypeScript is used in the tutorials)
* Specify the extension name
* Choose if you will use React for the extension’s UI
  
The next two questions, while optional, are highly recommended, as they enable direct debugging and deployment from Visual Studio Code:

* Specify the path to the Studio Pro executable (this allows Visual Studio Code to automatically attach to Studio Pro for debugging)
* Specify the location of the application `.mpr` package (this allows for automatic deployment of your extension build to your app)

 The last question allows you to select the Studio Pro version you are targeting; Mendix recommends choosing version 11.

{{% alert color="info" %}}
On a Windows machine, the Studio Pro executable is typically located at `C:\Program Files\Mendix\<version>\modeler\studiopro.exe`. To find the exact path, follow these steps:

1. Launch Studio Pro.
2. Right-click its taskbar icon, then right-click `Mendix Studio Pro 11.2.0` (your version may differ).
3. Select **Properties**. The **Target** field displays the executable path.
{{% /alert %}}

Once you have completed the setup, a new directory named after your extension will be created,
containing the source code of the extension.

### Exploring the Created Extension

In the following example, the name of your extension is `myextension` and you are exploring it using Visual Studio Code.

Before you begin, your extension will have to get an instance of the Studio Pro API. to do this, from the Explorer window, navigate to `src/main/index.ts` and select it to open the file.

In the source code, you should see the following:

1. Line 6 gets an instance of the Studio Pro API by calling `getStudioProApi`.
   
    ```typescript
    export const component: IComponent = {
        async loaded(componentContext) {
            const studioPro = getStudioProApi(componentContext);

2. Line 7 adds a menu:

    ```typescript
    await studioPro.ui.extensionsMenu.add({
        menuId: "myextension.MainMenu",
        caption: "MyExtension Menu",
        subMenus: [
            { menuId: "myextension.ShowMenu", caption: "Show tab" },
        ],
    });
    ```

3. Line 16 opens a tab.

    ```typescript
    // Open a tab when the menu item is clicked
    studioPro.ui.extensionsMenu.addEventListener(
        "menuItemActivated",
        (args) => {
            if (args.menuId === "myextension.ShowMenu") {
                studioPro.ui.tabs.open(
                    {
                        title: "MyExtension Tab"
                    },
                    {
                        componentName: "extension/myextension",
                        uiEntrypoint: "tab",
                    }
                );
            }
        }
    );
    ```

4. If you navigate to `build-extension.mjs`, you can choose the directory to which the extension will be installed to after being built by changing line 6:

     ```typescript
     const appDir = "C:\\TestApps\\AppTestExtensions"
     ```

5. The file `.vscode\launch.json` specifies the launch configuration and enables debugging. The following lines specify how Studio Pro will be run:
     
     ```json
     …
     "runtimeExecutable": "C:\\Program Files\\Mendix\\11.2.0\\modeler\\studiopro.exe",
     "runtimeArgs": ["C:\\TestApps\\AppTestExtensions\\AppTestExtensions.mpr", "--enable-extension-development", "--enable-web-extensions"],
     …
     ```

When you install the extension, you will see a new menu item within Studio Pro.

### Building, Installing, and Debugging the Extension

The following steps occur within Visual Studio Code:

1. Select **File** > **Open Folder**.
2. Navigate to the folder where you created your extension.
3. Click **Select Folder**.
4. Select **Yes** if you are asked whether you trust this folder.
5. Open a Terminal from the top menu by clicking **Terminal** > **New Terminal**.
6. From the Terminal, type `npm install`. This installs all dependencies for the extension.
7. Build your extension using the command `npm run build` in the terminal. If you provided the path to `.mpr` file in the previous step, this will install the extension into the application directory.

If the last two questions of the extension generator were answered and you have built and installed the extension, you can debug it by following the steps below:

1. Open the extension source code in Visual Studio Code and set breakpoints.
2. Select **Run and Debug** from the side panel.
3. Click the play button on the top of the panel (or press F5).

This will run Studio Pro in extension development mode and open the configured application. You will see a new `Extensions` item in the top menu.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.

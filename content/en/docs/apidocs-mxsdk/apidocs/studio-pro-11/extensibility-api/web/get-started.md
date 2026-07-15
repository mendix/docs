---
title: "Get Started with the Web Extensibility API"
linktitle: "Get Started"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/
weight: 2
---

## Introduction

Studio Pro extensions can be developed using TypeScript and standard web development technologies to extend the Studio Pro development environment. This document describes how to set up a basic development environment for building an extension using the Web Extensibility API.

For more detailed information, see the [Mendix Studio Pro Web Extensibility API reference documentation](http://apidocs.rnd.mendix.com/11/extensions-api/index.html).

### Prerequisites

You need the following prerequisites:

* [Mendix Studio Pro](https://marketplace.mendix.com/link/studiopro) version 11.2.0 or above
* A development IDE to develop your extensions; Mendix recommends using [Visual Studio Code](https://code.visualstudio.com/)
* The latest version 22.x.x of Node from [nodejs.org](https://nodejs.org/en/download/)

{{% alert color="info" %}}
Extensions can be built on any operating system, as the underlying framework is cross-platform.
{{% /alert %}}

{{% alert color="info" %}}
Extension development is only possible by enabling the [Extension Development](/refguide/preferences-dialog/#extension-development) setting in your app's Preferences, or by starting Studio Pro with the `--enable-extension-development` feature flag.
{{% /alert %}}

## Creating Your First Extension

This section shows you how to build and test an extension.

### Create a Test App

Create a new app using the **Blank Web App** template.

You can also open the app directory containing the app `.mpr` file by clicking **App** > **Show App Directory in Explorer** (or **Show App Directory in Finder**) in Studio Pro.

### Creating the Extension

To accelerate your extension development, Mendix provides an extension generator that creates a customizable sample extension.

To use the generator, navigate to your desired source code directory and run the command `npm create @mendix/extension@latest`. You may be prompted by `npm` to grant permission to install the generator. After installation, you will be guided through a series of questions to help configure your extension.

{{% alert color="info" %}}
Using `@latest` ensures you get the most recent version of the generator. Each generator release targets a specific Studio Pro version and its available APIs, so always use the latest template to make sure you have access to the full set of APIs for your target version. Some how-to guides in this documentation may not work correctly with older generator versions.
{{% /alert %}}

The generator asks the following questions:

* Select the programming language (TypeScript is used in the tutorials)
* Specify the extension name
* Choose if you will use React for the extension’s UI
  
The next two questions are optional but highly recommended, as they enable direct debugging and deployment from Visual Studio Code:

* Specify the path to the Studio Pro executable (this allows Visual Studio Code to automatically attach to Studio Pro for debugging)
* Specify the location of the app `.mpr` package (this allows automatic deployment of your extension build to your app)

 The last question allows you to select the Studio Pro version you are targeting. Mendix recommends choosing version 11.

{{% alert color="info" %}}
On a Windows machine, the Studio Pro executable is typically located at `C:\Program Files\Mendix\<version>\modeler\studiopro.exe`. To find the exact path, follow these steps:

1. Launch Studio Pro.
2. Right-click its taskbar icon, then right-click `Mendix Studio Pro 11.2.0` (your version may differ).
3. Select **Properties**. The **Target** field displays the executable path.
{{% /alert %}}

Once you complete the setup, a new directory named after your extension is created, containing the source code of the extension.

### Exploring the Created Extension

In the following example, the name of your extension is `myextension` and you are exploring it using Visual Studio Code.

Before you begin, your extension must get an instance of the Studio Pro API. To do this, from the Explorer window, navigate to `src/main/index.ts` and select it to open the file.

In the source code, you should see the following:

1. You get an instance of the Studio Pro API by calling `getStudioProApi`.
   
    ```typescript
    export const component: IComponent = {
        async loaded(componentContext) {
            const studioPro = getStudioProApi(componentContext);

2. A menu is added that opens a tab:

    ```typescript
    await studioPro.ui.extensionsMenu.add({
        menuId: "myextension.MainMenu",
        caption: "MyExtension Menu",
        subMenus: [
            {
                menuId: "myextension.ShowMenu",
                caption: "Show tab",
                // Open a tab when the menu item is clicked
                action: async () => {
                    await studioPro.ui.tabs.open(
                        {
                            title: "MyExtension tab"
                        },
                        {
                            componentName: "extension/myextension",
                            uiEntrypoint: "tab"
                        }
                    )
                }
            }
        ],
    });
    ```

3. If you navigate to `build-extension.mjs`, you can choose the directory where the extension will be installed after being built by changing line 6:

     ```typescript
     const appDir = "C:\\TestApps\\AppTestExtensions"
     ```

4. The file `.vscode\launch.json` specifies the launch configuration and enables debugging. The following lines specify how Studio Pro will run:
     
     ```json
     …
     "runtimeExecutable": "C:\\Program Files\\Mendix\\11.2.0\\modeler\\studiopro.exe",
     "runtimeArgs": ["C:\\TestApps\\AppTestExtensions\\AppTestExtensions.mpr", "--enable-extension-development", "--enable-web-extensions"],
     …
     ```

When you install the extension, you see a new menu item in Studio Pro.

### Understanding Generated Files

The generator creates a project with the following structure. Some files are standardized and can be left untouched, while others must be updated before you build or debug.

#### Configuration Files

* **`package.json`** – Defines project dependencies and scripts. Use `npm run build` to build once, or `npm run build:dev` to build and watch for changes. Edit this file only when you need to add packages.
* **`tsconfig.json`** – Contains TypeScript compiler settings.
* **`build.helpers.mjs`** – Provides shared esbuild utilities used by `build-extension.mjs`. You do not need to edit this file.

#### Build and Deployment

* **`build-extension.mjs`** – The build entry point that wires everything together using esbuild. It defines the output directory (`outDir`), the source entry points (`src/main/index.ts` → `main`, `src/ui/index.tsx` → `tab`), and supports a `--watch` flag for live rebuilding. Set `appDir` to the absolute path of your Mendix app folder so the built extension is automatically copied there after each build. You can provide all paths while setting up the template through the terminal prompts. If you update an entry point name or add a new one, update it in this file as well.

{{% alert color="info" %}}
The `dist/` folder is generated by `npm run build` and does not exist until you build for the first time. Never edit files inside `dist/` directly, as your changes will be overwritten on the next build.
{{% /alert %}}

#### Source Files

* **`src/manifest.json`** – Tells Studio Pro how to load your extension, including which compiled JS files serve as entry points (`main.js`, `tab.js`) and what permissions the extension requires. Update this file if you rename your entry point files. If you add or rename an entry point here, also update it in `build-extension.mjs`.
* **`src/main/index.ts`** – Contains the extension's main logic, which runs inside Studio Pro. It retrieves the Studio Pro API via `getStudioProApi`, registers a menu item under **Extensions** in the top menu bar, and opens a tab that renders the UI component when clicked. This is the primary file you will edit. If you rename this file, update the corresponding entry point in `build-extension.mjs`.
* **`src/ui/index.tsx`** – The React component rendered inside the Studio Pro tab. In the template, it renders a simple heading and paragraph that you should replace with your own UI. If you rename this file, update the entry point in `build-extension.mjs` and the `uiEntrypoint` value passed to `studioPro.ui.tabs.open(...)` in `src/main/index.ts`. You can delete this file entirely if you also remove both of those references.

#### Other Files

* **`.gitignore`** – Excludes `node_modules/` and the compiled `dist/` output from source control. Leave as is, or extend it if you have local configuration files that should not be committed.

### Building, Installing, and Debugging the Extension

Complete the following steps in Visual Studio Code:

1. Select **File** > **Open Folder**.
2. Navigate to the folder where you created your extension.
3. Click **Select Folder**.
4. Select **Yes** if you are asked whether you trust this folder.
5. Open a terminal from the top menu by clicking **Terminal** > **New Terminal**.
6. From the terminal, type `npm install`. This installs all dependencies for the extension.
7. Build your extension using the command `npm run build` in the terminal. If you provided the path to the `.mpr` file in the previous step, this installs the extension into the app directory.

If you answered the last two questions of the extension generator and have built and installed the extension, you can debug it by completing the following steps:

1. Open the extension source code in Visual Studio Code and set breakpoints.
2. Select **Run and Debug** from the side panel.
3. Click the play button on the top of the panel (or press <kbd>F5</kbd>).

This runs Studio Pro in extension development mode and opens the configured app. You see a new **Extensions** item in the top menu.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.

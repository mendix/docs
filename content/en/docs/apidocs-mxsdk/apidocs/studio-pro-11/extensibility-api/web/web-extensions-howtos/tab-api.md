---
title: "Open a Tab Using Web API"
linktitle: "Open a Tab"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/tab-api/
---

## Introduction

This how-to describes how to open a tab in Studio Pro from an extension. This tab will contain your web content.

## Prerequisites

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one. 
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Opening a Tab

Create a menu item to open the tab. This is done inside the `loaded` method in `Main` class, as described below. For more information, see [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

In a listener event called `menuItemActivated` the `studioPro.ui.tabs.open(<tabinfo>, <uispec>)` call opens a new tab where:

* `<TabInfo>` is an object containing the `title` of the tab, which will be shown in the title bar of your tab in Studio Pro.
* `<uispec>` is an object containing two required properties:

    * `componentName` – the name of the extension prefixed with "extension/"; for example, "extension/myextension" in the following example
    * `uiEntryPoint` – the name mapped from the `manifest.json` file

{{% alert color="info" %}}
Whenever the tabs API `open` method is called, the `TabHandle` returned must be tracked by the extension so that it can be closed later by calling the `close` method.
{{% /alert %}}

To open a tab called **My Extension Tab**, add the following code to the main entry point (`src/main/index.ts`):

```typescript
import { IComponent, TabHandle, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const tabs: { [menuId: string]: TabHandle } = {};
        const studioPro = getStudioProApi(componentContext);

        // Add menu items to the Extensions menu to open and close our tab
        await studioPro.ui.extensionsMenu.add({
            menuId: "myextension.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                {
                    menuId: "myextension.ShowTabMenuItem",
                    caption: "Show tab",
                    action: async () => {
                        // Open a tab when the menu item is clicked
                        const handle = await studioPro.ui.tabs.open(
                            {
                                title: "My Extension Tab"
                            },
                            {
                                componentName: "extension/myextension",
                                uiEntrypoint: "tab"
                            }
                        );

                        // Track the open tab
                        tabs["myextension.MainMenu"] = handle;
                    }
                },
                {
                    menuId: "myextension.CloseTabMenuItem",
                    caption: "Close tab",
                    // Close the tab opened previously
                    action: async () => {
                        await studioPro.ui.tabs.close(tabs["myextension.MainMenu"]);
                    }
                }
            ]
        });
    }
};
```

{{% alert color="info" %}}
In this example, there is a dictionary that uses the parent menu id as the key to track the open `TabHandle`.
{{% /alert %}}

## Filling the Tabs With Content

In the previous example, the `uiEntryPoint` property of the `<uispec>` object had the value `tab`. This value must match the one from the manifest.

If you want multiple tabs in your extension, you need to structure the folders and set up the manifest file correctly. To do this, follow these steps:

1. Add a new method `createTabSpec` in your `Main` class.

    ```typescript
    createTabSpec(tab: string, title: string): { info: TabInfo, ui: UISpec} {
            const info: TabInfo = { title };
            const ui: UISpec = {
                componentName: "extension/myextension",
                uiEntrypoint: tab,
            };
    
            return {info, ui};
        }
    ```

2. Add three folders inside the `ui` folder, one for each tab you want to display contents for.
3. Create an `index.tsx` file in each folder.
4. Put the following code in each `index.tsx` file (this example is for **tab3**):

    ```typescript
    import React, { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import { IComponent } from "@mendix/extensions-api";

    export const component: IComponent = {
        async loaded(componentContext) {
            createRoot(document.getElementById("root")!).render(
                <StrictMode>
                    <h1>tab3</h1>
                </StrictMode>
            );
        },
    };
    ```

    In this example, you will add three tabs: **tab1**, **tab2**, and **tab3**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/tabs/ui_folder_structure.png" width="200" >}}

5. Create listener events in the `Main` class to open each of the three tabs. The `Main` class will then look like this:

    ```typescript
    import { IComponent, getStudioProApi, TabHandle, ComponentContext, TabInfo, UISpec } from "@mendix/extensions-api";

    class Main implements IComponent {
        tabs: { [menuId: string]: TabHandle } = {};

        async loaded(componentContext: ComponentContext) {
            const studioPro = getStudioProApi(componentContext);

            // Add a menu item to the Extensions menu
            await studioPro.ui.extensionsMenu.add({
                menuId: "myextension.MainMenu",
                caption: "Show Tabs",
                subMenus: [
                    { menuId: "myextension.ShowTab1", caption: "Show tab 1" },
                    { menuId: "myextension.ShowTab2", caption: "Show tab 2" },
                    { menuId: "myextension.ShowTab3", caption: "Show tab 3" },
                ],
            });

            // Open a tab when the menu item is clicked
            studioPro.ui.extensionsMenu.addEventListener(
                "menuItemActivated",
                async (args) => {
                    if (args.menuId === "myextension.ShowTab1") {
                        const tab1Spec = this.createTabSpec("tab1", "Tab 1 Title");
                        this.tabs["myextension.ShowTab1"] = await studioPro.ui.tabs.open(tab1Spec.info, tab1Spec.ui);
                    }
                    if (args.menuId === "myextension.ShowTab2") {
                        const tab2Spec = this.createTabSpec("tab2", "Tab 2 Title");
                        this.tabs["myextension.ShowTab2"] = await studioPro.ui.tabs.open(tab2Spec.info, tab2Spec.ui);
                    }
                    if (args.menuId === "myextension.ShowTab3") {
                        const tab3Spec = this.createTabSpec("tab3", "Tab 3 Title");
                        this.tabs["myextension.ShowTab3"] = await studioPro.ui.tabs.open(tab3Spec.info, tab3Spec.ui);
                    }
                }
            );
        }

        createTabSpec(tab: string, title: string): { info: TabInfo, ui: UISpec } {
            const info: TabInfo = { title };
            const ui: UISpec = {
                componentName: "extension/myextension",
                uiEntrypoint: tab,
            };

            return { info, ui };
        }
    }

    export const component: IComponent = new Main();
    ```

6. Ensure the tabs are added to the `manifest.json` file. Below is an example of three tabs under the `ui` property.

    ```json
    {
      "mendixComponent": {
        "entryPoints": {
          "main": "main.js",
          "ui": {
            "tab1": "tab1.js",
            "tab2": "tab2.js",
            "tab3": "tab3.js"
          }
        }
      }
    }
    ```

7. Update `build-extension.mjs` to match the manifest with an entry for each tab. Add entry points for each tab to the `entryPoints` array and make sure the variable `appDir` stays unaltered, as follows:

    ```javascript{hl_lines=["16-20"]}
      import * as esbuild from 'esbuild'
      import {copyToAppPlugin, copyManifestPlugin, commonConfig} from "./build.helpers.mjs"
      import parseArgs from "minimist"

      const outDir = `dist/myextension`
      const appDir ="<path to your application>"
      const extensionDirectoryName = "extensions"

      const entryPoints = [
          {
              in: 'src/main/index.ts',
              out: 'main'
          }   
      ]

      const allTabs = ["tab1", "tab2", "tab3"]
      entryPoints.push(...allTabs.map(tabName => ({
          in: `src/ui/${tabName}/index.tsx`,
          out: tabName
      })))

      const args = parseArgs(process.argv.slice(2))
      const buildContext = await esbuild.context({
        ...commonConfig,
        outdir: outDir,
        plugins: [copyManifestPlugin(outDir), copyToAppPlugin(appDir, outDir, extensionDirectoryName)],
        entryPoints
      })

      if('watch' in args) {
          await buildContext.watch();
      } 
      else {
          await buildContext.rebuild();
          await buildContext.dispose();
      }
    ```

After building and installing the extension in your Studio Pro app, each tab will display the content specified in the related `index.tsx` file.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.

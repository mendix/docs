---
title: "Open a Tab Using Web API"
linktitle: "Open a Tab"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/tab-api/
weight: 60
---

## Introduction

This how-to shows you how to open a tab in Studio Pro from an extension. This tab will contain your web content.

## Prerequisites

This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/). Please complete that how-to before starting this one. You should also be familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-10/menu-api/).

## Opening a Tab

Firstly, create a menu item to open the tab. This is done inside the `loaded` event in `Main`. For more information see [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-10/menu-api/).

In a listener event called `menuItemActivated` the `studioPro.ui.tabs.open(<tabinfo>, <uispec>)` call opens a new tab where:

* `<TabInfo>` is an object containing the `title` of the tab, which will be shown in the title bar of your tab in Studio Pro.
* `<uispec>` is an object containing two required properties:

    * `componentName` which is the name of the extension prefixed with "extension/". For example "extension/myextension" in the following example.
    * `uiEntryPoint` which is the name mapped from the `manifest.json` file. See below for examples with multiple tabs.

{{% alert color="info" %}}
Whenever the tabs API `open` method is called, the `TabHandle` returned must be tracked by the extension so that it can be closed later by calling the `close` method.
{{% /alert %}}

An example of the class `Main` to open a tab called **My Extension Tab** looks similar to the following:

```typescript
import { IComponent, studioPro, TabHandle } from "@mendix/extensions-api";

class Main implements IComponent {
  tabs: { [menuId: string]: Promise<TabHandle> } = {};
  async loaded() {
    // Add menu items to the Extensions menu to open and close our tab
    await studioPro.ui.extensionsMenu.add({
      menuId: "myextension.MainMenu",
      caption: "MyExtension Menu",
      subMenus: [
        { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
        {
          menuId: "myextension.CloseTabMenuItem",
          caption: "Close tab",
        },
      ],
    });

    studioPro.ui.extensionsMenu.addEventListener(
      "menuItemActivated",
      async (args) => {
        // Open a tab when the menu item is clicked
        if (args.menuId === "myextension.ShowTabMenuItem") {
          const handle = studioPro.ui.tabs.open(
            {
              title: "My Extension Tab",
            },
            {
              componentName: "extension/myextension",
              uiEntrypoint: "tab",
            }
          );

          // Track the open tab
          this.tabs["myextension.MainMenu"] = handle;
        }

        // Close the tab opened previously
        if (args.menuId === "myextension.CloseTabMenuItem") {
          studioPro.ui.tabs.close(await this.tabs["myextension.MainMenu"]);
        }
      }
    );
  }
}

export const component: IComponent = new Main();
```

{{% alert color="info" %}}

 In this example, there is a dictionary that uses the parent menu id as the key to track the open `TabHandle`.
{{% /alert %}}

## Filling the Tabs With Content

In the previous example, the `uiEntryPoint` property of the `<uispec>` object had the value "tab". This value must match the one from the manifest.

If you want to have multiple tabs in your extension, you need to structure the folders and set up the manifest file correctly.

To do this, follow these steps:

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

1. Add three folders inside the `ui` folder, one for each tab you want to display contents for.
1. Create an `index.tsx` file in each folder.
1. Put the following code in each `index.tsx` file (this example is for **tab3**):

    ```typescript
    import { StrictMode } from "react";
    import { createRoot } from "react-dom/client";

    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <h1>tab3</h1>
      </StrictMode>
    );
    ```

    In this example, we'll add 3 tabs: **tab1**, **tab2**, and **tab3**.

    {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/tabs/ui_folder_structure.png" >}}

1. Create listener events in the `Main` class to open each of the three tabs. The `Main` class will then look like this:

    ```typescript
    import { IComponent, studioPro, TabInfo, UISpec } from "@mendix/extensions-api";

    class Main implements IComponent {
      async loaded() {
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
              studioPro.ui.tabs.open(tab1Spec.info, tab1Spec.ui);
            }
            if (args.menuId === "myextension.ShowTab2") {
              const tab2Spec = this.createTabSpec("tab2", "Tab 2 Title");
              studioPro.ui.tabs.open(tab2Spec.info, tab2Spec.ui);
            }
            if (args.menuId === "myextension.ShowTab3") {
              const tab3Spec = this.createTabSpec("tab3", "Tab 3 Title");
              studioPro.ui.tabs.open(tab3Spec.info, tab3Spec.ui);
            }
          }
        );
      }

      createTabSpec(tab: string, title: string): { info: TabInfo; ui: UISpec } {
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

1. Ensure the tabs are added to the `manifest.json` file. Here is an example of three tabs under the `ui` property.

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

1. Update `vite.config` to match the manifest with an entry for each tab. For example:

    ```typescript
    import { defineConfig, ResolvedConfig, UserConfig } from "vite";
    
    export default defineConfig({
      build: {
        lib: {
          formats: ["es"],
          entry: {
            main: "src/main/index.ts",
            tab1: "src/ui/tab1/index.tsx",
            tab2: "src/ui/tab2/index.tsx",
            tab3: "src/ui/tab3/index.tsx",
          },
        },
        rollupOptions: {
          external: ["@mendix/component-framework", "@mendix/model-access-sdk"],
        },
        outDir: "./dist/myextension",
      },
    } satisfies UserConfig);
    ```

After building and installing the extension in our Studio Pro app, each tab will display the content specified in the related `index.tsx` file.

## Conclusion

You now know how to create tabs and populate them with content.

## Extensibility Feedback

If you would like to provide us with some additional feedback you can complete a small [Survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is much appreciated.

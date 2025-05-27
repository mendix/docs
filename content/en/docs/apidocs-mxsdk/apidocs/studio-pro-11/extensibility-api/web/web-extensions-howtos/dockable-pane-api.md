---
title: "Create a Dockable Pane Using Web API"
linktitle: "Dockable Pane"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/dockable-pane-api/
weight: 10
---

## Introduction

This guide explains how to create and manage a dockable pane using the web extensions API. A Dockable pane allows you to create a web view that can be docked and moved within the Studio Pro user interface. Examples of dockable panes in Studio Pro are:

* Marketplace
* Errors 
* Stories
* Toolbox

## Prerequisites

This guide uses the app created in [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Please complete that how-to before starting this one.

## Creating a Dockable Pane

To open a dockable pane you must first register the dockable pane handle with the API. To do this, add a call to register the pane to the extension loaded method in the `src/main/index.ts`.

```typescript
        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right",
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane",
            });
```

Use the 'paneHandle' you registered to interact with the dockable pane.

After adding this call the `loaded()` method looks like this:

```typescript {hl_lines=["11-19"]}
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "myextension.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
            ],
        });

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right",
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane",
            });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
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
            }
        );
    }
```

## Adding a Menu To Open the Dockable Pane

You will now add a menu that will open the pane when it is selected.

1. Add a new submenu to the existing `extensionsMenu.add()` method on line 10.

    ```typescript {linenos=table linenostart=10}
    // Add a menu item to the Extensions menu
    await studioPro.ui.extensionsMenu.add({
      menuId: "myextension.MainMenu",
      caption: "MyExtension Menu",
      subMenus: [
        { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
        { menuId: "myextension.ShowDockMenuItem", caption: "Show dock pane" },
      ],
    });
    ```

1. Add lines to the `addEventListener()` call to handle opening the dockable pane once the menu has been selected, as follows:

    ```typescript
        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
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
                else if (args.menuId === "myextension.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
            }
        );
    ```

Your `loaded()` method should now look like this:

```typescript {hl_lines=["3-10","22-41"]}
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "myextension.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
                { menuId: "myextension.ShowDockMenuItem", caption: "Show dock pane" },
            ],
        });

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right",
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane",
            });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
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
                else if (args.menuId === "myextension.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
            }
        );
    }
```

## Specifying a Web View Endpoint

### Adding New Endpoint Handlers

You must now create a new web view endpoint where the user interface to be rendered within the pane is defined. You can use the existing endpoint and rename it to something more appropriate.

1. Rename `ui/index.tsx` to `ui/tab.tsx`
1. Add the new endpoint file, `ui/dockablepane.tsx` by copying `ui/tab.tsx`.

You must also alter the `vite.config.ts` and `manifest.json` files to bind to the correct endpoint, as described in the following sections:

### Altering `vite.config.js`

Replace the entry section of `vite.config.js` with the following:

```typescript
        entry: {
            main: "src/main/index.ts",
            tab: "src/ui/tab.tsx",
            dockablepane: "src/ui/dockablepane.tsx",
        }
```

This instructs vite that the tab endpoint is connected to `src/ui/tab.tsx` and the dockable pane endpoint is connected to `src/ui/dockablepane.tsx`.

`vite.config.js` should now look like this:

```typescript {hl_lines=["7-11"]}
import { defineConfig, ResolvedConfig, UserConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
        formats: ["es"],
        entry: {
            main: "src/main/index.ts",
            tab: "src/ui/tab.tsx",
            dockablepane: "src/ui/dockablepane.tsx",
        },
    },
    rollupOptions: {
        external: ["@mendix/component-framework", "@mendix/model-access-sdk"],
    },
    outDir: "./dist/myextension",
  },
} satisfies UserConfig);
```

### Altering `public/manifest.json`

You also need to instruct Studio Pro to load the endpoint that you just created. To do this, modify the manifest file `public/manifest.json`.

Alter the "ui" section by changing the `tab` endpoint and adding the `dockablepane` endpoint.

```typescript
      "ui": {
        "tab": "tab.js",
        "dockablepane": "dockablepane.js"
      }
```

The `manifest.json file` should now look like this:

```typescript {hl_lines=["5-8"]}
{
  "mendixComponent": {
    "entryPoints": {
      "main": "main.js",
      "ui": {
        "tab": "tab.js",
        "dockablepane": "dockablepane.js"
      }
    }
  }
}
```

## Closing the Dockable Pane

Now that you have registered a pane and can open, it would also be a good idea to close it.

You will close your pane using a new menu item.

First add a new sub menu item to the menu on line 11.

```typescript {linenos=table linenostart=11}
                { menuId: "myextension.HideDockMenuItem", caption: "Hide dock pane" },
```

You must also alter the event handler for the new menu at the end of the loaded method:

```typescript
        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
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
                else if (args.menuId === "myextension.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
                else if (args.menuId === "myextension.HideDockMenuItem") {
                    studioPro.ui.panes.close(paneHandle);
                }
            }
        );
```

The loaded method should now look like this:

```typescript {hl_lines=["9","24-45"]}
    async loaded() {
        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: "myextension.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                { menuId: "myextension.ShowTabMenuItem", caption: "Show tab" },
                { menuId: "myextension.ShowDockMenuItem", caption: "Show dock pane" },
                { menuId: "myextension.HideDockMenuItem", caption: "Hide dock pane" },
            ],
        });

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right",
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane",
            });

        // Open a tab when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            (args) => {
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
                else if (args.menuId === "myextension.ShowDockMenuItem") {
                    studioPro.ui.panes.open(paneHandle);
                }
                else if (args.menuId === "myextension.HideDockMenuItem") {
                    studioPro.ui.panes.close(paneHandle);
                }
            }
        );
    }
```

## Conclusion

You now have a new dockable pane with its own user interface which you can modify as you like.
You can also open and close the dockable pane from a menu.

## Extensibility Feedback

If you would like to provide us with some additional feedback you can complete a small [Survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is much appreciated.

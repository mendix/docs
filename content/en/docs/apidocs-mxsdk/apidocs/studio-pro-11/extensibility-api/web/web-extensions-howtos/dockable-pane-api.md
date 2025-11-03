---
title: "Create a Dockable Pane Using Web API"
linktitle: "Dockable Pane"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/dockable-pane-api/
---

## Introduction

This how-to describes how to create and manage a dockable pane using the web extensions API. A dockable pane allows you to create a web view that can be docked and moved within the Studio Pro user interface. Examples of dockable panes in Studio Pro are:

* Marketplace
* Errors 
* Stories
* Toolbox

## Prerequisites

This how-to uses the app created in [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Make sure to complete that how-to before starting this one.

## Creating a Dockable Pane

### Register the Dockable Pane

To open a dockable pane, you must first register the dockable pane handle with the API. To do this, add a call to register the pane to the extension loaded method in the `src/main/index.ts`. Use the 'paneHandle' to interact with the pane.

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

After adding this call, the `loaded()` method looks like this:

```typescript {hl_lines=["12-20"]}
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
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

### Adding a Menu To Open the Dockable Pane

Add a menu that will open the pane when it is selected.

1. Add a new sub-menu to the existing `extensionsMenu.add()` method on line 7.

    ```typescript {linenos=table linenostart=6}
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

2. Add lines to the `addEventListener()` call that will open the pane when the menu is selected.

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

```typescript {hl_lines=["4-11","23-42"]}
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
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

Create a new web view endpoint where you define the user interface that will be rendered within the pane. You can use and rename the existing endpoint. Follow the steps below:

1. Rename `ui/index.tsx` to `ui/tab.tsx`.
1. Add the new endpoint file, `ui/dockablepane.tsx`, by copying `ui/tab.tsx`.

You must also alter the `build-extension.mjs` and `manifest.json` files to bind to the correct endpoint, as described in the following sections.

### Altering `build-extension.mjs`

Instruct esbuild to produce JavaScript modules that correspond to `src/ui/tab.tsx` and `src/ui/dockablepane.tsx`. To do this, change the call to `entryPoints.push` in line 16:

```typescript
entryPoints.push({
    in: 'src/ui/tab.tsx',
    out: 'tab'
});
entryPoints.push({
    in: 'src/ui/dockablepane.tsx',
    out: 'dockablepane'
});
```

The variable `appDir` should retain its previous value. Your `build-extension.mjs` file should look like this:

```javascript {hl_lines=["16-23"]}
import * as esbuild from 'esbuild'
import {copyToAppPlugin, copyManifestPlugin, commonConfig} from "./build.helpers.mjs"
import parseArgs from "minimist"

const outDir = `dist/myextension`
const appDir = "<path to your application root directory>"
const extensionDirectoryName = "extensions"

const entryPoints = [
    {
        in: 'src/main/index.ts',
        out: 'main'
    }   
]

entryPoints.push({
    in: 'src/ui/tab.tsx',
    out: 'tab'
});
entryPoints.push({
    in: 'src/ui/dockablepane.tsx',
    out: 'dockablepane'
});

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

This ensures esbuild will consider these two `.tsx` files as entrypoints and produce JavaScript modules in the `dist` folder, corresponding to the name in `out`.

### Altering `src/manifest.json`

You also must instruct Studio Pro to load the endpoint that you just created. To do this, modify the manifest file `src/manifest.json`.

Alter the "ui" section by:

* Changing the `tab` endpoint 
* Adding the `dockablepane` endpoint

```typescript
      "ui": {
        "tab": "tab.js",
        "dockablepane": "dockablepane.js"
      }
```

The `manifest.json` file should now look like this:

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

Now that you have registered a pane and created a way to open it, it is important to provide a way to close it, too.

You will close your pane using a new menu item. Follow the steps below:

1. Add a new sub-menu item to the menu on line 13.

    ```typescript {linenos=table linenostart=13}
                    { menuId: "myextension.HideDockMenuItem", caption: "Hide dock pane" },
    ```

2. Alter the event handler for the new menu at the end of the loaded method.

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

The `loaded` method should now look like this:

```typescript {hl_lines=["10","25-46"]}
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);
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

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is appreciated.

---
title: "Create a Dockable Pane Using Web API"
linktitle: "Dockable Pane"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/dockable-pane-api/
---

## Introduction

This how-to describes creating and managing a dockable pane using the web extensions API. A dockable pane is a web view that can be docked and moved within the Studio Pro user interface. Examples of dockable panes in Studio Pro include the following:

* Marketplace
* Errors
* Stories
* Toolbox

## Prerequisites

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

* This how-to uses the app created in [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Be familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Creating a Dockable Pane

### Register the Dockable Pane

To open a dockable pane, first register the dockable pane handle with the API. To do this, add a call to register the pane to the extension loaded method in `src/main/index.ts`. Use `paneHandle` to interact with the pane.

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

Create two menus that open and close the pane by calling the `panes` API:

```typescript
import { IComponent, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        const paneHandle = await studioPro.ui.panes.register(
            {
                title: "My Extension Pane",
                initialPosition: "right"
            },
            {
                componentName: "extension/myextension",
                uiEntrypoint: "dockablepane"
            }
        );

        // Add a menu item to the Extensions menu with two
        // submenus for opening and closing the pane.
        await studioPro.ui.extensionsMenu.add({
            menuId: "myextension.MainMenu",
            caption: "MyExtension Menu",
            subMenus: [
                {
                    menuId: "myextension.ShowPaneMenuItem",
                    caption: "Show Pane",
                    action: async () => {
                        await studioPro.ui.panes.open(paneHandle);
                    }
                },
                {
                    menuId: "myextension.ClosePaneMenuItem",
                    caption: "Close Pane",
                    action: async () => {
                        await studioPro.ui.panes.close(paneHandle);
                    }
                }
            ]
        });
    }
};

```

## Specifying a Web View Endpoint

### Adding New Endpoint Handlers

Create a new web view endpoint where you define the user interface that is rendered within the pane. You can use and rename the existing endpoint. Follow these steps:

1. Rename `ui/index.tsx` to `ui/tab.tsx`.
1. Add the new endpoint file, `ui/dockablepane.tsx`, by copying `ui/tab.tsx`.

Alter the `build-extension.mjs` and `manifest.json` files to bind to the correct endpoint, as described in the following sections.

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

This ensures esbuild considers these two `.tsx` files as entrypoints and produces JavaScript modules in the `dist` folder corresponding to the name in `out`.

### Altering `src/manifest.json`

Instruct Studio Pro to load the endpoint that you created. To do this, modify the manifest file `src/manifest.json`.

Alter the "ui" section by doing the following:

* Change the `tab` endpoint
* Add the `dockablepane` endpoint

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

Now that you have registered a pane and created a way to open it, provide a way to close it.

Close your pane using a new menu item. Follow these steps:

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

If you would like to provide additional feedback, you can complete a short [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is appreciated.

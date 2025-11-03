---
title: "Open a Modal Dialog Using Web API"
linktitle: "Open a Modal Dialog"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/
---

## Introduction

This how-to describes how to open a modal dialog in Studio Pro from an extension. This dialog will contain your web content.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one. 
* Make sure you are familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Opening a Modal Dialog

Create a menu item to open the dialog. This is done inside the `loaded` event in the main entry point (`src/main/index.ts`). For more information, see [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

In a listener event called `menuItemActivated`, the `studioPro.ui.dialogs.showModal(<dialogInfo>, <uiSpec>)` call opens a new tab where:

* `<dialogInfo>` is an object containing the `title` of the dialog, which is shown in the title bar of your dialog in Studio Pro. It also contains the `contentSize` object, where `height` and `width` dimensions for the dialog can be provided.
* `<uiSpec>` is an object containing two required properties and one optional property:

    * `componentName` — the name of the extension prefixed with `extension/`; for example, `extension/myextension`
    * `uiEntryPoint` —  the name mapped from the `manifest.json` file
    * `queryParams` (optional) — a key-value pair object for passing data to your web content inside the dialog

{{% alert color="info" %}}
When the dialog's API `showModal` method is called, a `Promise` of `unknown` or `null` is returned. This return value represents anything the web content determines should be returned when the dialog is closed. It is currently unknown by the API, since it can be anything. 

In the example below, the dialog will contain a form where an object is modified, then returned at closing time.
{{% /alert %}}

An example of the main entry point (`src/main/index.ts`) to open a modal dialog called *My Extension Dialog* looks similar to the following:

```typescript
import { IComponent, getStudioProApi } from "@mendix/extensions-api";

const menuId = "myextension.ShowModalDialog";

export const component: IComponent = {
    async loaded(componentContext) {
        const studioPro = getStudioProApi(componentContext);

        // Add a menu item to the Extensions menu
        await studioPro.ui.extensionsMenu.add({
            menuId: menuId,
            caption: "Show modal dialog",
        });

        // Open a modal dialog when the menu item is clicked
        studioPro.ui.extensionsMenu.addEventListener(
            "menuItemActivated",
            async (args) => {
                if (args.menuId === menuId) {
                    const result = await studioPro.ui.dialogs.showModal(
                        {
                            title: "Modal Dialog",
                            contentSize: { height: 170, width: 400 },
                        },
                        {
                            componentName: "extension/myextension",
                            uiEntrypoint: "dialog",
                        }
                    );

                    if (result !== null)
                        await studioPro.ui.messageBoxes.show(
                            "info",
                            JSON.stringify(result)
                    );
                }
            }
        );
    }
}
```

## Filling the Dialog With Content

In the previous example, the `uiEntryPoint` property of the `<uispec>` object had the value `dialog`. This value must match the one from the manifest. Below is an example of the dialog under the `ui` property:

```json
{
  "mendixComponent": {
    "entryPoints": {
      "main": "main.js",
      "ui": {
        "dialog": "dialog.js"
      }
    }
  }
}
```

1. Update `build-extension.mjs` to match the manifest with an entry for the new dialog entry point. Specifically, add the `src/ui/dialog.tsx` endpoint to your build script and make sure the variable `appDir` stays unaltered. For example:

   ```typescript{hl_lines=["16-19"]}
    import * as esbuild from 'esbuild'
    import {copyToAppPlugin, copyManifestPlugin, commonConfig} from "./build.helpers.mjs"
    import parseArgs from "minimist"

    const outDir = `dist/myextension`
    const appDir = "<path to your application>"
    const extensionDirectoryName = "extensions"

    const entryPoints = [
        {
            in: 'src/main/index.ts',
            out: 'main'
        }   
    ]

    entryPoints.push({
        in: 'src/ui/dialog.tsx',
        out: 'dialog'
    })

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

2. Add the `dialog.tsx` file for the web content inside the `src/ui` directory:

    ```typescript
      import { getStudioProApi, IComponent } from "@mendix/extensions-api";
      import React, { FormEvent, StrictMode } from "react";
      import { createRoot } from "react-dom/client";

      const dialogId = new URLSearchParams(location.search).get("dialogId")!;
      const person: { firstName?: string; lastName?: string } = {
          firstName: undefined,
          lastName: undefined,
      };

      export const component: IComponent = {
          async loaded(componentContext) {
              const studioPro = getStudioProApi(componentContext);

              const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  studioPro.ui.dialogs.closeWithResult(
                      dialogId,
                      JSON.stringify(person)
                  );
              };

              createRoot(document.getElementById("root")!).render(
                  <StrictMode>
                      <form onSubmit={handleSubmit}>
                          <p>
                              {" "}
                              <input
                                  placeholder="First Name"
                                  value={person.firstName}
                                  onChange={(e) =>
                                      (person.firstName = e.target.value)
                                  }
                              />
                          </p>
                          <p>
                              {" "}
                              <input
                                  placeholder="Surname"
                                  value={person.lastName}
                                  onChange={(e) => (person.lastName = e.target.value)}
                              />
                          </p>
                          <p>
                              <button type="submit">Submit</button>
                              <button
                                  type="button"
                                  onClick={(_) =>
                                      studioPro.ui.dialogs.close(dialogId)
                                  }
                              >
                                  Cancel
                              </button>
                          </p>
                      </form>
                  </StrictMode>
              );
          },
      };
    ```

Notice the `dialogId` property retrieved from the query parameters of the web page. This value is generated once the dialog API is first called. It is then passed back to the web content so the `close` or `closeWithResult` methods can be called successfully. The dialog's API needs this Id to close the correct dialog.

This simple form contains two text boxes for `firstName` and `lastName`. When submitting the form, it closes the dialog by passing along the content of the object modified by the form.
It also contains a simple `Close` button, which calls the API's `close` method without any extra data, apart from the required `dialogId`.

After building and installing the extension in Studio Pro, the dialog opens when the menu is clicked and will display the web content from the `dialog.tsx` file.

## Modifying a Modal Dialog

You can modify the dimensions of a dialog using the dialog API's `update` method. To do this, add a button to the form contained in `dialog.tsx` file, as follows:

```typescript
<button
  type="button"
  onClick={(_) => {
    studioPro.ui.dialogs.update(dialogId, {
      height: document.documentElement.scrollHeight + 20,
      width: document.documentElement.scrollWidth + 20,
    });
  }}
>
  Expand by 20 pixels
</button>
```

You can also modify the dialog's dimensions while it is open.

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.

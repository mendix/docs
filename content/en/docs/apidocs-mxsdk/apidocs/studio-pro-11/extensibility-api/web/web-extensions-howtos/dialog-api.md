---
title: "Open a Modal Dialog Using Web API"
linktitle: "Open a Modal Dialog"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/
---

## Introduction

This how-to describes how to open a modal dialog in Studio Pro from an extension. You can use this dialog to display web content.

It also describes how to show a progress dialog that follows a sequence of steps and returns a result when complete.

## Prerequisites

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

Before starting this how-to, complete the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one. 
* Be familiar with creating menus as described in [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

## Opening a Modal Dialog

Create a menu item to open the dialog inside the `loaded` event in the main entry point (`src/main/index.ts`). For more information, see [Create a Menu Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/menu-api/).

In a listener event called `menuItemActivated`, the `studioPro.ui.dialogs.showModal(<dialogInfo>, <uiSpec>)` call opens a new dialog. The parameters are:

* `<dialogInfo>` – An object containing the `title` of the dialog, which is shown in the title bar of your dialog in Studio Pro. It also contains the `contentSize` object, where you can provide `height` and `width` dimensions for the dialog.
* `<uiSpec>` – An object containing two required properties and one optional property:

    * `componentName` – The name of the extension prefixed with `extension/`. For example, `extension/myextension`.
    * `uiEntryPoint` – The name mapped from the `manifest.json` file.
    * `queryParams` (optional) – A key-value pair object for passing data to your web content inside the dialog.

{{% alert color="info" %}}
When the `showModal` method is called, it returns a `Promise` of `unknown` or `null`. This return value represents anything the web content determines should be returned when the dialog closes. The API cannot determine the type in advance, since it can be anything. 

In the example below, the dialog contains a form where an object is modified and then returned when the dialog closes.
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
            action: async () => {
                const result = await studioPro.ui.dialogs.showModal(
                    {
                        title: "Modal Dialog",
                        contentSize: { height: 170, width: 400 }
                    },
                    {
                        componentName: "extension/myextension",
                        uiEntrypoint: "dialog"
                    }
                );

                if (result !== null) await studioPro.ui.messageBoxes.show("info", JSON.stringify(result));
            }
        });
    }
};
```

## Filling the Dialog With Content

In the previous example, the `uiEntryPoint` property of the `<uispec>` object has the value `dialog`. This value must match the one in the manifest. The following example shows the dialog under the `ui` property:

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

1. Update `build-extension.mjs` to match the manifest with an entry for the new dialog entry point. Add the `src/ui/dialog.tsx` endpoint to your build script and make sure the variable `appDir` remains unchanged:

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

The `dialogId` property is retrieved from the query parameters of the web page. This value is generated when the dialog API is first called. It is then passed back to the web content so the `close` or `closeWithResult` methods can be called successfully. The dialog API needs this ID to close the correct dialog.

This simple form contains two text boxes for `firstName` and `lastName`. When you submit the form, it closes the dialog and passes the content of the object modified by the form.
The form also contains a **Close** button, which calls the `close` method without any extra data, except the required `dialogId`.

After you build and install the extension in Studio Pro, the dialog opens when you click the menu and displays the web content from the `dialog.tsx` file.

## Modifying a Modal Dialog

You can modify the dimensions of a dialog using the `update` method. To do this, add a button to the form in the `dialog.tsx` file:

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

## Showing a Progress Dialog {#process-dialog}

 To show a progress dialog, call the method `studioPro.ui.dialogs.showProgressDialog(<title>, <steps>)`. The parameters are:

* `<title>` – A string that is displayed in the title bar of the dialog.
* `<steps>` – An array of `ProgressDialogStep` objects, which run in the same order provided in the array. A `ProgressDialogStep` object contains the following properties:
    * `title` – The title of the step, which is highlighted when the step runs.
    * `description` – The description of the step, which shows at the bottom of the dialog next to the progress bar.
    * `action` – The action the step performs that returns `Promise<true | string>`, where `string` indicates the reason for failure if the step fails, and `true` is returned otherwise.

A checkmark icon appears next to the step title when the step completes successfully. If one of the steps fails, the dialog closes and the remaining steps do not run.

The `showProgressDialog` method returns a `Promise<ProgressDialogResult>`. `ProgressDialogResult` is an object that contains the following properties:

* `result` – A string that is either `Success`, `Failure`, or `UserCancelled`:
    * `Success` – Returned when all steps return `true`.
    * `Failure` – Returned when one step fails, causing the dialog to close.
    * `UserCancelled` – Returned when the user closes the dialog and interrupts the process.
* `failedStep` (optional) – An object of type `FailedProgressStepResult` that describes the step that failed.

The `FailedProgressStepResult` object contains the following properties:

* `stepTitle` – The title of the step that failed, causing the whole process to fail.
* `error` – A string that describes the error or exception that occurred during step execution.

The following example creates a menu to show the modal progress dialog and runs three steps inside the `loaded` event in the main entry point (`src/main/index.ts`).

```typescript
import { ComponentContext, IComponent, ProgressDialogStep, getStudioProApi } from "@mendix/extensions-api";

export const component: IComponent = {
    async loaded(componentContext: ComponentContext) {
        const studioPro = getStudioProApi(componentContext);

        const step1: ProgressDialogStep = {
            title: "Step 1",
            description: "Executing Step 1",
            action: async () => {
                // perform action
                return true;
            }
        };

        const step2: ProgressDialogStep = {
            title: "Step 2",
            description: "Executing Step 2",
            action: async () => {
                // perform action
                return true;
            }
        };

        const step3: ProgressDialogStep = {
            title: "Step 3",
            description: "Executing Step 3",
            action: async () => {
                // perform action
                return true;
            }
        };

        // menu to call `showProgressDialog` method
        await studioPro.ui.extensionsMenu.add({
            caption: "Sample Progress Dialog",
            menuId: `myextension.start-progress-menu`,
            action: async () => {
                const steps = [step1, step2, step3];
                const progressDialogResult = await studioPro.ui.dialogs.showProgressDialog("Sample Progress Dialog", steps);

                switch (progressDialogResult.result) {
                    case "Success":
                        await studioPro.ui.messageBoxes.show("info", "Process completed successfully");
                        break;

                    case "UserCancelled":
                        await studioPro.ui.messageBoxes.show("info", "Process was cancelled by the user");
                        break;

                    case "Failure": {
                        const errorMessage = `Step '${progressDialogResult.failedStep?.stepTitle}' has failed'`;
                        const errorDetails = progressDialogResult.failedStep?.error ?? "";

                        await studioPro.ui.messageBoxes.show("error", errorMessage, errorDetails);
                        break;
                    }
                }
            }
        });
    }
};
```

Mendix recommends wrapping your step action body in a `try/catch` block so you can control the error that is returned to the user:

```typescript
const step: ProgressDialogStep = {
            title: "Step X",
            description: "Executing Step X",
            action: async () => {
                try {
                    // perform action
                    return true;
                } catch (error: Error | unknown) {
                    return error instanceof Error ? error.message : "An error occurred while performing Step X";
                }
            }
        };
```

When running, the progress dialog looks like this:
{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/web/dialogs/sample-progress-dialog.png" alt="Sample progress dialog showing three steps" width="300" >}}

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.

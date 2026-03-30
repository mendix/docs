---
title: "Interact With Local App Files Using Web API"
linktitle: "Local Files"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/local-app-files-api/
---

## Introduction

This how-to describes how to interact with local application files from within an extension. In this example, you will:

* Add three new buttons to a tab
* Add three new event handlers for saving, loading, and deleting a file called `HelloWorld.txt`

## Prerequisites

This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Make sure to complete that how-to before starting this one.

## Adding Interactivity

Implement the code described in the [Code Descriptions](#code-descriptions) section by following the steps below:

1. Open `src/ui/index.tsx`.
2. Replace the contents of the file with the following code:

    ```typescript
    import React, { StrictMode } from "react";
    import { createRoot } from "react-dom/client";
    import { IComponent, getStudioProApi } from "@mendix/extensions-api";

    export const component: IComponent = {
        async loaded(componentContext) {
            const studioPro = getStudioProApi(componentContext);

            const saveFile = async () => {
                await studioPro.app.files.putFile(
                    "HelloWorld.txt",
                    "Hello world from a file!"
                );
                studioPro.ui.messageBoxes.show("info", "Saving HelloWorld.txt");
            };

            const loadFile = async () => {
                const message = await studioPro.app.files.getFile("HelloWorld.txt");
                studioPro.ui.messageBoxes.show(
                    "info",
                    `Loaded HelloWorld.txt it contained: ${message}`
                );
            };

            const deleteFile = async () => {
                await studioPro.app.files.deleteFile("HelloWorld.txt");
                studioPro.ui.messageBoxes.show("info", "Deleted HelloWorld.txt");
            };

            createRoot(document.getElementById("root")!).render(
                <StrictMode>
                    <h1>Mendix Studio Pro Extension</h1>
                    <p>Hello from an extension!</p>
                    <p>
                        <button onClick={saveFile}>Save Hello world File</button>
                        <button onClick={loadFile}>Load Hello world File</button>
                        <button onClick={deleteFile}>Delete Hello world File</button>
                    </p>
                </StrictMode>
            );
        },
    };
    ```

## Code Descriptions {#code-descriptions}

  The following sections explain the various parts of the code.

### saveFile

  The `saveFile` callback calls the `putFile` API. It sets the file name to `HelloWorld.txt` and the content to `Hello world from a file!`.

  ```typescript
  const saveFile = async () => {
    await studioPro.app.files.putFile(
      "HelloWorld.txt",
      "Hello world from a file!"
    );
    studioPro.ui.messageBoxes.show("info", "Saving HelloWorld.txt");
  };
  ```

### loadFile

  The `loadFile` callback calls the `getFile` API. It requests to load `HelloWorld.txt`, then shows a message box that displays the content of the file.

  ```typescript
  const loadFile = async () => {
    const message = await studioPro.app.files.getFile("HelloWorld.txt");
    studioPro.ui.messageBoxes.show(
      "info",
      `Loaded HelloWorld.txt it contained: ${message}`
    );
  };
  ```

### deleteFile

  The `deleteFile` callback calls the `deleteFile` API. It requests to delete `HelloWorld.txt`.

  ```typescript
  const deleteFile = async () => {
    await studioPro.app.files.deleteFile("HelloWorld.txt");
    studioPro.ui.messageBoxes.show("info", "Deleted HelloWorld.txt");
  };
  ```

### Adding Buttons

  The final part of the code adds three new buttons which, when clicked, call the callbacks described above.

  ```typescript
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <h1>Mendix Studio Pro Extension</h1>
      <p>Hello from an extension!</p>
      <p>
        <button onClick={saveFile}>Save Hello world File</button>
        <button onClick={loadFile}>Load Hello world File</button>
        <button onClick={deleteFile}>Delete Hello world File</button>
      </p>
    </StrictMode>
  );
  ```

## Restrictions

The app files API allows you to modify files within your application's folder. It will not:

* Serve restricted files such as the `.mpr` file, or the contents of some folders, such as the `.git` folder
* Allow access to files outside of the app folder

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.

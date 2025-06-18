---
title: "Interact With Local App Files Using Web API"
linktitle: "Local Files"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-10/local-app-files-api/
weight: 20
---

## Introduction

This how-to shows you how to interact with local application files from within an extension. It adds three new buttons to the tab and three new event handlers for saving, loading, and deleting a file called `HelloWorld.txt`.

## Prerequisites

This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-10/getting-started/). Please complete that how-to before starting this one.

## Adding Some Interactivity

First, you will add all the code. The changes will then be explained so that you can understand what the code does.

1. Open `src/ui/index.tsx`.
1. Replace the contents of the file with the following code:

```typescript
import { studioPro } from "@mendix/extensions-api";
import { StrictMode, useCallback } from "react";
import { createRoot } from "react-dom/client";

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
```

## What Does the Code Do?

The following sections explain the various parts of the code.

### saveFile

The `saveFile` callback calls the `putFile` API setting the filename to `HelloWorld.txt` and the content to `Hello world from a file!`.

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

The loadFile callback calls the getFile API requesting to load `HelloWorld.txt`. It then shows message box displaying the content of the file.

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

The deleteFile callback calls the deleteFile API requesting to delete `HelloWorld.txt`

```typescript
const deleteFile = async () => {
  await studioPro.app.files.deleteFile("HelloWorld.txt");
  studioPro.ui.messageBoxes.show("info", "Deleted HelloWorld.txt");
};
```

### Adding the Buttons

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

## Some Restrictions

The App files API allows you to modify files within your application's folder. It will not:

* serve restricted files such as the `.mpr` file or the contents of some folders such as the `.git` folder.
* allow access to files outside of the app folder.

## Conclusion

You can now create and extension which save, load, and delete files within the app folder.

## Extensibility Feedback

If you would like to provide us with some additional feedback you can complete a small [Survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is much appreciated.

---
title: "Register New Document Types With a Corresponding Editor"
linktitle: "Introduce New Document Types"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/
description: "Describes how to introduce a new document type and set up a custom editor that allows users to edit documents of that type."
---

## Introduction

This how-to describes how to introduce a new document type and set up a custom editor for users to edit documents of that type.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/).

## Custom Document Model

Studio Pro allows you to extend its metamodel by adding custom document types. These documents can store arbitrary data that can be serialized as strings. When you register an editor (a user-defined UI component) for a specific document type, documents of that type appear in the UI alongside built-in document types such as constants, Java actions, and pages. They appear in the **New Document** and **Find Advanced** dialogs, context menus for adding documents, the App Explorer, and other UI elements that display Studio Pro documents. You can register custom editors to appear as tabs or as modal dialogs.

## Registering a New Document Type

To register a new document type, follow these steps:

1. Generate a new extension named `myextension` as described in [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/).
2. Replace the contents of `src/main/index.ts` with the code below:

    ```typescript {hl_lines=["8-24"]}
    import { IComponent, getStudioProApi } from "@mendix/extensions-api";
    import { personDarkThemeIcon, personDocumentType, personLightThemeIcon } from "../model/constants";
    import { PersonInfo } from "../model/PersonInfo";

    export const component: IComponent = {
        async loaded(componentContext) {
            const studioPro = getStudioProApi(componentContext);
            await studioPro.app.model.customBlobDocuments.registerDocumentType<PersonInfo>({
                type: personDocumentType,
                readableTypeName: 'Person',
                defaultContent: {
                    firstName: '',
                    lastName: '',
                    age: 0,
                    email: ''
                }
            });
            await studioPro.ui.editors.registerEditorForCustomDocument({
                documentType: personDocumentType,
                editorEntryPoint: 'editor',
                editorKind: 'tab',
                iconLight: personLightThemeIcon,
                iconDark: personDarkThemeIcon
            })

        }
    }
    ```

3. Add a new file `src/model/constants.ts` with the following contents:

    ```typescript
    export const personDocumentType = 'myextension.Person';
    export const personLightThemeIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAABKElEQVRIDd2Vyw3CMBBEAxIUAWVQBxIcKIBiuNAAFVAIV2iAA2cKoAGYF9nIctaxscIBRhrZ2Z3d9T9N8++YaoIb8ShexYcjfWz40FRhraib+MwQDdpijKXci7nEsZ8YYrOoSe6LEdsLpurFtW1yudiskjXPFSaHufGciFxwqZ9cLcJNWXnjAK2Zi7NdOsKcjlwdcIlygaV+crUIl8jbwnauj5F4CY2ujw0fmiTCAndDtXC2g+HzNq8JJVau9m2Jl+CkKAYxEbfi2ZE+Nnxo4jjeqQ5Sx3QnZThTH4gNX5yc7/cx9WLavovGKJfizJG+NXKSJy+afO2raI3oE1vyqaAA+OpjRwHWtqYIMdZekdMEUy15/NBkl8WsICMbz4ng2A3+y1TOH8ALNqHxhf/P+xwAAAAASUVORK5CYII=';
    export const personDarkThemeIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAWdJREFUSIm1ljFuwkAQRd/giFTkABS5gMsolBRcIFBwCOTGNUfgDtDRJ9yDioaCKlJ8B0dYmyLjZGLtrh0Jj7SyNPP3f894dtbinHP0aIM+yQHuYkERuQdegDnwBIw1VABH4BV4c86VQRIXMGABXADXsi7AIsjjIR4AG0NwAnIgBUa6UvWdDG4DDLoI1OQlkAFJJMtEMWUtEhXQstTksxCxR2hmRP6UCwMamppnXcnN/sx8k6FPYGlqHixLRCAx32RZ++05mOtz65y7Btsu3I1XYNvgwmZwJty1XbNINYOzL4MxgIg8/Pftjb1bLmgZFSJSiAgiMvHEJhorYhxWoAY+Gt9RnyvP3lUDY/f+ipr67fmuX258U6ACPoEd8Kxrp74KmBp8rhz7H58JetsUWCtRcwZVwLqtTTsdNM3kAHzoOtg3V0z8oCmov1FhwP0NO93U77g2Qje5cETJvHaLKzMqcAvr/a/iC+JcVEP5CMhEAAAAAElFTkSuQmCC';
    ```

4. Add another file `src/model/PersonInfo.ts` in the same directory: 

    ```typescript
    export type PersonInfo = {
        firstName: string;
        lastName: string;
        age: number;
        email: string;
    }
    ```

5. Rename the `src/ui/index.tsx` file to `src/ui/editor.tsx` and paste the following contents into it:

    ```typescript {hl_lines=["16-22", "24-35", "37-43"]}
    import React, { StrictMode, useCallback, useEffect, useState } from "react";
    import { createRoot } from "react-dom/client";
    import { getStudioProApi, IComponent, StudioProApi } from "@mendix/extensions-api";
    import type { PersonInfo } from "../model/PersonInfo";

    function PersonEditor(input : { studioPro: StudioProApi, documentId: string }) {
        const {studioPro,documentId} = input;
        const [person, setPerson] = useState<PersonInfo>({
            firstName: "",
            lastName: "",
            age: 0,
            email: "",
        });
        const [documentVersion, setDocumentVersion] = useState(0); // Used to trigger re-fetching the document

        useEffect(() => {
            studioPro.app.model.customBlobDocuments.addEventListener("documentsChanged", ({ documents }) => {
                if (documents.some(doc => doc.id === documentId)) {
                    setDocumentVersion(v => v + 1); // Trigger re-fetch of the document
                }
            });
        }, [studioPro, documentId]);

        useEffect(() => {
            studioPro.app.model.customBlobDocuments
                .getDocumentById<PersonInfo>(documentId)
                .then(documentFromModel => {
                    if (documentFromModel && !("error" in documentFromModel)) {
                        setPerson(documentFromModel.document.contents);
                    }
                })
                .catch(err => {
                    studioPro.ui.messageBoxes.show("error", "Error loading document", "Details: " + err?.message || err);
                });
        }, [studioPro, documentId, documentVersion]);

        const savePerson = useCallback(async () => {
            try {
                await studioPro.app.model.customBlobDocuments.updateDocumentContent<PersonInfo>(documentId, person)
            } catch (error) {
                studioPro.ui.messageBoxes.show("error", "Error saving document", "Details: " + ((error as {message?: string})?.message  || error));
            }
        }, [studioPro, documentId, person]);

        const labelStyle = { display: 'inline-block', width: '300px' };

        return (
            <div style={{ backgroundColor: 'white', padding: '20px' }}>
                <h2>Person Editor</h2>
                <div>
                    <label style={labelStyle}>
                        First name:
                        <input
                            type="text"
                            value={person.firstName}
                            onChange={e => setPerson({ ...person, firstName: e.target.value })}
                        />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        Last name:
                        <input
                            type="text"
                            value={person.lastName}
                            onChange={e => setPerson({ ...person, lastName: e.target.value })}
                        />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        Age:
                        <input
                            type="number"
                            value={person.age}
                            onChange={e => setPerson({ ...person, age: Number(e.target.value) })}
                        />
                    </label>
                </div>
                <div>
                    <label style={labelStyle}>
                        Email:
                        <input
                            type="email"
                            value={person.email}
                            onChange={e => setPerson({ ...person, email: e.target.value })}
                        />
                    </label>
                </div>
                <div style={{ marginTop: 8 }}>
                    <button onClick={savePerson}>Save</button>
                </div>
            </div>
        );
    }

    export const component: IComponent = {
        async loaded(componentContext, args: { documentId: string; }) {
            const studioPro = getStudioProApi(componentContext);
            createRoot(document.getElementById("root")!).render(
                <StrictMode>
                    <PersonEditor studioPro={studioPro} documentId={args.documentId} />
                </StrictMode>
            );
        }
    };
    ```

6. Update the build instructions by replacing the contents of `build-extension.mjs` with the code below:

    ```javascript {hl_lines=["16-19"]}
    import * as esbuild from 'esbuild'
    import {copyToAppPlugin, copyManifestPlugin, commonConfig} from "./build.helpers.mjs"
    import parseArgs from "minimist"

    const outDir = `dist/myextension`
    const appDir = "/Users/<USERNAME>/Mendix/App-Guide-Test-Blob"
    const extensionDirectoryName = "extensions"

    const entryPoints = [
        {
            in: 'src/main/index.ts',
            out: 'main'
        }   
    ]

    entryPoints.push({
        in: 'src/ui/editor.tsx',
        out: 'editor'
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

7. Replace the contents of `manifest.json` with the code below:

    ```json {hl_lines=["6"]}
    {
      "mendixComponent": {
        "entryPoints": {
          "main": "main.js",
          "ui": {
            "editor": "editor.js"
          }
        }
      }
    }
    ```

## Explanation

### Register the Document Type

In `src/main/index.ts`, you register a new document type. After you register the document type, you can perform all CRUD operations on it. However, the document type does not appear in the UI until you also register an editor. 

Optionally, you can provide a `readableTypeName` to display a user-friendly name in logs and the Studio Pro UI instead of the full type name. You can also customize how the document contents serialize to a string. By default, the API uses `JSON.stringify` for serialization and `JSON.parse` for deserialization.

### Register the Editor

The next call to the Studio Pro API in `src/main/index.ts` registers an editor for the document type. This call does the following:

* Registers the `editor` entry point of the extension to the document type, so the editor appears when users interact with the document in Studio Pro (for example, through the **App Explorer** or **Find Results**)
* Displays the editor as a tab, though you can also configure it to display as a modal dialog
* Registers icons for both the light and dark themes; these icons appear wherever a document icon is needed

This editor behaves like editors for other built-in document types. For example, the `studioPro.ui.editors.editDocument` call opens the registered editor for custom documents.

### Changes in the Editor

In `src/ui/editor.tsx`, the first highlighted block of code listens for changes to documents. This ensures the most recent version of the currently active document appears. The document can change outside the currently open editor, either through calls to the custom blob document API or through Studio Pro operations like **Undo**.

In the next highlighted block, document contents are fetched whenever a new document opens or an existing document updates. 

The code then provides a way to save changes.

### Update Build and Manifest Files

The highlighted text in `build-extension.mjs` and `manifest.json` shows the changes necessary to ensure the `editor` entry point builds and loads properly.

## Extensibility Feedback

If you would like to provide us with additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is appreciated.

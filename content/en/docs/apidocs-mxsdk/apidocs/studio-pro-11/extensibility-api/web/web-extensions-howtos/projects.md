---
title: "Project Related APIs"
linktitle: "Project related APIs"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/projects/
---

## Introduction

This how-to describes the apis that allow the use to get information about the current project or document events.

## Prerequisites

{{% alert="info" %}}
If you are using Studio Pro 11.0–11.5 and your extension includes menus, your existing menu code will not work when you upgrade to Studio Pro 11.6. To restore full functionality and support, upgrade to the Extensibility API 11.6 and follow the steps in the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/).
{{% /alert%}}

Before starting this how-to, complete the following prerequisites:

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.

### IElementChangesApi

This api provides some useful events that relate to elements (documents or entities).

* documentsChanged
* documentAdded
* elementsRenamed

| Event                 | Description                                 | Payload                      |
|-----------------------|---------------------------------------------|------------------------------|
| `documentsChanged`    | Contains a list of changed documents        | Array of `DocumentInfo`      |
| `documentAdded`       | A single document that was added            | A single `DocumentInfo`      |
| `elementsRenamed`     | Contains a list of renamed elements         | Array of `ElementRenameInfo` |

## DocumentInfo Properties

| Property       | Type   | Description                                                                          |
|----------------|--------|--------------------------------------------------------------------------------------|
| `documentId`   | string | The ID of the document                                                               |
| `documentType` | string | The type of the document e.g. "Microflows$Microflow or "myExtension.MyBlobDocument"  |
| `documentName` | string | The name of the document                                                             |
| `moduleName`   | string | Optional name of the containing module.                                              |

## ElementRenameInfo Properties

| Property       | Type        | Description                                          |
|----------------|-------------|------------------------------------------------------|
| `oldName`      | ElementName | The old name of the document                         |
| `newName`      | ElementName | The new name of the document                         |
| `documentType` | string      | The type of the document e.g. "Microflows$Microflow  |

## ElementName Properties

| Property         | Type   | Description                                 |
|------------------|--------|---------------------------------------------|
| `qualifiedName`  | string | The qualified name of the document          |
| `name`           | string | The name of the document                    |

These events can be very useful when working with [Consistency Checks](/apidocs-mxsdk/apidocs/web-extensibility-api-11/consistency-checks/) for Custom Blob Documents.

## How to listen to an event

```typescript
studioPro.app.projectChanges.addEventListener("documentsChanged", async ({ documents }) => {
    ...
}
studioPro.app.projectChanges.addEventListener("documentAdded", async ({ document }) => {
    ...
}
studioPro.app.projectChanges.addEventListener("elementsRenamed", async ({ elements }) => {
    ...
}
```

### IPublicProjectManagerApi

This api provides some useful events and methods that relate to the current Studio Pro project.

* projectOpened
* projectClosing
* getProjectMetadata

| Event                 | Description                                                | Payload           |
|-----------------------|------------------------------------------------------------|-------------------|
| `projectOpened`       | Triggers when the project is initialized                   | `ProjectMetadata` |
| `projectClosing`      | Triggers when the project is closing, unloading extensions | `ProjectMetadata` |

## ProjectMetadata Properties

| Property       | Type   | Description                      |
|----------------|--------|----------------------------------|
| `projectId`   | string  | The ID of the project            |
| `projectFile` | string  | The file path of the project     |
| `projectName` | string  | The name of the project          |
| `caption`     | string  | The description of the project   |

These events can be very useful when working with [Consistency Checks](/apidocs-mxsdk/apidocs/web-extensibility-api-11/consistency-checks/) for Custom Blob Documents.

## How to listen to an event

```typescript
studioPro.app.projectManager.addEventListener("projectOpened", async ({ project }) => {
    ...
}
studioPro.app.projectManager.addEventListener("projectClosing", async ({ project }) => {
    ...
}
```

## Getting the Current Project

This api also provides a method `getProjectMetadata` which can be used whenever an extension needs to perform an action that requires the project to be initialized, like [creating a blob document](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/{#creating-a-document-from-code}). It returns a `ProjectMetadata` object that can also be `null`.
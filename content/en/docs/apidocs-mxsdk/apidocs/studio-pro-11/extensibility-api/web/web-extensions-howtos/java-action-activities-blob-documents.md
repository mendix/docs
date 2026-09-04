---
title: "Java Action Activities for Custom Blob Documents"
linktitle: "Java Action Activities"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/java-action-activities-blob-documents/
description: "Describes how to allow a Custom Blob Document to have its own Java Action Activity in a Microflow"
---

## Introduction

Java Actions can have Custom Blob documents as a parameter. It is possible to link that java action directly to a document type when the type is registered. This allows the user of Studio Pro to simply drag a blob document from the App Explorer directly into a Microflow, and a new Java Action Activity will be automatically generated with that exact Blob document as the parameter value for the Java Action.

## Prerequisites

* This how-to uses the results of [Get Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/). Complete that how-to before starting this one.
* Familiarize yourself with creating custom documents as described in [Custom Blob Documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/). Also useful to know about [consistency checks for blob documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/consistency-checks/).

## Registering a Custom Blob Document with a Java Action
If the Java Action which contains a Blob Document type as its parameter already exists in your solution, you can simply use its qualified name during the registration call of your Blob Document type. The registration method will trigger when the Studio Pro app opens and extensions get loaded, and the two will be linked.

```typescript
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
        },
        javaActionQualifiedName: 'MyModule.MyJavaAction'
    });

    ...
}
```

If you want to create the Java Action that has your new Blob Document Type as a parameter at the same time as registering the document, you can do so like shown below, but be aware that the Java Action will be created every time your extension gets loaded. This code below is a simple example to show how to create a Java Action and assign its parameter types to a Blob Document type.

```typescript

 async loaded(componentContext) {
    const studioPro = getStudioProApi(componentContext);

    const moduleName = "MyModule";
    const javaActionName = "MyJavaAction";
    
    await createJavaActionWithBlobDocumentParameter(studioPro, moduleName, javaActionName, personDocumentType, "Person");

    await studioPro.app.model.customBlobDocuments.registerDocumentType<PersonInfo>({
        type: personDocumentType,
        readableTypeName: 'Person',
        defaultContent: {
            firstName: '',
            lastName: '',
            age: 0,
            email: ''
        },
        javaActionQualifiedName: `${moduleName}.${javaActionName}`
    });

    ...
}

async function createJavaActionWithBlobDocumentParameter(studioPro: StudioProApi, moduleName: string, javaActionName: string, customDocumentTypeName: string, customDocumentReadableTypeName: string) {
    const module = await studioPro.app.model.modules.getModule(moduleName);

    if (!module) {
        throw new Error(`Module was not found.`);
    }

    const javaActions = studioPro.app.model.javaActions;

    const javaAction = await javaActions.createUnit(module.$ID, {
        name: javaActionName
    });

    const parameterType = await javaActions.createElement<CodeActions.CustomBlobDocumentParameterType>(
        "CodeActions$CustomBlobDocumentParameterType"
    );

    parameterType.customDocumentTypeName = customDocumentTypeName;
    parameterType.customDocumentReadableTypeName = customDocumentReadableTypeName;

    const parameter = await javaActions.createElement<JavaActions.JavaActionParameter>("JavaActions$JavaActionParameter", {
        name: "document"
    });

    parameter.actionParameterType = parameterType;

    javaAction.actionParameters.push(parameter);

    await javaActions.save(javaAction);

    return javaAction;
}

```

### Limitations and Suggestions

A Custom Blob Document and Java Action relationship is one to one. There can only be one Java Action per document type. If an extension tries to link a Java Action that is already linked to another type, the api will throw an error.
It is also advisable to write some [consistency checks](/apidocs-mxsdk/apidocs/web-extensibility-api-11/consistency-checks/) that detect when the Java Action is renamed or deleted, or its parameter types get changed by the user. So it is good practice to add the `javaActionQualifiedName` property to the contents of the Custom Blob Document as well, so that it is included in the document data when the consistency checks run. See below for a few sample consistency checks.

### Sample type that keeps track of the java action name
```typescript
export type JavaActionDocument = {
    javaActionQualifiedName: string | undefined;
    renamedJavaActionQualifiedName?: string | undefined;
    someValue?: string | undefined;
};
```

### Consistency checks for lost action and parameter types
```typescript
const withJavaActionDocumentType = "myextension.JavaActionDocument";

const wrongActionParameterErrorCode = "WRNJAP";
const noJavaActionErrorCode = "NOJAA";
const wrongNamedJavaActionErrorCode = "WRNJAA";
const reservedErrorCodes = [wrongActionParameterErrorCode, noJavaActionErrorCode, wrongNamedJavaActionErrorCode];

async function getConsistencyCheck(studioPro: StudioProApi) {
    return async (data: JavaActionDocument) => {
        const errors: ConsistencyError[] = [];

        if (!data.javaActionQualifiedName || data.javaActionQualifiedName.trim().length === 0) {
            errors.push({
                errorCode: noJavaActionErrorCode,
                errorDescription: `The Document of type ${withJavaActionDocumentType} must have a java action associated with it.`,
                severity: "error",
                elementText: "Parameter"
            });
        }

        const [action] = await studioPro.app.model.javaActions.loadAll(unit => {
            const name = `${unit.moduleName}.${unit.name}`;
            return name === data.javaActionQualifiedName || name === data.renamedJavaActionQualifiedName;
        });

        const dependentElementIds: string[] = [];

        if (!action) {
            errors.push({
                errorCode: noJavaActionErrorCode,
                errorDescription: `The Document of type ${withJavaActionDocumentType} must have a java action associated with it.`,
                severity: "error",
                elementText: "Parameter"
            });

            return {
                errors,
                dependentElementIds
            };
        } else dependentElementIds.push(action.$ID); // track the JavaAction as a dependency of this document.

        if (data.renamedJavaActionQualifiedName && data.renamedJavaActionQualifiedName !== data.javaActionQualifiedName) {
            errors.push({
                errorCode: wrongNamedJavaActionErrorCode,
                errorDescription: `The Java action was renamed from ${data.javaActionQualifiedName} to ${data.renamedJavaActionQualifiedName}.`,
                severity: "error",
                elementText: "Name"
            });

            return {
                errors,
                dependentElementIds
            };
        }

        const blobDocumentParameters = action.actionParameters.filter(
            parameter => parameter.actionParameterType.$Type === "CodeActions$CustomBlobDocumentParameterType"
        );

        const correctTypeParameter = blobDocumentParameters.filter(
            parameter =>
                parameter.actionParameterType.$Type === "CodeActions$CustomBlobDocumentParameterType" &&
                parameter.actionParameterType.customDocumentTypeName === withJavaActionDocumentType
        );

        const wrongTypeParameter = blobDocumentParameters.filter(
            parameter =>
                parameter.actionParameterType.$Type === "CodeActions$CustomBlobDocumentParameterType" &&
                parameter.actionParameterType.customDocumentTypeName !== withJavaActionDocumentType
        );

        if (correctTypeParameter.length !== 1 || wrongTypeParameter.length > 0) {
            errors.push({
            errorCode: wrongActionParameterErrorCode,
            errorDescription: `The Java Action "${data.javaActionQualifiedName}" must have a single parameter of type ${withJavaActionDocumentType}.`,
            severity: "error",
            elementText: "Parameter"
        });
        }

        return {
            errors,
            dependentElementIds
        };
    };
}
```

### Tracking JavaAction renamed or re-added with same name after deletion
 Using events from `studioPro.app.projectChanges` it is possible to know when the Java Action gets renamed or re-added with the same name:

 ```typescript
 studioPro.app.projectChanges.addEventListener("elementsRenamed", async ({ elements }) => {
    const javaActionsRenamed = elements.filter(element => element.documentType === "JavaActions$JavaAction");

    const javaActionBlobDocuments = await studioPro.app.model.customBlobDocuments.getDocumentsOfType(withJavaActionDocumentType);
    for (const doc of javaActionBlobDocuments) {
        const d = await studioPro.app.model.customBlobDocuments.getDocumentById<JavaActionDocument>(doc.id);

        if ("document" in d && d.document) {
            for (const javaActionRenamed of javaActionsRenamed) {
                // renamed JavaAction's old name matches our JavaAction, so we track the new name.
                if (javaActionRenamed.oldName.qualifiedName === d.document.contents.javaActionQualifiedName) {
                    d.document.contents.renamedJavaActionQualifiedName = javaActionRenamed.newName.qualifiedName;

                    // always save the document so that the consistency checks run again
                    await studioPro.app.model.customBlobDocuments.updateDocumentContent(d.document.$ID, d.document.contents);
                }

                // renamed JavaAction new name matches our name, we can stop tracking the rename
                if (javaActionRenamed.newName.qualifiedName === d.document.contents.javaActionQualifiedName) {
                    d.document.contents.renamedJavaActionQualifiedName = undefined;

                    // always save the document so that the consistency checks run again
                    await studioPro.app.model.customBlobDocuments.updateDocumentContent(d.document.$ID, d.document.contents);
                }                
            }
        }
    }
});

studioPro.app.projectChanges.addEventListener("documentAdded", async ({ document }) => {
    const javaActionDocuments = await studioPro.app.model.customBlobDocuments.getDocumentsOfType(withJavaActionDocumentType);

    for (const doc of javaActionDocuments) {
        const d = await studioPro.app.model.customBlobDocuments.getDocumentById<JavaActionDocument>(doc.id);

        if ("document" in d && d.document) {
            const javaAction = (await studioPro.app.model.javaActions.loadAll(ja => ja.$ID === document.documentId)).find(
                ja => ja.$ID === document.documentId
            );

            if (javaAction) {
                const qualifiedName = (javaAction as JavaActions.JavaAction & { $QualifiedName: string }).$QualifiedName;

                // new JavaAction is in fact our own
                if (d.document.contents.javaActionQualifiedName === qualifiedName) {
                    d.document.contents.javaActionQualifiedName = qualifiedName;
                    d.document.contents.renamedJavaActionQualifiedName = undefined;
                     
                    // trigger the change to run consistency checks again, since this new
                    // action is probably missing the required parameters of the correct type.
                    await studioPro.app.model.customBlobDocuments.updateDocumentContent(d.document.$ID, d.document.contents);
                }
            }
        }
    }
});
 ```
{{% alert color="info" %}}
 Studio Pro does not track the deletion or renaming of Java Actions that are linked to Custom Blob Documents. So these consistency checks suggested here can help an extension developer handle those cases. It is important to remember that these code samples are simple examples meant to be used as a basis for your own production code.
{{% /alert %}}